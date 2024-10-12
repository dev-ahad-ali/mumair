import Image, { StaticImageData } from 'next/image';

export default function TestimonialCard({
  image,
  name,
  occupation,
  message,
}: {
  image: StaticImageData;
  name: string;
  occupation: string;
  message: string;
}) {
  return (
    <div className='grid grid-cols-4 rounded-[14px] bg-[#F8F8F8] pb-[54px] pe-[78px] ps-[48px] pt-[55px]'>
      <div>
        <Image src={image} alt={name} />
      </div>
      <div className='col-span-3 ms-4 flex flex-col'>
        <p className='text-justify'>
          <span className='text-[32px] font-bold leading-none text-accent'>&quot;</span>
          {message}
          <span className='text-[32px] font-bold leading-none text-accent'>&quot;</span>
        </p>
        <h5 className='font-medium'>{name}</h5>
        <p>{occupation}</p>
      </div>
    </div>
  );
}
