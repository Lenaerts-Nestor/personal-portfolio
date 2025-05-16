import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaNodeJs, FaReact, FaDatabase, FaGamepad } from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiSharp,
} from 'react-icons/si';

const projects = [
  {
    id: 'timesheet',
    title: 'Timesheet',
    description: 'Web app for internal business tracking and management.',
    icon: <FaDatabase className='text-indigo-500 w-10 h-10 mx-auto' />,
    techs: [
      <FaNodeJs key='node' />,
      <FaReact key='react' />,
      <SiTypescript key='ts' />,
      <SiPostgresql key='pg' />,
    ],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Simple website with login, MongoDB, and admin features.',
    icon: <FaReact className='text-purple-500 w-10 h-10 mx-auto' />,
    techs: [
      <FaNodeJs key='node' />,
      <SiTypescript key='ts' />,
      <SiMongodb key='mongo' />,
      <SiExpress key='express' />,
    ],
  },
  {
    id: 'game',
    title: 'Game Development',
    description: '2D platformer using MonoGame and C#.',
    icon: <FaGamepad className='text-orange-500 w-10 h-10 mx-auto' />,
    techs: [<SiSharp key='csharp' />],
  },
];

export const ProjectsSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const navigate = useNavigate();

  // Responsive: show carousel on mobile, grid on desktop
  return (
    <section className='py-16 sm:py-24'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-purple-700 mb-2'>
          Projecten
        </h2>
        <div className='h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-8' />
        <p className='text-center text-lg text-gray-600 mb-8'>
          Hier zijn mijn belangrijkste projecten die mijn technische
          vaardigheden demonstreren.
        </p>
        {/* Desktop grid */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow border border-gray-100'
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {project.icon}
              <h3 className='text-xl font-semibold mt-4 mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-500 text-center mb-4'>
                {project.description}
              </p>
              <div className='flex gap-3 text-2xl text-indigo-600'>
                {project.techs}
              </div>
            </div>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className='md:hidden flex items-center justify-center'>
          <button
            className='p-2 text-2xl text-indigo-400 disabled:opacity-30'
            onClick={() => setCarouselIdx((i) => Math.max(i - 1, 0))}
            disabled={carouselIdx === 0}
            aria-label='Previous project'
          >
            ‹
          </button>
          <div className='w-80 mx-2'>
            <div
              className='bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer border border-gray-100'
              onClick={() => navigate(`/projects/${projects[carouselIdx].id}`)}
            >
              {projects[carouselIdx].icon}
              <h3 className='text-xl font-semibold mt-4 mb-2'>
                {projects[carouselIdx].title}
              </h3>
              <p className='text-gray-500 text-center mb-4'>
                {projects[carouselIdx].description}
              </p>
              <div className='flex gap-3 text-2xl text-indigo-600'>
                {projects[carouselIdx].techs}
              </div>
            </div>
          </div>
          <button
            className='p-2 text-2xl text-indigo-400 disabled:opacity-30'
            onClick={() =>
              setCarouselIdx((i) => Math.min(i + 1, projects.length - 1))
            }
            disabled={carouselIdx === projects.length - 1}
            aria-label='Next project'
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};
