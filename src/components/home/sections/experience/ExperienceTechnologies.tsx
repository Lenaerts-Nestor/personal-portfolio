import React from 'react';

interface ExperienceTechnologiesProps {
  technologies: Array<{ name: string; icon: React.ReactNode }>;
  t: (key: string) => string;
}

export const ExperienceTechnologies = ({ 
  technologies, 
  t 
}: ExperienceTechnologiesProps) => {
  if (!technologies?.length) return null;
  
  return (
    <div className='mt-4 pt-4 border-t border-gray-200'>
      <h4 className='text-xs font-medium text-gray-500 mb-2'>
        {t('experience.technologiesUsed')}
      </h4>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech, i) => (
          <div
            key={i}
            className='flex items-center bg-white px-2 py-1 rounded-full text-xs font-medium border border-gray-200 shadow-sm'
          >
            <span className='mr-1'>{tech.icon}</span>
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};