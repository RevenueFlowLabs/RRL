import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@supabase/auth-helpers-react';

export default function Home() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      router.push('/dashboard');
    }
  }, [user, router]);

  return <div className="flex h-screen items-center justify-center">Loading...</div>;
}