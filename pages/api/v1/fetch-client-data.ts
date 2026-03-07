import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  const { userId } = req.query;

  // ১. Supabase থেকে ওই ক্লায়েন্টের এনক্রিপ্টেড কী তুলে আনা
  const { data: config, error } = await supabase
    .from('client_configs')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error || !config) return res.status(404).json({ error: 'Config not found' });

  // ২. ক্লায়েন্টের নিজস্ব Stripe Key ব্যবহার করে ডাটা ফেচ করা
  const stripe = new Stripe(config.stripe_key);
  const paymentIntents = await stripe.paymentIntents.list({ limit: 5 });

  res.status(200).json({
    payments: paymentIntents.data,
    aiStatus: config.openai_key ? 'Active' : 'Missing Key',
    whatsappStatus: config.whatsapp_token ? 'Connected' : 'Disconnected'
  });
}
