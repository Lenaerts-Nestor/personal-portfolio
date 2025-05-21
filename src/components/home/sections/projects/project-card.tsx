import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { project_techIcons } from '../../../../utils/projects-data';
import { ProjectTechBadges } from './project-tech-badges';
import type { ProjectCardProps } from '../../../../interface/project';

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const ProjectCard = ({
  project,
  getProjectDescription,
  handleProjectClick,
  t,
}: ProjectCardProps) => {
  const renderTechIcon = (tech: string) => {
    const iconData = project_techIcons[tech as keyof typeof project_techIcons];
    if (iconData) {
      const IconComponent = iconData.icon;
      return <IconComponent className={`h-4 w-4 ${iconData.color}`} />;
    }
    return null;
  };

  return (
    <motion.div
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

        {/* Technologies */}
        <ProjectTechBadges 
          technologies={project.technologies} 
          renderTechIcon={renderTechIcon} 
        />

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
  );
};
