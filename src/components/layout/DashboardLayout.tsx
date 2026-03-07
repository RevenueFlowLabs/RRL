import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-10 text-blue-400">RevenueFlow AI</h2>
        <nav className="space-y-4">
          <Link href="/dashboard" className="block p-3 hover:bg-slate-800 rounded-lg">📊 Dashboard</Link>
          <Link href="/settings" className="block p-3 hover:bg-slate-800 rounded-lg">⚙️ Settings</Link>
          <Link href="/admin" className="block p-3 hover:bg-slate-800 rounded-lg text-red-400">🛡️ Super Admin</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8 border-b pb-4">
          <Link href="/" className="text-slate-500 hover:text-blue-600">← Back to Home</Link>
          <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">Pro Account</div>
        </header>
        {children}
      </main>
    </div>
  );
}