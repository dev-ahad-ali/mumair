import Image from 'next/image';
import aboutMeImg from '@/../public/img/aboutmeImg.png';
import PhotoRibbon from './ui/PhotoRibbon';
import SkillSlider from './ui/SkillSlider';

export default function AboutMe() {
  const skillInfo: { name: string; point: number }[] = [
    {
      name: 'UX',
      point: 90,
    },
    {
      name: 'Website Design',
      point: 85,
    },
    {
      name: 'App Design ',
      point: 95,
    },
    {
      name: 'Graphic Design ',
      point: 90,
    },
  ];

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
        <div className='mt-4 space-y-12'>
          {skillInfo?.map(({ name, point }) => (
            <SkillSlider key={name} name={name} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
}
