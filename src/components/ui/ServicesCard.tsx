import Image, { StaticImageData } from 'next/image';

export default function ServicesCard({
  icon,
  name,
  description,
}: {
  icon: StaticImageData;
  name: string;
  description: string;
}) {
  return (
    <div className='flex cursor-pointer flex-col justify-between rounded-[14px] bg-[#F8F8F8] px-[18px] py-[57px] duration-300 hover:shadow-xl'>
      <div>
        <Image src={icon} alt={name} />
      </div>
      <div>
        <h3 className='text-[32px] font-semibold'>{name}</h3>
        <p className='text-justify'>{description}</p>
      </div>
    </div>
  );
}
