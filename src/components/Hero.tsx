'use client';
import Image from 'next/image';
import Button from './ui/Button';
import heroImg from '@/../public/img/heroimg.png';
import React from 'react';
import PhotoRibbon from './ui/PhotoRibbon';
import SocialIcons from './ui/SocialIcons';

export default function Hero() {
  return (
    <section className='mt-[120px] flex items-center justify-between gap-5 pe-5'>
      <div className='max-w-[714px] space-y-9'>
        <h6 className='font-semibold leading-none tracking-widest'>Hi I am</h6>
        <h5 className='text-[32px] font-semibold leading-none tracking-wider text-accent'>
          Muhammad Umair
        </h5>
        <h1 className='text-[100px] font-bold leading-[80px]'>
          <span className=''>UI & UX</span>
          <span className='block pe-2 text-right tracking-wide'>Designer</span>
        </h1>
        <p className='mt-7 text-justify'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </p>
        <div className='mt-[22px]'>
          <Button name='Hire Me' section='hero' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-9'>
        <div className='relative w-[538px]'>
          <PhotoRibbon />
          <Image src={heroImg} alt='image of umair' />
        </div>
        <SocialIcons section='hero' />
      </div>
    </section>
  );
}
