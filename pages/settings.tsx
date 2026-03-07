import React, { useState, useEffect } from 'react';
import { supabase } from '../src/lib/supabaseClient'; // আপনার সুপাবেস ক্লায়েন্ট পাথ নিশ্চিত করুন

export default function Settings() {
  const [config, setConfig] = useState({
    stripe_key: '', openai_key: '', whatsapp_token: '', sms_api_key: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSave = async (field, value) => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from('client_configs')
      .upsert({ 
        user_id: user?.id, 
        [field]: value, 
        updated_at: new Date() 
      });

    setLoading(false);
    if (error) alert('Error saving: ' + error.message);
    else alert(field.replace('_', ' ').toUpperCase() + ' saved successfully!');
  };

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900">Integrations Center</h1>
          <p className="text-slate-500 mt-2">Manage your third-party API keys and system configurations.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stripe Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 font-bold">St</div>
              <h3 className="font-bold text-lg text-slate-800">Stripe Payments</h3>
            </div>
            <input 
              type="password" 
              placeholder="sk_test_••••••••••••" 
              className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setConfig({...config, stripe_key: e.target.value})}
            />
            <button 
              onClick={() => handleSave('stripe_key', config.stripe_key)}
              disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition active:scale-[0.98]"
            >
              {loading ? 'Saving...' : 'Connect Stripe'}
            </button>
          </div>

          {/* OpenAI Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600 font-bold">AI</div>
              <h3 className="font-bold text-lg text-slate-800">OpenAI (GPT-4)</h3>
            </div>
            <input 
              type="password" 
              placeholder="sk-••••••••••••••••" 
              className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 focus:ring-2 focus:ring-emerald-500 outline-none"
              onChange={(e) => setConfig({...config, openai_key: e.target.value})}
            />
            <button 
              onClick={() => handleSave('openai_key', config.openai_key)}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition active:scale-[0.98]"
            >
              Save AI Key
            </button>
          </div>

          {/* WhatsApp Cloud API */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-2xl text-green-600 font-bold">WA</div>
              <h3 className="font-bold text-lg text-slate-800">WhatsApp API</h3>
            </div>
            <input 
              type="text" 
              placeholder="Access Token" 
              className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 focus:ring-2 focus:ring-green-500 outline-none"
              onChange={(e) => setConfig({...config, whatsapp_token: e.target.value})}
            />
            <button 
              onClick={() => handleSave('whatsapp_token', config.whatsapp_token)}
              className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition"
            >
              Enable WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}