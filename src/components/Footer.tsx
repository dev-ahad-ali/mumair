import Image from 'next/image';
import logo from '@/../public/img/logo.png';
import NavLinks from './ui/NavLinks';
import SocialIcons from './ui/SocialIcons';

export default function Footer() {
  return (
    <footer className='mt-[139px] bg-[#F8F8F8]'>
      <section className='flex flex-col items-center pb-[69px] pt-[109px]'>
        <div>
          <div className='flex justify-center'>
            <Image src={logo} alt='logo' />
          </div>
          <div className='flex flex-col items-center'>
            <div className='mt-[65px]'>
              <NavLinks />
            </div>
            <div className='mt-[80px]'>
              <SocialIcons section='footer' />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#545454] py-[26px] text-center text-white'>
        <p>
          © 2023 <span className='font-bold text-accent'>Mumair</span> All Rights Reserved , Inc.
        </p>
      </section>
    </footer>
  );
}
