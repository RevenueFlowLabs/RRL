import { useState } from 'react';

export default function TestModeWidget() {
  const [loading, setLoading] = useState(false);

  const sendTestMessage = async () => {
    setLoading(true);
    // আমাদের তৈরি করা /api/webhooks/stripe রুটে একটি ডামি ডাটা পাঠাবে
    const response = await fetch('/api/webhooks/stripe?test=true', {
      method: 'POST',
      body: JSON.stringify({
        type: 'invoice.payment_failed',
        data: { object: { customer_email: 'test@example.com', amount_due: 5000, currency: 'usd' } }
      })
    });
    setLoading(false);
    if(response.ok) alert("Test Message Sent Successfully!");
  };

  return (
    <button 
      onClick={sendTestMessage}
      className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-bold border border-indigo-100 hover:bg-indigo-100"
    >
      {loading ? "Processing..." : "🚀 Run System Test"}
    </button>
  );
}
