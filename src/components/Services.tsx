import { servicesInfo } from '@/utils/data-vriables';
import SectionTitle from './ui/SectionTitle';
import ServicesCard from './ui/ServicesCard';

export default function Services() {
  return (
    <section id='services' className='mt-[139px]'>
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
