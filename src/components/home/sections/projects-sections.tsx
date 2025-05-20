'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiFastify,
  SiPostgresql,
  SiDrizzle,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSharp,
  SiMonogame,
  SiDotnet,
  SiMysql,
  SiFlutter,
  SiFirebase,
  SiReactivex,
  SiCss3,
  SiSwagger,
  SiDart,
} from 'react-icons/si';
import { projects } from '../../../utils/projects-data';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { ProjectModal } from '../project-modal';

// Map project technologies to their corresponding icons and colors
const techIcons = {
  React: { icon: SiReact, color: 'text-sky-500' },
  TypeScript: { icon: SiTypescript, color: 'text-blue-600' },
  Fastify: { icon: SiFastify, color: 'text-gray-800 dark:text-gray-200' },
  PostgreSQL: { icon: SiPostgresql, color: 'text-blue-700' },
  'Drizzle ORM': { icon: SiDrizzle, color: 'text-amber-500' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-600' },
  MongoDB: { icon: SiMongodb, color: 'text-green-500' },
  Express: { icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
  C: { icon: SiSharp, color: 'text-purple-600' },
  MonoGame: { icon: SiMonogame, color: 'text-red-600' },
  '.NET': { icon: SiDotnet, color: 'text-purple-700' },
  MySQL: { icon: SiMysql, color: 'text-blue-800' },
  Flutter: { icon: SiFlutter, color: 'text-cyan-500' },
  Firebase: { icon: SiFirebase, color: 'text-amber-500' },
  'React Native': { icon: SiReactivex, color: 'text-sky-600' },
  CSS: { icon: SiCss3, color: 'text-blue-500' },
  Swagger: { icon: SiSwagger, color: 'text-green-600' },
  Dart: { icon: SiDart, color: 'text-blue-400' },
};

// Add isPrivate flag to some projects and enhance with challenges/solutions
const enhancedProjects = projects.map((project) => ({
  ...project,
  // Use isPrivate from the data file, do not override
  challenges: '', // Will be filled from translations
  solutions: '', // Will be filled from translations
}));

export const ProjectsSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  // Animation variants
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

  // Carousel navigation
  const nextProject = () => {
    setCarouselIdx((prevIdx) => (prevIdx + 1) % enhancedProjects.length);
  };

  const prevProject = () => {
    setCarouselIdx(
      (prevIdx) =>
        (prevIdx - 1 + enhancedProjects.length) % enhancedProjects.length
    );
  };

  // Fill in translations for challenges and solutions
  useEffect(() => {
    enhancedProjects.forEach((project) => {
      try {
        project.challenges = t(`projects.${project.id}.challenge`);
        project.solutions = t(`projects.${project.id}.solution`);
      } catch (error) {
        // Fallback if translation is missing
        project.challenges = 'Technical challenges faced during development.';
        project.solutions = 'Solutions implemented to overcome the challenges.';
      }
    });
  }, [t]);

  // Handle project click
  const handleProjectClick = (project: any) => {
    if (project.isPrivate) {
      setSelectedProject(project);
      setIsModalOpen(true);
    } else if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    } else {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Render tech icon
  const renderTechIcon = (tech: string) => {
    const iconData = techIcons[tech as keyof typeof techIcons];
    if (iconData) {
      const IconComponent = iconData.icon;
      return <IconComponent className={`h-4 w-4 ${iconData.color}`} />;
    }
    return null;
  };

  // Helper function to get project description
  const getProjectDescription = (project: any) => {
    const keyForCardDescription = project.cardTranslationKey || project.id;
    const translationKey = `projects.${keyForCardDescription}.description`;
    const translatedDescription = t(translationKey);

    // Check if translation was successful and is not the key itself
    if (translatedDescription && translatedDescription !== translationKey) {
      return translatedDescription;
    }
    // Fallback to the hardcoded description in projects-data.tsx if translation fails
    return project.description;
  };

  return (
    <section id='projects' className='py-16 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title={t('projects.featuredTitle')}
          description={t('projects.featuredDescription')}
          icon={<FolderKanban className='h-8 w-8' />}
          dangerouslySetDescriptionHTML={true}
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
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-all duration-300 overflow-hidden h-[400px] ${
                project.isPrivate
                  ? 'border-2 border-purple-300 dark:border-purple-700'
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className='relative w-full bg-gray-100 dark:bg-gray-700 h-40 overflow-hidden'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-full object-cover object-center'
                  loading='lazy'
                />

                {/* Private indicator */}
                {project.isPrivate && (
                  <div className='absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/90 text-white rounded-full'>
                    <Lock className='h-3.5 w-3.5' />
                    <span className='text-xs font-medium'>Private</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className='p-5 flex flex-col flex-grow'>
                <div className='flex justify-between items-center mb-3'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                    {project.title}
                  </h3>
                  <span className='text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded'>
                    {project.id === 'timesheet'
                      ? t('projects.internshipProject')
                      : project.type}
                  </span>
                </div>

                {/* Description with fixed height */}
                <div className='mb-4 h-20 overflow-hidden'>
                  <p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-3'>
                    {getProjectDescription(project)}
                  </p>
                </div>

                {/* Technologies with enhanced icons */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies &&
                    project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full'
                      >
                        {renderTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                </div>

                {/* Action button */}
                <div className='mt-auto'>
                  {project.isPrivate ? (
                    <button className='text-indigo-600 dark:text-indigo-400 font-medium text-sm flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors'>
                      {t('projects.viewDetails')}
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
                    </button>
                  ) : (
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center hover:text-gray-900 dark:hover:text-white transition-colors'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubLink, '_blank');
                      }}
                    >
                      <svg
                        className='h-5 w-5 mr-1.5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className='md:hidden relative px-8'>
          <div className='flex items-center justify-center' ref={carouselRef}>
            <button
              className='absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md disabled:opacity-50 focus:outline-none z-10'
              onClick={prevProject}
              disabled={carouselIdx === 0}
              aria-label={t('projects.previousProject')}
            >
              <ChevronLeft className='w-4 h-4' />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={carouselIdx}
              className='w-full max-w-xs mx-auto flex'
            >
              <div
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col cursor-pointer overflow-hidden flex-1 ${
                  enhancedProjects[carouselIdx].isPrivate
                    ? 'border-2 border-purple-300 dark:border-purple-700'
                    : 'border border-gray-200 dark:border-gray-700'
                }`}
                onClick={() =>
                  handleProjectClick(enhancedProjects[carouselIdx])
                }
              >
                {/* Project Image */}
                <div className='relative w-full bg-gray-100 dark:bg-gray-700 h-40 flex items-center justify-center'>
                  <img
                    src={
                      enhancedProjects[carouselIdx].image || '/placeholder.svg'
                    }
                    alt={enhancedProjects[carouselIdx].title}
                    className='w-full h-full object-cover object-center'
                    loading='lazy'
                  />

                  {/* Private indicator */}
                  {enhancedProjects[carouselIdx].isPrivate && (
                    <div className='absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/90 text-white rounded-full'>
                      <Lock className='h-3.5 w-3.5' />
                      <span className='text-xs font-medium'>Private</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className='p-5 flex flex-col flex-grow'>
                  <div className='flex justify-between items-center mb-3'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                      {enhancedProjects[carouselIdx].title}
                    </h3>
                    <span className='text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded'>
                      {enhancedProjects[carouselIdx].id === 'timesheet'
                        ? t('projects.internshipProject')
                        : enhancedProjects[carouselIdx].type}
                    </span>
                  </div>

                  {/* Description with dynamic height for mobile */}
                  <div className='mb-4'>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      {getProjectDescription(enhancedProjects[carouselIdx])}
                    </p>
                  </div>

                  {/* Technologies with enhanced icons */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {enhancedProjects[carouselIdx].technologies &&
                      enhancedProjects[carouselIdx].technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className='flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full'
                          >
                            {renderTechIcon(tech)}
                            {tech}
                          </span>
                        )
                      )}
                  </div>

                  {/* Action button */}
                  <div className='mt-auto'>
                    {enhancedProjects[carouselIdx].isPrivate ? (
                      <button className='text-indigo-600 dark:text-indigo-400 font-medium text-sm flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors'>
                        {t('projects.viewDetails')}
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
                      </button>
                    ) : (
                      <a
                        href={enhancedProjects[carouselIdx].githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center hover:text-gray-900 dark:hover:text-white transition-colors'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            enhancedProjects[carouselIdx].githubLink,
                            '_blank'
                          );
                        }}
                      >
                        <svg
                          className='h-5 w-5 mr-1.5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <button
              className='absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md disabled:opacity-50 focus:outline-none z-10'
              onClick={nextProject}
              disabled={carouselIdx === enhancedProjects.length - 1}
              aria-label={t('projects.nextProject')}
            >
              <ChevronRight className='w-4 h-4' />
            </button>
          </div>

          {/* Carousel indicators */}
          <div className='flex justify-center mt-4'>
            {enhancedProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIdx(idx)}
                className={`mx-1 h-2 rounded-full focus:outline-none transition-all duration-300 ${
                  idx === carouselIdx
                    ? 'bg-indigo-600 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 w-2'
                }`}
                aria-label={t('projects.goToProject') + ' ' + (idx + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
