import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="p-8 bg-slate-50 min-h-screen font-sans">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden max-w-2xl">
          <div className="p-6 border-b border-slate-100">
            <label className="block text-sm font-bold mb-2">Company Name</label>
            <input type="text" className="w-full border rounded-lg p-2 bg-slate-50" placeholder="Revenue Recovery Labs" />
          </div>
          <div className="p-6 border-b border-slate-100">
            <label className="block text-sm font-bold mb-2">Support Email</label>
            <input type="email" className="w-full border rounded-lg p-2 bg-slate-50" placeholder="support@rrl.com" />
          </div>
          <div className="p-6 bg-slate-50 text-right">
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold">Save Changes</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}