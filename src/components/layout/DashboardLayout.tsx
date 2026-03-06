import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
        <div className="p-6 text-2xl font-bold border-b border-slate-800 text-blue-400">RRL Admin</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="block p-3 rounded-lg hover:bg-slate-800 transition font-medium">🏠 Overview</Link>
          <Link href="/integrations" className="block p-3 rounded-lg hover:bg-slate-800 transition font-medium">🔌 Integrations</Link>
          <Link href="/billing" className="block p-3 rounded-lg hover:bg-slate-800 transition font-medium">💳 Billing</Link>
          <Link href="/settings" className="block p-3 rounded-lg hover:bg-slate-800 transition font-medium">⚙️ Settings</Link>
        </nav>
        <div className="p-6 border-t border-slate-800">
          <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to Site</Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div className="text-slate-400 text-sm italic">Status: System Online</div>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">U</div>
        </header>
        {children}
      </main>
    </div>
  );
}