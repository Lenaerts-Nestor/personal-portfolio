'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../../utils/projectsgroupicon';
import { useI18n } from '../../shared/i18nContext';
import { motion } from 'framer-motion';
import { FolderKanban } from 'lucide-react';
import { SectionHeading } from '../../shared/layout/section-heading';

export const ProjectsSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const navigate = useNavigate();
  const { t } = useI18n();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects' className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title={t('home.projects')}
          description={t('home.projectsDescription')}
          icon={<FolderKanban className='h-8 w-8' />}
        />

        {/* Desktop grid */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              className='bg-white rounded-2xl shadow-lg p-0 flex flex-col items-center cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group'
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className='relative w-full overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center'>
                  <span className='text-white font-medium mb-4 px-4 py-2 bg-indigo-600/80 rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                    {t('projects.viewDetails')}
                  </span>
                </div>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-44 sm:h-48 md:h-52 object-cover object-center transition-all duration-500 group-hover:scale-105'
                  loading='lazy'
                />
              </div>
              <div className='p-6 flex flex-col items-center w-full'>
                <h3 className='text-xl font-semibold mt-2 mb-2 text-center text-indigo-700'>
                  {project.title}
                </h3>
                <p className='text-gray-500 text-center mb-4 line-clamp-3'>
                  {project.description}
                </p>
                <div className='flex gap-3 text-2xl'>{project.techs}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className='md:hidden'>
          <div className='flex items-center justify-center'>
            <button
              className='p-2 text-4xl font-extrabold text-indigo-400 disabled:opacity-30 focus:outline-none'
              onClick={() => setCarouselIdx((i) => Math.max(i - 1, 0))}
              disabled={carouselIdx === 0}
              aria-label='Previous project'
            >
              ‹
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={carouselIdx}
              className='w-80 mx-2'
            >
              <div
                className='bg-white rounded-2xl shadow-lg p-0 flex flex-col items-center cursor-pointer border border-gray-100 overflow-hidden'
                onClick={() =>
                  navigate(`/projects/${projects[carouselIdx].id}`)
                }
              >
                <div className='relative w-full overflow-hidden'>
                  <img
                    src={projects[carouselIdx].image || '/placeholder.svg'}
                    alt={projects[carouselIdx].title}
                    className='w-full h-44 sm:h-48 object-cover object-center'
                    loading='lazy'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/70 to-transparent h-16 flex items-center justify-center'>
                    <span className='text-white font-medium px-3 py-1 bg-indigo-600/80 rounded-full text-sm'>
                      {t('projects.viewDetails')}
                    </span>
                  </div>
                </div>
                <div className='p-6 flex flex-col items-center w-full'>
                  <h3 className='text-xl font-semibold mt-2 mb-2 text-center text-indigo-700'>
                    {projects[carouselIdx].title}
                  </h3>
                  <p className='text-gray-500 text-center mb-4 line-clamp-3'>
                    {projects[carouselIdx].description}
                  </p>
                  <div className='flex gap-3 text-2xl text-indigo-600'>
                    {projects[carouselIdx].techs}
                  </div>
                </div>
              </div>
            </motion.div>
            <button
              className='p-2 text-4xl font-extrabold text-indigo-400 disabled:opacity-30 focus:outline-none'
              onClick={() =>
                setCarouselIdx((i) => Math.min(i + 1, projects.length - 1))
              }
              disabled={carouselIdx === projects.length - 1}
              aria-label='Next project'
            >
              ›
            </button>
          </div>

          {/* Carousel indicators */}
          <div className='flex justify-center mt-6'>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIdx(idx)}
                className={`mx-1 h-2 rounded-full focus:outline-none transition-all duration-300 ${
                  idx === carouselIdx ? 'bg-indigo-600 w-6' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View all projects button */}
        <div className='flex justify-center mt-12'>
          <button
            onClick={() => navigate('/projects')}
            className='px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center'
          >
            <span>{t('projects.viewAll')}</span>
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
