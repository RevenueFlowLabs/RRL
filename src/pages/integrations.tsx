export default function Integrations() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6">Integrations</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-md">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-lg">Stripe</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Recommended</span>
        </div>
        <p className="text-slate-500 mb-6 text-sm">Connect your Stripe account to start recovering revenue automatically.</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700">Connect Stripe</button>
      </div>
    </div>
  )
}