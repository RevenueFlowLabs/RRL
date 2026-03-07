import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ভবিষ্যতে এখানে স্টাইপ থেকে ডাটা ফেচ হবে
  res.status(200).json({ 
    monthly_revenue: [
      { name: 'Jan', revenue: 4200 },
      { name: 'Feb', revenue: 3800 },
      { name: 'Mar', revenue: 5100 }
    ] 
  });
}
