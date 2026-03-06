import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Head>
        <title>Revenue Recovery Labs | Automate Your Growth</title>
      </Head>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
        <div className="text-xl font-bold tracking-tight text-blue-600">RRL.</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 transition">Solutions</a>
          <a href="#" className="hover:text-blue-600 transition">Pricing</a>
          <a href="/dashboard" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Launch App</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Recover Lost Revenue <br /> with Smart AI.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Stop losing customers to failed payments. Revenue Recovery Labs uses automated workflows to protect your subscription growth.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg">
            Start Free Trial
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition">
            View Live Demo
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-slate-100 pt-16">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2M+</div>
            <div className="text-slate-500 font-medium text-sm tracking-wide uppercase">Revenue Recovered</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-slate-500 font-medium text-sm tracking-wide uppercase">Dunning Accuracy</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-slate-500 font-medium text-sm tracking-wide uppercase">SaaS Partners</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 Revenue Recovery Labs. All rights reserved.
      </footer>
    </div>
  )
}
