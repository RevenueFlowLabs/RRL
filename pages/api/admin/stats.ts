import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data: configs } = await supabase.from('client_configs').select('*');
    // প্ল্যাটফর্ম লেভেল সেটিংস (যেমন লেমন স্কুইজি) সুপাবেস এর একটি আলাদা টেবিল থেকে আসবে
    const { data: globalSettings } = await supabase.from('platform_settings').select('*').single();
    
    res.status(200).json({ clients: configs, settings: globalSettings });
  }

  if (req.method === 'POST') {
    const { webhook_secret, api_key } = req.body;
    const { error } = await supabase
      .from('platform_settings')
      .upsert({ id: 1, lemon_squeezy_webhook_secret: webhook_secret, lemon_squeezy_api_key: api_key });
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ success: true });
  }
}
