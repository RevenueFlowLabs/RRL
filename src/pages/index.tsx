import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Head><title>Revenue Recovery Labs | AI Dunning</title></Head>
      
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-600">RRL.</div>
        <div className="space-x-6 text-sm font-semibold hidden md:block">
          <Link href="#features" className="hover:text-blue-600">Features</Link>
          <Link href="#pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/login" className="hover:text-blue-600">Login</Link>
          <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</Link>
        </div>
      </nav>

      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
          Recover <span className="text-blue-600">15% More</span> Revenue <br/> Automatically with AI.
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Stop losing subscribers to failed credit cards. Our smart recovery engine handles the dunning so you can focus on growth.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition">Start Free Trial</Link>
          <Link href="#pricing" className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50">View Pricing</Link>
        </div>
      </section>

      <section id="features" className="py-20 bg-white border-y border-slate-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Automated Dunning</h3>
            <p className="text-slate-500">Smart email sequences that recover failed payments without manual work.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Detailed Analytics</h3>
            <p className="text-slate-500">Track every dollar recovered and see your churn rate drop in real-time.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔌</div>
            <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
            <p className="text-slate-500">Connect Stripe in 2 minutes and let our AI handle the rest.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 text-sm">
        © 2026 Revenue Recovery Labs. All rights reserved.
      </footer>
    </div>
  )
}