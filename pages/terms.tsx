import React from 'react';
import DashboardLayout from '../src/components/layout/DashboardLayout';

export default function Terms() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto py-10 prose prose-slate">
        <h1 className="text-4xl font-black mb-6">Terms of Service</h1>
        <p className="text-slate-500">Last updated: March 2026</p>
        
        <h2 className="text-2xl font-bold mt-8">1. Revenue Share Model</h2>
        <p>By using RevenueFlow AI, you agree to our hybrid pricing model. For the Starter plan, we collect a 10% commission on all successfully recovered revenue through our platform.</p>
        
        <h2 className="text-2xl font-bold mt-8">2. AI Usage</h2>
        <p>Our platform uses Gemini and OpenAI API to generate messages. You are responsible for the final content sent to your customers.</p>
        
        <h2 className="text-2xl font-bold mt-8">3. Payments & Fees</h2>
        <p>Subscription fees are billed monthly via Lemon Squeezy. Failure to pay may result in service suspension.</p>
      </div>
    </DashboardLayout>
  );
}
