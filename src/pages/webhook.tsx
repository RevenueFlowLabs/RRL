import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useUser } from "@supabase/auth-helpers-react";

export default function WebhookSetup() {
  const user = useUser();
  // প্রতিটি ক্লায়েন্টের জন্য আলাদা ইউনিক ইউআরএল
  const webhookUrl = `https://rrl-api.vercel.app/api/webhooks/stripe?client_id=${user?.id}`;

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl border shadow-md">
        <h2 className="text-xl font-bold mb-4 text-indigo-700">Final Step: Active Real-time Sync</h2>
        <p className="text-slate-500 mb-6 text-sm">
          Copy this URL and paste it into your Stripe Dashboard under <b>Developers > Webhooks</b>. 
          Enable the event: <code>invoice.payment_failed</code>
        </p>

        <div className="flex items-center gap-2 p-4 bg-slate-50 border rounded-xl mb-6">
          <code className="text-xs text-indigo-600 flex-1 break-all">{webhookUrl}</code>
          <button 
            onClick={() => navigator.clipboard.writeText(webhookUrl)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold"
          >
            Copy
          </button>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
          <p className="text-xs text-amber-700 font-medium">
            ⚠️ Note: Without this URL setup, the AI cannot send instant WhatsApp/SMS notifications.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}