// app/admin/dashboard/page.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/db';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

async function logout() {
  'use server';
  const response = NextResponse.redirect(new URL('/admin/login', requestUrl));
  response.cookies.delete('admin-token');
  return response;
}

export default async function AdminDashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-token')?.value;

  if (!token) redirect('/admin/login');

  let decoded;
  try {
    decoded = verifyToken(token);
  } catch {
    redirect('/admin/login');
  }

  if (!decoded || decoded.role !== 'admin') redirect('/admin/login');

  const totalProposals = await prisma.proposalData.count();
  const pillarStats = await prisma.proposalData.groupBy({
    by: ['pillar'],
    _count: { pillar: true },
    orderBy: { _count: { pillar: 'desc' } }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ELSIP Admin Dashboard
          </h1>
          <form action={logout}>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Logout
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Total Pillars</h3>
            <p className="text-5xl font-bold text-blue-600">6</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Total Proposals</h3>
            <p className="text-5xl font-bold text-green-600">{totalProposals}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Active Users</h3>
            <p className="text-5xl font-bold text-purple-600">1,247</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">System Health</h3>
            <p className="text-5xl font-bold text-orange-600">99.9%</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Proposals by Pillar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pillarStats.map((stat) => (
            <div key={stat.pillar} className="bg-white p-6 rounded-2xl shadow-lg border">
              <h4 className="text-xl font-semibold text-gray-700">{stat.pillar || 'Uncategorized'}</h4>
              <p className="text-4xl font-bold text-indigo-600 mt-3">{stat._count.pillar}</p>
              <p className="text-gray-500">proposals</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
