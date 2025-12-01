import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { verifyPassword, createToken } from '@/lib/auth';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    
    const admin = await prisma.adminUser.findUnique({
      where: { email }
    });

    if (!admin || !await verifyPassword(password, admin.password)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = createToken({ userId: admin.id, role: admin.role });
    
    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
