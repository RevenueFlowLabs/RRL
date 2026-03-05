
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useRouter } from 'next/router';
import confetti from 'canvas-confetti';

export default function DashboardPage() {
  const supabase = useSupabaseClient();
  const [stats, setStats] = useState({ totalFailed: 0, recovered: 0 });
  const [chartData, setChartData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.profile_completed) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4F46E5', '#10B981', '#F59E0B']
      });
      alert("Profile 100% Complete! System is now Live.");
    }
  }, [router.query.profile_completed]);

  useEffect(() => {
    async function fetchDashboardData() {
      const { data } = await supabase.from('failed_payments').select('*');
      
      if (data) {
        const total = data.reduce((acc, curr) => acc + (curr.amount || 0), 0);
        setStats({ totalFailed: total, recovered: 0 });
        setChartData(data.map(p => ({ name: new Date(p.created_at).toLocaleDateString(), amount: p.amount })));
      }
    }
    fetchDashboardData();
  }, [supabase]);

  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium">Total Failed Revenue</CardTitle></CardHeader>
          <CardContent><div className="text-2xl font-bold text-red-600">${stats.totalFailed}</div></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium">Recovered Amount</CardTitle></CardHeader>
          <CardContent><div className="text-2xl font-bold text-emerald-600">${stats.recovered}</div></CardContent>
        </Card>
      </div>

      <Card className="p-6 h-[400px]">
        <CardTitle className="mb-4">Failed Payments Trend</CardTitle>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </DashboardLayout>
  );
}
