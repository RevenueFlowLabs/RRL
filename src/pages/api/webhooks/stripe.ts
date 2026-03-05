import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Supabase Initialization
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const event = req.body;
  const clientId = req.query.client_id as string; // Webhook URL থেকে Client ID নেওয়া

  // ১. পেমেন্ট ফেইল ইভেন্ট চেক করা
  if (event.type === 'invoice.payment_failed') {
    const session = event.data.object;
    const customerEmail = session.customer_email;
    const customerName = session.customer_name || 'Customer';
    const amount = session.amount_due / 100;
    const currency = session.currency.toUpperCase();
    const reason = session.last_payment_error?.message || 'Transaction declined';

    try {
      // ২. ডাটাবেজ থেকে ক্লায়েন্টের নিজস্ব API Keys নিয়ে আসা
      const { data: creds, error } = await supabase
        .from('client_api_credentials')
        .select('*')
        .eq('user_id', clientId)
        .single();

      if (error || !creds) throw new Error('Client credentials not found');

      // ৩. OpenAI ব্যবহার করে পারসোনালাইজড মেসেজ তৈরি (Client's OpenAI Key)
      const openai = new OpenAI({ apiKey: creds.openai_key });
      const aiResponse = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a professional billing assistant. Write short, empathetic recovery messages."
          },
          {
            role: "user",
            content: `Customer: ${customerName}, Amount: ${amount} ${currency}, Reason: ${reason}. Write a WhatsApp message asking them to update their card.`
          }
        ]
      });

      const recoveryMessage = aiResponse.choices[0].message.content;

      // ৪. কাস্টমারকে WhatsApp/SMS পাঠানো (Client's API ব্যবহার করে)
      // উদাহরণস্বরূপ Twilio বা অন্য কোনো API কল এখানে হবে
      console.log(`Sending Message to ${customerEmail}: ${recoveryMessage}`);

      // ৫. ডাটাবেজে লগ রাখা (failed_payments টেবিলে আপডেট)
      await supabase.from('failed_payments').insert({
        client_id: clientId,
        amount: amount,
        status: 'notified',
        metadata: { ai_message: recoveryMessage, reason: reason }
      });

      return res.status(200).json({ success: true, message: 'Recovery automation triggered' });
    } catch (err: any) {
      console.error('Automation Error:', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  res.json({ received: true });
}