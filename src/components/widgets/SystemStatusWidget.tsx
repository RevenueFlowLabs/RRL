
import { useEffect, useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

export default function SystemStatusWidget() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [config, setConfig] = useState<any>(null);
  const [sub, setSub] = useState<any>(null);

  useEffect(() => {
    async function getStatus() {
      if (!user) return;
      
      // API Credentials চেক
      const { data: creds } = await supabase
        .from('client_api_credentials')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      // Subscription স্ট্যাটাস চেক
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setConfig(creds);
      setSub(subscription);
    }
    getStatus();
  }, [user, supabase]);

  const StatusItem = ({ label, isConnected, type = "check" }: any) => (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
      <span className="text-sm font-medium text-slate-600">{label}</span>
      <div className="flex items-center gap-2">
        {isConnected ? (
          <span className="flex items-center gap-1 text-xs font-bold text-green-600">
            {type === "live" ? "🟢 LIVE" : "✅ Connected"}
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs font-bold text-red-400">
            ❌ Disconnected
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
        🛰️ System Live Status
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <StatusItem label="Stripe Connection" isConnected={!!config?.stripe_key} />
        <StatusItem label="OpenAI Status" isConnected={!!config?.openai_key} />
        <StatusItem label="WhatsApp Connection" isConnected={!!config?.whatsapp_api_key} />
        <StatusItem label="Email Connection" isConnected={!!config?.email_api_key} />
        <StatusItem label="SMS Connection" isConnected={!!config?.sms_api_key} />
        <StatusItem 
          label="Account Status" 
          isConnected={sub?.status === 'active'} 
          type="live" 
        />
      </div>

      {sub?.status !== 'active' && (
        <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>Note:</strong> Your account is pending admin approval. Once approved, the system will start sending automated recovery messages.
          </p>
        </div>
      )}
    </div>
  );
}
