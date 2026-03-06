export default function Billing() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6">Billing & Plans</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white p-6 rounded-xl border-2 border-blue-600 shadow-lg relative">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-xl text-xs font-bold">Current Plan</div>
          <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
          <p className="text-4xl font-black mb-4">$49<span className="text-lg text-slate-400">/mo</span></p>
          <ul className="text-sm text-slate-600 space-y-2 mb-6">
            <li>✓ Unlimited Recoveries</li>
            <li>✓ Priority Support</li>
            <li>✓ Custom Email Templates</li>
          </ul>
        </div>
      </div>
    </div>
  )
}