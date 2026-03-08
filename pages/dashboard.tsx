import React from 'react';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Revenue Recovered', value: '$2,450,000', change: '+12.5%', icon: DollarSign },
    { name: 'Active SaaS Partners', value: '150+', change: '+3.2%', icon: Users },
    { name: 'Recovery Accuracy', value: '99.9%', change: 'Stable', icon: Activity },
    { name: 'Monthly Growth', value: '24%', change: '+4.1%', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Revenue Recovery Analytics</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className={`text-sm font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-slate-500'}`}>
                  {item.change}
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">{item.name}</h3>
              <p className="text-2xl font-bold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Live Feed Placeholder */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Recent Recovery Activity</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Payment Recovered from Customer #{i * 1234}</p>
                    <p className="text-xs text-slate-500">2 minutes ago via Stripe</p>
                  </div>
                </div>
                <span className="font-semibold text-slate-900">+$129.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;