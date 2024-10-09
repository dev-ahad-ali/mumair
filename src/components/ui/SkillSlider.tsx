'use client';
import { useState } from 'react';

export default function SkillSlider({ name, point }: { name: string; point: number }) {
  const [value, setValue] = useState(point);
  return (
    <div>
      <h3 className='text-2xl font-semibold'>{name}</h3>
      <div className='group relative max-h-3'>
        <input
          className='skill-slider h-3 w-full appearance-none rounded-full bg-[#EDECEC]'
          type='range'
          onChange={(e) => setValue(parseInt(e.target.value))}
          name='skill'
          min={1}
          value={value}
          max={100}
        />
        <span
          style={{ width: `${value}%` }}
          className={`absolute -bottom-3 z-10 block h-3 rounded-full bg-accent`}
        >
          <span className='absolute -right-1 -top-10 rounded border border-accent bg-white px-2 py-1 text-sm font-medium opacity-0 duration-300 group-hover:opacity-100'>
            {value}
          </span>
        </span>
      </div>
    </div>
  );
}
