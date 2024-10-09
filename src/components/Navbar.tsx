import Image from 'next/image';
import logo from '../../public/img/logo.png';
import Link from 'next/link';
import Button from './Button';
export default function Navbar() {
  const navLinks: { title: string; sectionId: string }[] = [
    {
      title: 'home',
      sectionId: '/',
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
            className='px-[14px] py-[10px] capitalize hover:bg-accent'
          >
            {title}
          </Link>
        ))}
        <div className='ms-3'>
          <Button name='Download CV' section='navbar' />
        </div>
      </div>
    </nav>
  );
}
