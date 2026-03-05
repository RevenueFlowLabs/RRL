import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function PaymentsPage() {
  const supabase = useSupabaseClient();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function fetchPayments() {
      const { data } = await supabase.from('failed_payments').select('*');
      if (data) setPayments(data);
    }
    fetchPayments();
  }, [supabase]);

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg border shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-sm">Client ID</th>
              <th className="p-4 font-semibold text-sm">Amount</th>
              <th className="p-4 font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {payments.map((p) => (
              <tr key={p.id}>
                <td className="p-4 text-sm">{p.client_id}</td>
                <td className="p-4 text-sm font-medium">${p.amount}</td>
                <td className="p-4 text-sm">
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Failed</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}