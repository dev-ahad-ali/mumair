import Button from './ui/Button';
import SectionTitle from './ui/SectionTitle';

export default function ContactMe() {
  return (
    <section id='contact' className='mt-[139px]'>
      <SectionTitle
        title='Lets Design Together'
        description='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium'
      />
      <div className='mx-auto mt-20 flex max-w-[932px] gap-[25px]'>
        <input
          type='email'
          placeholder='Enter your email'
          className='block h-[75px] flex-1 rounded-[14px] border border-[#AFAFAF] ps-[26px]'
        />
        <Button name='Contact Me' section='contactMe' />
      </div>
    </section>
  );
}
