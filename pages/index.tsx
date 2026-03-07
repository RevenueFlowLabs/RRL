import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="p-10 font-sans max-w-4xl mx-auto">
      <nav className="flex gap-6 mb-20 border-b pb-4">
        <Link href="/" className="font-bold text-blue-600">Home</Link>
        <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
        <Link href="/settings" className="hover:text-blue-500">Settings</Link>
        <Link href="/admin" className="hover:text-blue-500 text-red-500">Admin</Link>
      </nav>

      <h1 className="text-5xl font-extrabold mb-6 text-slate-900">
        Recover Lost Revenue with Smart AI.
      </h1>
      <p className="text-xl text-slate-600 mb-10">
        Stop losing customers to failed payments. Revenue Recovery Labs uses automated workflows to protect your subscription growth.
      </p>
      
      <div className="flex gap-4">
        <Link href="/dashboard" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold">Start Free Trial</Link>
        <Link href="/settings" className="border px-8 py-4 rounded-xl font-bold">View Settings</Link>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-8 border-t pt-10">
        <div><h3 className="text-2xl font-bold">$2M+</h3><p>Revenue Recovered</p></div>
        <div><h3 className="text-2xl font-bold">99.9%</h3><p>Dunning Accuracy</p></div>
      </div>
    </div>
  );
}
