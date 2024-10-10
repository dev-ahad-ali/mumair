import { socialIcons } from '@/utils/data-vriables';
import { hoverColorChange } from '@/utils/hoverColorChange';
import Link from 'next/link';

export default function SocialIcons({ section }: { section: string }) {
  return (
    <div className='flex items-center gap-[25px]'>
      {socialIcons?.map(({ icon, name, color }) => {
        const id = `${name}-${section}`;
        return (
          <Link
            id={id}
            href={'/'}
            key={name}
            onMouseEnter={() => hoverColorChange('add', id, color)}
            onMouseLeave={() => hoverColorChange('remove', id, color)}
            className={`text-3xl duration-300`}
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
}
