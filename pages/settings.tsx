import React, { useState } from 'react';

export default function Settings() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold mb-6">System Configuration</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Google Gemini API Key</label>
            <input type="password" placeholder="Enter your key here..." className="mt-1 block w-full border border-slate-300 rounded-md p-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Stripe Secret Key</label>
            <input type="password" placeholder="sk_test_..." className="mt-1 block w-full border border-slate-300 rounded-md p-2" />
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
            Save Credentials
          </button>
        </div>
        <p className="mt-4 text-xs text-slate-500 italic">* Keys will be stored securely in your database/environment.</p>
      </div>
    </div>
  );
}
