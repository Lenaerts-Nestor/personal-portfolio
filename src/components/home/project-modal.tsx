'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock } from 'lucide-react';
import { useI18n } from '../shared/i18nContext';
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
import { AmoTrackSummary } from '../../utils/project-summaries/amotrack-summary';
import { CvoSummary } from '../../utils/project-summaries/cvo-summary';

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

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) => {
  const { t } = useI18n();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Render tech icon
  const renderTechIcon = (tech: string) => {
    const iconData = techIcons[tech as keyof typeof techIcons];
    if (iconData) {
      const IconComponent = iconData.icon;
      return <IconComponent className={`h-5 w-5 ${iconData.color}`} />;
    }
    return null;
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={modalRef}
            className='relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col'
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header with image */}
            <div className='relative w-full h-64 sm:h-80 bg-gray-100 dark:bg-gray-700'>
              <img
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                className='w-full h-full object-cover object-center'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                    {project.title}
                  </h2>
                  <span className='px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full'>
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className='absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors duration-200'
                aria-label='Close modal'
              >
                <X className='h-5 w-5' />
              </button>

              {/* Private indicator */}
              {project.isPrivate && (
                <div className='absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/90 text-white rounded-full'>
                  <Lock className='h-3.5 w-3.5' />
                  <span className='text-xs font-medium'>Private Project</span>
                </div>
              )}
            </div>

            {/* Content - scrollable */}
            <div className='flex-1 overflow-y-auto p-6'>
              {/* Technologies */}
              {project.id !== 'cvo' && project.id !== 'timesheet' && (
                <div className='mb-6'>
                  <h3 className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-3'>
                    {t('experience.technologiesUsed')}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies &&
                      project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className='flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg'
                        >
                          {renderTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              {/* Project-specific content */}
              {project.id === 'timesheet' ? (
                <AmoTrackSummary />
              ) : project.id === 'cvo' ? (
                <CvoSummary />
              ) : (
                <>
                  {/* Description */}
                  <div className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                      Project Overview
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300'>
                      {project.description}
                    </p>
                  </div>

                  {/* Technical challenges and solutions */}
                  <div className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3'>
                      Technical Details
                    </h3>
                    <div className='bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4'>
                      <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                        {t('projects.technicalChallenge')}
                      </h4>
                      <p className='text-gray-600 dark:text-gray-400 mb-4'>
                        {project.challenges}
                      </p>
                      <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                        {t('projects.solution')}
                      </h4>
                      <p className='text-gray-600 dark:text-gray-400'>
                        {project.solutions}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer with actions */}
            <div className='border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800'>
              {project.isPrivate ? (
                <span className='text-sm text-gray-500 dark:text-gray-400 flex items-center'>
                  <Lock className='h-4 w-4 mr-1' />
                  Private repository - Code available upon request
                </span>
              ) : (
                <a
                  href={`https://github.com/username/${project.id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium flex items-center'
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
              <button
                onClick={onClose}
                className='px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors duration-200'
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
