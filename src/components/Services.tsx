import SectionTitle from './ui/SectionTitle';
import uxIcon from '@/../public/img/uxIcon.png';
import webDesignIcon from '@/../public/img/webDesignIcon.png';
import appDesignIcon from '@/../public/img/appDesignIcon.png';
import graphicDesignIcon from '@/../public/img/graphicDesignIcon.png';
import { StaticImageData } from 'next/image';
import ServicesCard from './ui/ServicesCard';

export default function Services() {
  const servicesInfo: { icon: StaticImageData; name: string; description: string }[] = [
    {
      icon: uxIcon,
      name: 'UI/UX',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
    {
      icon: webDesignIcon,
      name: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
    {
      icon: appDesignIcon,
      name: 'App Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
    {
      icon: graphicDesignIcon,
      name: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
  ];
  return (
    <section className='mt-[139px]'>
      <SectionTitle
        title='Services'
        description='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'
      />
      <div className='mt-20 grid grid-cols-4 gap-[31px]'>
        {servicesInfo?.map(({ icon, name, description }) => (
          <ServicesCard key={name} icon={icon} name={name} description={description} />
        ))}
      </div>
    </section>
  );
}
