'use client';
import { useEffect, useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { projectsInfo } from '@/utils/data-vriables';
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
  const [currentCategory, setCurrentCategory] = useState<string>('web design');
  const [projects, setProjects] = useState(projectsInfo);
  const categories: string[] = ['all', 'UI/UX', 'web design', 'app design', 'graphic design'];

  useEffect(() => {
    if (currentCategory !== 'all') {
      const filteredProjects = projectsInfo.filter(
        (project) => project.category === currentCategory
      );
      setProjects(filteredProjects);
    } else {
      return;
    }
  }, [currentCategory]);

  return (
    <section className='mt-[139px]'>
      <SectionTitle
        title='My Projects'
        description='Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus'
      />
      <div>
        <div className='mt-[59px] flex items-center justify-center gap-[17px]'>
          {categories?.map((category) => (
            <button
              onClick={() => setCurrentCategory(category)}
              className={`rounded-xl border border-[#545454] px-5 py-[10px] text-2xl capitalize duration-300 hover:bg-accent hover:text-white ${currentCategory === category ? 'bg-accent text-white' : 'bg-[#F8F8F8] text-black'}`}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='mt-[106px] grid grid-cols-3 gap-11'>
          {projects?.slice(0, 3).map((project, idx) => <ProjectCard key={idx} project={project} />)}
        </div>
      </div>
    </section>
  );
}
