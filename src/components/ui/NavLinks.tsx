import { navLinks } from '@/utils/data-vriables';
import Link from 'next/link';

export default function NavLinks() {
  return (
    <div className='flex items-center gap-5'>
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
    </div>
  );
}
