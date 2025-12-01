import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ELSIP Platform
              </Link>
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
                <Link href="/problem" className="text-gray-700 hover:text-blue-600 font-medium">Problem</Link>
                <Link href="/pillars" className="text-gray-700 hover:text-blue-600 font-medium">Pillars</Link>
                <Link href="/roadmap" className="text-gray-700 hover:text-blue-600 font-medium">Roadmap</Link>
                <Link href="/budget" className="text-gray-700 hover:text-blue-600 font-medium">Budget</Link>
                <Link href="/kpis" className="text-gray-700 hover:text-blue-600 font-medium">KPIs</Link>
                <Link href="/admin/login" className="text-gray-700 hover:text-blue-600 font-medium">Admin</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </main>
      </body>
    </html>
  );
}
