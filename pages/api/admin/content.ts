import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data } = await supabase.from('platform_settings').select('landing_page_config').single();
    res.status(200).json(data?.landing_page_config || {});
  }
  
  if (req.method === 'POST') {
    const { config } = req.body;
    const { error } = await supabase
      .from('platform_settings')
      .update({ landing_page_config: config })
      .eq('id', 1);
    
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ success: true });
  }
}
