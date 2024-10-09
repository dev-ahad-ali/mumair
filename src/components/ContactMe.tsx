import Button from './ui/Button';

export default function ContactMe() {
  return (
    <section className='mx-auto mt-[139px] max-w-[932px]'>
      <div className='text-center'>
        <h2 className='mb-2 text-[65px] font-semibold'>Lets Design Together</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className='mt-20 grid grid-cols-5 gap-[25px] px-[29px]'>
        <input
          type='email'
          placeholder='Enter your email'
          className='col-span-4 block h-[75px] rounded-[14px] border border-[#AFAFAF] ps-[26px]'
        />
        <Button name='Contact Me' section='contactMe' />
      </div>
    </section>
  );
}
