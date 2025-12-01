'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/20 max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}
