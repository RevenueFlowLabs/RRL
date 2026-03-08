import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // বর্তমানে এটি একটি প্লেসহোল্ডার হিসেবে থাকবে যাতে বিল্ড এরর না দেয়
  // পরবর্তীতে আপনি ড্যাশবোর্ড থেকে আপনার API Keys ইনপুট দিতে পারবেন
  res.status(200).json({ 
    message: "AI Module is ready. Please input your API keys from the settings panel to activate.",
    status: "pending_configuration" 
  });
}