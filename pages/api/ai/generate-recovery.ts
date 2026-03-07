import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req, res) {
  const { userId, customerName, amount, dueDate, paymentLink } = req.body;

  const { data: config } = await supabase
    .from('client_configs')
    .select('openai_key')
    .eq('user_id', userId)
    .single();

  let generatedMessage = "";
  // কাস্টম লিঙ্ক না থাকলে ডিফল্ট ডামি লিঙ্ক (পরবর্তীতে Lemon Squeezy API দিয়ে রিপ্লেস হবে)
  const finalLink = paymentLink || "https://revflow.ai/pay";

  try {
    const prompt = `Write a short, professional payment reminder for ${customerName} who owes $${amount}. Include this link to pay: ${finalLink}. Keep it friendly but urgent.`;

    if (config?.openai_key) {
      const openai = new OpenAI({ apiKey: config.openai_key });
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      });
      generatedMessage = completion.choices[0].message.content;
    } else {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      generatedMessage = result.response.text();
    }

    res.status(200).json({ message: generatedMessage });
  } catch (error) {
    res.status(500).json({ error: "Generation Failed" });
  }
}
