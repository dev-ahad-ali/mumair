import Image from 'next/image';
import logo from '@/../public/img/logo.png';
import Link from 'next/link';
import Button from './ui/Button';
import NavLinks from './ui/NavLinks';

export default function Navbar() {
  return (
    <nav className='mx-auto flex max-w-[1460px] items-center justify-between gap-4'>
      <Link href={'/'}>
        <Image src={logo} alt='logo' priority width={279} height={67} />
      </Link>
      <div className='flex items-center gap-6'>
        <NavLinks />
        <Button name='Download CV' section='navbar' />
      </div>
    </nav>
  );
}
