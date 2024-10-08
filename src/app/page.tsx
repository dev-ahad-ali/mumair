'use client';

import Splash from '@/components/Splash';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);
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
        <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
          <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
            <h2 className='text-6xl'>Hello</h2>
          </main>
        </div>
      )}
    </>
  );
}
