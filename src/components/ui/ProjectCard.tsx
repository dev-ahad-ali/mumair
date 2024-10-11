import Image, { StaticImageData } from 'next/image';

export default function ProjectCard({
  project,
}: {
  project: { image: StaticImageData; title: string; category: string };
}) {
  const { image, title, category } = project;

  return (
    <div>
      <div>
        <Image src={image} alt={title} />
      </div>
      <h5 className='mt-[37px] capitalize text-accent'>{category}</h5>
      <h3 className='mt-[10px] text-2xl font-bold'>{title}</h3>
    </div>
  );
}
