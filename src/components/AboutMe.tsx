import Image from 'next/image';
import aboutMeImg from '@/../public/img/aboutmeImg.svg';
import PhotoRibbon from './ui/PhotoRibbon';
import SkillSlider from './ui/SkillSlider';
import { skillInfo } from '@/utils/data-vriables';

export default function AboutMe() {
  return (
    <section id='aboutMe' className='mt-[70px] flex items-center justify-between gap-4'>
      <div className='min-w-[680px]'>
        <div className='relative'>
          <PhotoRibbon />
          <Image src={aboutMeImg} alt='Image of Umair' />
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
