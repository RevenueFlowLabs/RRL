import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  const { userId, customerName, amount, dueDate } = req.body;

  // ১. সুপাবেস থেকে ক্লায়েন্টের OpenAI কী তুলে আনা
  const { data: config } = await supabase
    .from('client_configs')
    .select('openai_key')
    .eq('user_id', userId)
    .single();

  if (!config?.openai_key) return res.status(400).json({ error: 'OpenAI Key missing in settings' });

  const openai = new OpenAI({ apiKey: config.openai_key });

  // ২. AI-কে দিয়ে পারসোনালাইজড মেসেজ তৈরি করানো
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a professional payment recovery assistant. Write a polite but firm reminder." },
      { role: "user", content: `Write a short WhatsApp reminder for ${customerName} who owes $${amount} due on ${dueDate}.` }
    ],
  });

  res.status(200).json({ message: completion.choices[0].message.content });
}
