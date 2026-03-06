import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // ১. ডাটাবেজ কানেকশন চেক
    const { data, error } = await supabase.from('user_profiles').select('count').limit(1);
    if (error) throw new Error('Database connection failed');

    // ২. এনভায়রনমেন্ট ভ্যারিয়েবল চেক
    const envCheck = {
      supabase: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      stripe: !!process.env.STRIPE_SECRET_KEY,
      openai: !!process.env.OPENAI_API_KEY
    };

    res.status(200).json({
      status: '🚀 System Healthy',
      database: '✅ Connected',
      env: envCheck,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    res.status(500).json({ status: '🔴 System Unhealthy', error: err.message });
  }
}