import Image from 'next/image';
import aboutMeImg from '@/../public/img/aboutmeImg.png';
import PhotoRibbon from './ui/PhotoRibbon';

export default function AboutMe() {
  return (
    <section className='mt-[70px] grid grid-cols-2 items-center justify-between gap-4'>
      <div className='max-w-[680px]'>
        <div className='relative max-w-[545px]'>
          <PhotoRibbon />
          <Image src={aboutMeImg} width={545} alt='Image of Umair' />
        </div>
      </div>
      <div>
        <h2 className='text-[60px] font-bold'>About Me</h2>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </p>
      </div>
    </section>
  );
}
