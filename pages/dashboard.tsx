import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h4 className="text-slate-500 text-sm font-bold uppercase mb-2 tracking-wider">Revenue Recovered</h4>
          <p className="text-3xl font-black text-blue-600">$12,450</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h4 className="text-slate-500 text-sm font-bold uppercase mb-2 tracking-wider">Recovery Rate</h4>
          <p className="text-3xl font-black text-green-600">88.4%</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h4 className="text-slate-500 text-sm font-bold uppercase mb-2 tracking-wider">Active Workflows</h4>
          <p className="text-3xl font-black text-slate-900">12</p>
        </div>
      </div>
    </DashboardLayout>
  );
}