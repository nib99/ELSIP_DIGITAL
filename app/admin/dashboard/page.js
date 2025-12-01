import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/db';
import { Button } from '@/components/ui/button';

export default async function AdminDashboard() {
  const token = cookies().get('admin-token')?.value;
  if (!token) redirect('/admin/login');

  const decoded = verifyToken(token);
  if (!decoded || decoded.role !== 'admin') redirect('/admin/login');

  const stats = await prisma.proposalData.groupBy({
    by: ['pillar'],
    _count: { id: true }
  });

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <Button>Logout</Button>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-4">Total Pillars</h3>
          <p className="text-4xl font-bold">6</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-4">Users</h3>
          <p className="text-4xl font-bold">1,247</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-4">Proposals</h3>
          <p className="text-4xl font-bold">{stats.length}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-4">Compliance</h3>
          <p className="text-4xl font-bold">97%</p>
        </div>
      </div>
    </div>
  );
}
