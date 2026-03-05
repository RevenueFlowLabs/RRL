
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const user = useUser();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleProfileComplete = () => {
    router.push('/dashboard?profile_completed=true');
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl border shadow-sm">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-500">Email Address</label>
            <p className="font-medium">{user?.email}</p>
          </div>
          <button 
            onClick={handleProfileComplete}
            className="w-full bg-emerald-50 text-emerald-600 py-2 rounded-lg font-semibold hover:bg-emerald-100 transition mb-4"
          >
            Mark Profile as Complete
          </button>
          <button 
            onClick={() => supabase.auth.signOut()}
            className="w-full bg-red-50 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-100 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
