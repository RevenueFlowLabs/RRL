import React from 'react';
import DashboardLayout from '../src/components/layout/DashboardLayout';

const guides = [
  { title: "Quick Start Guide", content: "Learn how to set up your RevenueFlow account in under 5 minutes." },
  { title: "Connecting Stripe", content: "Step-by-step instructions to sync your unpaid invoices directly to our dashboard." },
  { title: "AI Customization", content: "How to switch between Gemini and GPT-4 for your recovery messages." },
  { title: "WhatsApp Integration", content: "Setting up your WhatsApp API for automated customer reminders." }
];

export default function HelpCenter() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-extrabold mb-4">Help Center</h1>
        <p className="text-slate-500 mb-12 text-lg">Everything you need to know to maximize your revenue recovery.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div key={guide.title} className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 transition cursor-pointer shadow-sm">
              <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
              <p className="text-slate-600 leading-relaxed">{guide.content}</p>
              <button className="mt-4 text-blue-600 font-bold hover:underline">Read More →</button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-900 rounded-3xl text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
          <p className="text-slate-400 mb-6">Our support team is available 24/7 for Enterprise clients.</p>
          <button className="bg-blue-600 px-8 py-3 rounded-xl font-bold">Contact Support</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
