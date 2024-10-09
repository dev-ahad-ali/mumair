import Image from 'next/image';
import Button from './Button';
import heroImg from '@/../public/img/heroimg.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';
import PhotoRibbon from './PhotoRibbon';

export default function Hero() {
  const socialIcons: { icon: React.ReactElement; name: string; color?: string }[] = [
    {
      icon: <FaFacebook />,
      name: 'facebook',
      color: 'text-blue-500',
    },
    {
      icon: <FaTwitter />,
      name: 'twitter',
      color: 'text-blue-300',
    },
    {
      icon: <FaInstagram />,
      name: 'instagram',
      color: 'text-pink-600',
    },
    {
      icon: <FaLinkedin />,
      name: 'linkedin',
      color: 'text-blue-700',
    },
  ];
  return (
    <section className='mt-[120px] flex items-center justify-between gap-5'>
      <div className='max-w-[714px]'>
        <h6 className='font-semibold'>Hi I am</h6>
        <h5 className='text-[32px] font-semibold text-accent'>Muhammad Umair</h5>
        <h1 className='text-[100px] font-bold leading-[106px]'>
          UI & UX <span className='block text-right'>Designer</span>
        </h1>
        <p className='mt-7'>
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
        <div className='flex items-center gap-[25px]'>
          {socialIcons?.map(({ icon, name, color }) => (
            <Link href={'/'} key={name} className={`text-3xl hover:${color}`}>
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
