import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../../utils/projectsgroupicon';

export const ProjectsSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const navigate = useNavigate();

  return (
    <section className='py-12'>
      <div className='max-w-6xl mx-auto px-4'>
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
              className='bg-white rounded-2xl shadow-lg p-0 flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden'
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-44 sm:h-48 md:h-52 object-cover object-center transition-all duration-300'
                loading='lazy'
              />
              <div className='p-6 flex flex-col items-center w-full'>
                <h3 className='text-xl font-semibold mt-2 mb-2 text-center'>
                  {project.title}
                </h3>
                <p className='text-gray-500 text-center mb-4'>
                  {project.description}
                </p>
                <div className='flex gap-3 text-2xl text-indigo-600'>
                  {project.techs}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className='md:hidden flex items-center justify-center'>
          <button
            className='p-2 text-2xl text-indigo-400 text-4xl font-extrabold disabled:opacity-30'
            onClick={() => setCarouselIdx((i) => Math.max(i - 1, 0))}
            disabled={carouselIdx === 0}
            aria-label='Previous project'
          >
            ‹
          </button>
          <div className='w-80 mx-2'>
            <div
              className='bg-white rounded-2xl shadow-lg p-0 flex flex-col items-center cursor-pointer border border-gray-100 overflow-hidden'
              onClick={() => navigate(`/projects/${projects[carouselIdx].id}`)}
            >
              <img
                src={projects[carouselIdx].image}
                alt={projects[carouselIdx].title}
                className='w-full h-44 sm:h-48 object-cover object-center transition-all duration-300'
                loading='lazy'
              />
              <div className='p-6 flex flex-col items-center w-full'>
                <h3 className='text-xl font-semibold mt-2 mb-2 text-center'>
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
          </div>
          <button
            className='p-2  text-4xl font-extrabold text-indigo-400 disabled:opacity-30'
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
