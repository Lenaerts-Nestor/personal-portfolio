'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../../shared/i18nContext'; // Assuming i18nContext is in shared folder

export const SkillsSection = () => {
  const { t } = useI18n();
  const skills = [
    {
      category: t('about.skills.frontend'),
      items: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
    },
    {
      category: t('about.skills.backend'),
      items: ['Node.js', 'C#', '.NET', 'Express'],
    },
    {
      category: t('about.skills.database'),
      items: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    { category: t('about.skills.tools'), items: ['Git', 'Docker', 'VS Code'] },
  ];

  return (
    <section>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-xl font-semibold text-indigo-700 mb-4 pb-1'
      >
        {t('about.skills.title')}
      </motion.h3>

      <div className='space-y-6'>
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h4 className='font-medium text-gray-800 mb-2'>
              {skillGroup.category}
            </h4>
            <div className='flex flex-wrap gap-2'>
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className='px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
