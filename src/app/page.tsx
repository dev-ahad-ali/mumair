'use client';

import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import Splash from '@/components/ui/Splash';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [moved, setMoved] = useState<boolean>(false);
  useEffect(() => {
    if (window === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const navbarScroll = () => {
      if (window.scrollY > 130) {
        setMoved(true);
      } else {
        setMoved(false);
      }
    };
    document.addEventListener('scroll', navbarScroll);

    return () => window.removeEventListener('scroll', navbarScroll);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          <header
            className={`mt-[61px] ${moved ? 'fixed -top-[58px] left-0 right-0 mx-auto w-full max-w-[1460px] rounded-full bg-white px-5 py-2 shadow-xl' : ''} z-[999] duration-500`}
          >
            <Navbar />
          </header>
          <main className='mx-auto max-w-[1460px] px-5'>
            <Hero />
            <AboutMe />
            <Services />
            <Projects />
          </main>
          <Testimonial />
          <main className='mx-auto max-w-[1460px] px-5'>
            <ContactMe />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
