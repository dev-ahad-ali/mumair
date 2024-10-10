'use client';

import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
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
        <>
          <Navbar />
          <main className='mx-auto max-w-[1460px] px-5'>
            <Hero />
            <AboutMe />
            <Services />
            <ContactMe />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
