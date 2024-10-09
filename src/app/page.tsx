'use client';

import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Splash from '@/components/ui/Splash';
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
          <Hero />
          <AboutMe />
        </main>
      )}
    </>
  );
}
