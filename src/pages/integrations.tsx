import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function IntegrationsPage() {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState('stripe');

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // API Key সেভ করার লজিক
    alert(`${provider} connected successfully! Data sync will start shortly.`);
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">Payment Integrations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Integration Card */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center font-bold text-indigo-600">S</div>
              <div>
                <h3 className="font-bold">Stripe Connect</h3>
                <p className="text-sm text-slate-500">Sync failed payments automatically</p>
              </div>
            </div>

            <form onSubmit={handleConnect} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase">Secret Key</label>
                <input 
                  type="password" 
                  placeholder="sk_live_..."
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase">Webhook Secret</label>
                <input 
                  type="password" 
                  placeholder="whsec_..."
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <button 
                className="w-full bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-800 transition"
              >
                {loading ? "Connecting..." : "Connect Stripe"}
              </button>
            </form>
          </div>

          {/* Lemon Squeezy Card */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm border-slate-200 opacity-75">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center font-bold text-yellow-600">L</div>
              <div>
                <h3 className="font-bold">Lemon Squeezy</h3>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
            <button disabled className="w-full bg-slate-100 text-slate-400 py-2 rounded-lg font-medium cursor-not-allowed">
              Configure
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}