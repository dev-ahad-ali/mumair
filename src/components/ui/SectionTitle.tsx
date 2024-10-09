export default function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='mx-auto max-w-[932px] text-center'>
      <h2 className='mb-2 text-[65px] font-semibold'>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
