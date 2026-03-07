import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  // নিরাপত্তা নিশ্চিত করতে সিক্রেট কি চেক (Cron Job এর জন্য)
  const { auth_key } = req.query;
  if (auth_key !== process.env.CRON_SECRET) return res.status(401).send('Unauthorized');

  // গত ৭ দিনের ডাটা ফেচ করা
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const { data: logs } = await supabase
    .from('recovery_logs')
    .select('amount, status')
    .gte('created_at', sevenDaysAgo.toISOString());

  const totalRecovered = logs?.filter(l => l.status === 'paid').reduce((s, l) => s + l.amount, 0) || 0;
  const earnings = totalRecovered * 0.10; // আপনার ১০% কমিশন

  // এখানে ইমেইল পাঠানোর লজিক (যেমন: Resend বা SendGrid ব্যবহার করে)
  console.log(`Weekly Report: Recovered $${totalRecovered}, Your Share $${earnings}`);

  res.status(200).json({ success: true, totalRecovered, earnings });
}
