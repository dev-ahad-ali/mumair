import { navLinks } from '@/utils/data-vriables';
import { scrollToSection } from '@/utils/scrollToSection';

export default function NavLinks() {
  return (
    <div className='flex items-center gap-5 px-5'>
      {navLinks?.map(({ title, sectionId }) => (
        <button
          key={sectionId}
          onClick={() => scrollToSection(sectionId)}
          className='group relative px-[14px] py-[10px] capitalize'
        >
          {title}
          <span className='absolute bottom-0 left-0 h-1 w-0 rounded-full bg-accent duration-500 group-hover:w-full'></span>
        </button>
      ))}
    </div>
  );
}
