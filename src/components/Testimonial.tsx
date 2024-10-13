import SectionTitle from './ui/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonialInfo } from '@/utils/data-vriables';
import TestimonialCard from './ui/TestimonialCard';

export default function Testimonial() {
  return (
    <section id='testimonial' className='mt-[139px]'>
      <SectionTitle
        title='Testimonials'
        description='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'
      />
      <div className='mt-[112px]'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={62}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper !pb-[116px]'
        >
          {testimonialInfo?.map(({ image, name, occupation, message }, idx) => (
            <SwiperSlide key={idx} className='max-w-[1087px]'>
              <TestimonialCard
                image={image}
                name={name}
                occupation={occupation}
                message={message}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
