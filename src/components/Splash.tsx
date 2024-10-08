import Image from 'next/image';
import logo from '../../public/img/logo.png';

export default function Splash() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <div className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
        <Image src={logo} alt='Next.js logo' width={180} height={38} priority />
      </div>
    </div>
  );
}
