import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const plans = [
    { name: 'Starter', price: '$0', share: '10%', limit: 'Unlimited', channels: 'All Channels', ai: 'Built-in Gemini AI', btn: 'Start Free' },
    { name: 'Standard', price: '$99', share: '5%', limit: '$5,000', channels: 'Email + WhatsApp', ai: 'Advanced AI', btn: 'Get Standard' },
    { name: 'Pro', price: '$499', share: '1%', limit: '$50,000', channels: 'All Channels', ai: 'Personalized GPT-4', btn: 'Go Pro' },
    { name: 'Enterprise', price: '$999', share: '0%', limit: 'Unlimited', channels: 'Custom Support', ai: 'Dedicated Model', btn: 'Contact' }
  ];

  return (
    <div className="bg-[#fcfcfd] font-sans text-slate-900 min-h-screen">
      {/* Navbar with better spacing */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto border-b border-slate-100">
        <h1 className="text-2xl font-black tracking-tighter text-blue-600 italic">RevenueFlow AI</h1>
        <div className="space-x-8 hidden md:flex items-center font-medium text-slate-500">
          <a href="#features" className="hover:text-blue-600 transition">Solutions</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <Link href="/dashboard" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-100 transition hover:bg-blue-600">Launch App</Link>
        </div>
      </nav>

      {/* Hero Section: Centered and Clean */}
      <header className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 animate-pulse">
          🚀 Zero-Config AI Recovery Now Live
        </div>
        <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
          Recover Revenue <br /> 
          <span className="text-blue-600">Without Effort</span>
        </h2>
        <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          The only automated recovery engine using <b>Hybrid AI</b> to reach customers via WhatsApp, SMS, and Email. No API keys needed to start.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link href="/dashboard" className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition shadow-2xl shadow-blue-200">
            Get Started Free
          </Link>
          <button className="text-slate-500 font-bold hover:text-slate-900 transition">View Live Demo →</button>
        </div>
      </header>

      {/* Trust Stats */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-100 text-center">
        <div><h4 className="text-3xl font-bold">$2M+</h4><p className="text-sm text-slate-400">Recovered</p></div>
        <div><h4 className="text-3xl font-bold">99.9%</h4><p className="text-sm text-slate-400">Accuracy</p></div>
        <div><h4 className="text-3xl font-bold">150+</h4><p className="text-sm text-slate-400">SaaS Partners</p></div>
        <div><h4 className="text-3xl font-bold">Zero</h4><p className="text-sm text-slate-400">Setup Fee</p></div>
      </div>

      {/* Pricing: The Core Business Logic */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-32 bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Pricing that scales with you</h2>
          <p className="text-slate-500">Choose a plan based on your monthly recovery volume.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50 transition-all flex flex-col group">
              <h3 className="text-lg font-bold text-slate-400 group-hover:text-blue-600">{p.name}</h3>
              <div className="text-4xl font-black mt-2 mb-1">{p.price}</div>
              <div className="text-emerald-600 text-xs font-bold mb-8">+{p.share} Rev Share</div>
              <ul className="space-y-4 text-sm text-slate-500 flex-1">
                <li className="flex items-center gap-2">✅ <b>{p.limit}</b> Recovery</li>
                <li className="flex items-center gap-2">✅ {p.channels}</li>
                <li className="flex items-center gap-2">✅ {p.ai}</li>
              </ul>
              <Link href="/dashboard" className="mt-8 block text-center bg-white border border-slate-200 py-4 rounded-2xl font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition">
                {p.btn}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center text-slate-400 text-xs tracking-widest border-t border-slate-50">
        © 2026 REVENUE RECOVERY LABS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
