import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  // লেমন স্কুইজি থেকে আসা পেমেন্ট ডাটা ফেচ করা
  const { data: logs } = await supabase
    .from('recovery_logs')
    .select('*')
    .order('created_at', { ascending: false });
    
  res.status(200).json({ logs });
}
