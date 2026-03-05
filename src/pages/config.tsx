import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function ConfigPage() {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [retryDays, setRetryDays] = useState(3);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // client_configs টেবিলে ডাটা সেভ করার লজিক
    const { error } = await supabase
      .from('client_configs')
      .upsert({ retry_threshold: retryDays, updated_at: new Date() });
    
    if (!error) alert("Settings saved successfully!");
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Recovery Automation Rules</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Retry Threshold (Days)</label>
            <input 
              type="number" 
              value={retryDays}
              onChange={(e) => setRetryDays(Number(e.target.value))}
              className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Notification Template</label>
            <textarea 
              className="w-full p-3 border border-slate-200 rounded-lg h-32 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Hi, your payment of {{amount}} failed. Please update your card."
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition shadow-md"
          >
            {loading ? "Saving Changes..." : "Save Configuration"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}