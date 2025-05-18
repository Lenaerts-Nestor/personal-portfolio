'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../utils/projectsgroupicon';
import { useI18n } from '../shared/i18nContext';
import { SectionHeading } from '../shared/layout/section-heading';

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

  const nextProject = () => {
    setCarouselIdx((prevIdx) => (prevIdx + 1) % projects.length);
  };

  const prevProject = () => {
    setCarouselIdx(
      (prevIdx) => (prevIdx - 1 + projects.length) % projects.length
    );
  };

  // Enhanced project descriptions with technical challenges and solutions
  const enhancedProjects = projects.map((project) => {
    const enhancedDescription = project.description;
    let challenges = '';
    let solutions = '';

    if (project.id === 'timesheet') {
      challenges =
        'Implemented complex state management for real-time updates across multiple users.';
      solutions =
        'Utilized React Context API and custom hooks to create a scalable state management solution.';
    } else if (project.id === 'webdev') {
      challenges =
        'Needed to create a secure authentication system with role-based access control.';
      solutions =
        'Implemented JWT authentication with middleware for route protection and user role verification.';
    } else if (project.id === 'game') {
      challenges =
        'Optimizing game performance while maintaining visual quality on various devices.';
      solutions =
        'Implemented efficient sprite rendering and collision detection algorithms.';
    } else if (project.id === 'webapi') {
      challenges =
        'Designing a RESTful API that follows best practices and handles high request volumes.';
      solutions =
        'Created a well-structured API with proper error handling and caching mechanisms.';
    } else if (project.id === 'parkflow') {
      challenges =
        'Integrating real-time location services with user authentication and booking system.';
      solutions =
        'Used Firebase for real-time database and authentication, with custom state management.';
    } else if (project.id === 'carinfo') {
      challenges =
        'Handling API rate limits and optimizing mobile performance.';
      solutions =
        'Implemented request caching and lazy loading of components to improve performance.';
    }

    return {
      ...project,
      enhancedDescription,
      challenges,
      solutions,
    };
  });

  return (
    <section id='projects' className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title='Featured Projects'
          description='A showcase of my technical skills and problem-solving abilities through real-world applications'
          icon={<FolderKanban className='h-8 w-8' />}
        />

        {/* Desktop grid */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-6'
        >
          {enhancedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -5 }}
              className='bg-white rounded-lg shadow-sm p-0 flex flex-col cursor-pointer hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden h-full'
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className='relative w-full bg-gray-100 h-40 overflow-hidden'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-full object-cover object-center'
                  loading='lazy'
                />
                <div className='absolute top-2 right-2 flex space-x-2'>
                  <a
                    href='#'
                    className='p-2 bg-white rounded-full shadow-sm hover:bg-gray-100'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className='h-4 w-4 text-gray-700' />
                  </a>
                  <a
                    href='#'
                    className='p-2 bg-white rounded-full shadow-sm hover:bg-gray-100'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className='h-4 w-4 text-gray-700' />
                  </a>
                </div>
              </div>
              <div className='p-5 flex flex-col flex-grow'>
                <div className='flex justify-between items-center mb-2'>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {project.title}
                  </h3>
                  <span className='text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded'>
                    {project.id === 'timesheet'
                      ? 'Internship Project'
                      : project.type}
                  </span>
                </div>
                <p className='text-gray-600 mb-3 text-sm'>
                  {project.description}
                </p>

                {/* Technical challenges and solutions */}
                <div className='mb-3'>
                  <p className='text-xs text-gray-500 font-medium mb-1'>
                    Technical Challenge:
                  </p>
                  <p className='text-xs text-gray-600 mb-2'>
                    {project.challenges}
                  </p>
                  <p className='text-xs text-gray-500 font-medium mb-1'>
                    Solution:
                  </p>
                  <p className='text-xs text-gray-600'>{project.solutions}</p>
                </div>

                <div className='flex flex-wrap gap-2 mt-auto mb-3'>
                  {project.technologies &&
                    project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                <a
                  href={`/projects/${project.id}`}
                  className='text-indigo-600 font-medium text-sm flex items-center hover:text-indigo-800 transition-colors'
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details
                  <svg
                    className='w-4 h-4 ml-1'
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
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className='md:hidden relative px-8'>
          <div className='flex items-center justify-center'>
            <button
              className='absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md disabled:opacity-50 focus:outline-none z-10'
              onClick={prevProject}
              disabled={carouselIdx === 0}
              aria-label='Previous project'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={carouselIdx}
              className='w-full max-w-xs mx-auto'
            >
              <div
                className='bg-white rounded-lg shadow-sm p-0 flex flex-col cursor-pointer border border-gray-200 overflow-hidden'
                onClick={() =>
                  navigate(`/projects/${enhancedProjects[carouselIdx].id}`)
                }
              >
                <div className='relative w-full bg-gray-100 h-40 flex items-center justify-center'>
                  <img
                    src={
                      enhancedProjects[carouselIdx].image || '/placeholder.svg'
                    }
                    alt={enhancedProjects[carouselIdx].title}
                    className='w-full h-full object-cover object-center'
                    loading='lazy'
                  />
                  <div className='absolute top-2 right-2 flex space-x-2'>
                    <a
                      href='#'
                      className='p-2 bg-white rounded-full shadow-sm hover:bg-gray-100'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className='h-4 w-4 text-gray-700' />
                    </a>
                    <a
                      href='#'
                      className='p-2 bg-white rounded-full shadow-sm hover:bg-gray-100'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className='h-4 w-4 text-gray-700' />
                    </a>
                  </div>
                </div>
                <div className='p-5'>
                  <div className='flex justify-between items-center mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {enhancedProjects[carouselIdx].title}
                    </h3>
                    <span className='text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded'>
                      {enhancedProjects[carouselIdx].id === 'timesheet'
                        ? 'Internship Project'
                        : enhancedProjects[carouselIdx].type}
                    </span>
                  </div>
                  <p className='text-gray-600 mb-3 text-sm'>
                    {enhancedProjects[carouselIdx].description}
                  </p>

                  {/* Technical challenges and solutions */}
                  <div className='mb-3'>
                    <p className='text-xs text-gray-500 font-medium mb-1'>
                      Technical Challenge:
                    </p>
                    <p className='text-xs text-gray-600 mb-2'>
                      {enhancedProjects[carouselIdx].challenges}
                    </p>
                    <p className='text-xs text-gray-500 font-medium mb-1'>
                      Solution:
                    </p>
                    <p className='text-xs text-gray-600'>
                      {enhancedProjects[carouselIdx].solutions}
                    </p>
                  </div>

                  <div className='flex flex-wrap gap-2 mb-3'>
                    {enhancedProjects[carouselIdx].technologies &&
                      enhancedProjects[carouselIdx].technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className='text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full'
                          >
                            {tech}
                          </span>
                        )
                      )}
                  </div>
                  <a
                    href={`/projects/${enhancedProjects[carouselIdx].id}`}
                    className='text-indigo-600 font-medium text-sm flex items-center hover:text-indigo-800 transition-colors'
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                    <svg
                      className='w-4 h-4 ml-1'
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
                  </a>
                </div>
              </div>
            </motion.div>
            <button
              className='absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md disabled:opacity-50 focus:outline-none z-10'
              onClick={nextProject}
              disabled={carouselIdx === enhancedProjects.length - 1}
              aria-label='Next project'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          {/* Carousel indicators */}
          <div className='flex justify-center mt-4'>
            {enhancedProjects.map((_, idx) => (
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
      </div>
    </section>
  );
};

export default ProjectsSection;
