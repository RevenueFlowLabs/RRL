import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, DollarSign, RefreshCcw } from 'lucide-react';

const RevenueTracker = () => {
  // ডামি ডাটা (পরবর্তীতে এপিআই এর সাথে কানেক্ট হবে)
  const [data] = useState([
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
  ]);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Automatic Revenue Tracking</h2>
          <p className="text-sm text-slate-500">Live monitoring of recovered subscription revenue</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            +24.5% Growth
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-blue-50 rounded-xl">
          <p className="text-xs text-blue-600 font-medium uppercase">Total Recovered</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">$2.4M</h3>
        </div>
        <div className="p-4 bg-purple-50 rounded-xl">
          <p className="text-xs text-purple-600 font-medium uppercase">Failed Payments Saved</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">1,240</h3>
        </div>
        <div className="p-4 bg-orange-50 rounded-xl">
          <p className="text-xs text-orange-600 font-medium uppercase">Churn Prevented</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">89%</h3>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#2563eb" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueTracker;