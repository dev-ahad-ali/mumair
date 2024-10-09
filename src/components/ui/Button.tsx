export default function Button({ name, section }: { name: string; section?: string }) {
  return (
    <button
      className={`${section === 'contactMe' ? 'h-[75px] w-[222px] rounded-[14px] bg-accent text-2xl font-semibold text-white' : 'min-h-[52px] min-w-[188px] rounded-[5px] bg-accent text-white'}`}
    >
      {name}
    </button>
  );
}
