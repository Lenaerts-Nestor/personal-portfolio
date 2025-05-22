'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban } from 'lucide-react';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { ProjectModal } from './projects/project-private-modal';
import { ProjectCard } from './projects/project-card';
import { ProjectCarousel } from './projects/project-carousel';
import { enhancedProjects, container } from '../../../interface/project';


export const ProjectsSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useI18n();

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

  const getProjectDescription = (project: any) => {
    const keyForCardDescription = project.cardTranslationKey || project.id;
    const translationKey = `projects.${keyForCardDescription}.description`;
    const translatedDescription = t(translationKey);

    if (translatedDescription && translatedDescription !== translationKey) {
      return translatedDescription;
    }
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
            <ProjectCard
              key={project.id}
              project={project}
              getProjectDescription={getProjectDescription}
              handleProjectClick={handleProjectClick}
              t={t}
            />
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <ProjectCarousel
          projects={enhancedProjects}
          carouselIdx={carouselIdx}
          setCarouselIdx={setCarouselIdx}
          handleProjectClick={handleProjectClick}
          getProjectDescription={getProjectDescription}
          t={t}
        />
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
