import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  // ১. টোটাল ইউজার কাউন্ট
  const { count: userCount } = await supabase.from('client_configs').select('*', { count: 'exact', head: true });
  
  // ২. কতজন ইউজার এপিআই কী সেটআপ করেছে
  const { count: setupComplete } = await supabase.from('client_configs').select('*', { count: 'exact', head: true }).not('stripe_key', 'is', null);

  // ৩. আজকের রিকভারি এবং কমিশন (কাল্পনিক লজিক যা আপনার ডাটাবেস থেকে আসবে)
  const today = new Date().toISOString().split('T')[0];
  const { data: dailyLogs } = await supabase.from('recovery_logs').select('amount').gte('created_at', today);
  
  const dailyRecovered = dailyLogs?.reduce((s, l) => s + l.amount, 0) || 0;
  const estimatedEarnings = dailyRecovered * 0.10;

  res.status(200).json({ 
    totalUsers: userCount, 
    activeSetups: setupComplete, 
    dailyRecovered, 
    estimatedEarnings 
  });
}
