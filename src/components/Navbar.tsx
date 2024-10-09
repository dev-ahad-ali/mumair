import Image from 'next/image';
import logo from '@/../public/img/logo.png';
import Link from 'next/link';
import Button from './ui/Button';
export default function Navbar() {
  const navLinks: { title: string; sectionId: string }[] = [
    {
      title: 'home',
      sectionId: '',
    },
    {
      title: 'about me',
      sectionId: 'aboutMe',
    },
    {
      title: 'services',
      sectionId: 'services',
    },
    {
      title: 'projects',
      sectionId: 'projects',
    },
    {
      title: 'testimonial',
      sectionId: 'testimonial',
    },
    {
      title: 'contact',
      sectionId: 'contact',
    },
  ];
  return (
    <nav className='mt-[61px] flex items-center justify-between gap-4'>
      <Link href={'/'}>
        <Image src={logo} alt='logo' priority width={279} height={67} />
      </Link>
      <div className='flex items-center gap-3'>
        {navLinks?.map(({ title, sectionId }) => (
          <Link
            key={sectionId}
            href={`#${sectionId}`}
            className='group relative px-[14px] py-[10px] capitalize'
          >
            {title}
            <span className='absolute bottom-0 left-0 h-1 w-0 rounded-full bg-accent duration-500 group-hover:w-full'></span>
          </Link>
        ))}
        <div className='ms-3'>
          <Button name='Download CV' section='navbar' />
        </div>
      </div>
    </nav>
  );
}
