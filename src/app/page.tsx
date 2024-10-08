'use client';

import Navbar from '@/components/Navbar';
import Splash from '@/components/Splash';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (window === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <main className='mx-auto max-w-[1460px] px-5'>
          <Navbar />
        </main>
      )}
    </>
  );
}
