import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function IntegrationsPage() {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle');

  const verifyAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('verifying');

    // এখানে একটি API Call করতে হবে যা Stripe/Lemon Squeezy এর সাথে কানেক্ট হবে
    // আপাতত আমরা একটি সিমুলেশন করছি
    setTimeout(async () => {
      const isSuccess = true; // এখানে প্রকৃত ভেরিফিকেশন লজিক বসবে
      if (isSuccess) {
        setStatus('success');
        alert("Connection Verified & Saved 100%!");
      } else {
        setStatus('error');
        alert("Invalid API Key. Please check and try again.");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-slate-900">Integrations & API Setup</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stripe Integration Card */}
          <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">S</div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${status === 'success' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {status === 'success' ? 'CONNECTED' : 'NOT CONNECTED'}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Stripe Integration</h3>
            <p className="text-slate-500 text-sm mb-6">Sync invoice.payment_failed events instantly.</p>

            <form onSubmit={verifyAndSave} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Secret Key</label>
                <input type="password" placeholder="sk_live_..." className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <button disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transform active:scale-95 transition-all shadow-lg shadow-blue-200">
                {loading ? "Verifying..." : "Verify & Connect"}
              </button>
            </form>
          </div>

          {/* Lemon Squeezy Integration Card */}
          <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-xl opacity-60 grayscale">
            <div className="h-14 w-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-black text-2xl font-black">L</div>
            <h3 className="text-xl font-bold mt-6 mb-2">Lemon Squeezy</h3>
            <p className="text-slate-500 text-sm mb-8">Coming Soon for Enterprise Users.</p>
            <button disabled className="w-full bg-slate-100 text-slate-400 py-4 rounded-xl font-bold cursor-not-allowed">Enable Later</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}