import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <Head><title>Revenue Recovery Labs</title></Head>
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-blue-600">RRL.</div>
        <div className="space-x-8 font-bold text-sm">
          <Link href="/login" className="hover:text-blue-600">Login</Link>
          <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Launch App</Link>
        </div>
      </nav>
      <main className="text-center py-32 px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
          Recover Revenue <br/><span className="text-blue-600">While You Sleep.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
          Automate failed payment recovery and reduce churn with our smart AI engine.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/dashboard" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:bg-slate-800 transition">Get Started Free</Link>
        </div>
      </main>
    </div>
  )
}