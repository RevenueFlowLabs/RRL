import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  // ১. সব সাকসেসফুল রিকভারি লগ নিয়ে আসা
  const { data: logs } = await supabase
    .from('recovery_logs')
    .select('amount, user_id, status')
    .eq('status', 'paid');

  // ২. আপনার ১০% বা ৫% কমিশন ক্যালকুলেট করা (আপনার হাইব্রিড মডেল অনুযায়ী)
  const totalRecovered = logs?.reduce((sum, log) => sum + log.amount, 0) || 0;
  const yourCommission = totalRecovered * 0.10; // ডিফল্ট ১০% ধরে

  res.status(200).json({ totalRecovered, yourCommission, count: logs?.length || 0 });
}
