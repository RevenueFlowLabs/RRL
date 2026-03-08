import React from 'react';
import RevenueTracker from '../components/dashboard/RevenueTracker';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Overview</h1>
          <p className="text-slate-500">Welcome back to RevenueFlowLabs Control Panel</p>
        </header>
        
        <RevenueTracker />
      </div>
    </div>
  );
}