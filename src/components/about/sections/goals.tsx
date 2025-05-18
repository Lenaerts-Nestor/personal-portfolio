'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../../shared/i18nContext'; // Assuming i18nContext is in shared folder

export const GoalsSection = () => {
  const { t } = useI18n();

  return (
    <section className='mb-8'>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-4 pb-1'
      >
        <span className='inline-flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-xl'>
          🎯
        </span>
        {t('about.goals.title')}
      </motion.h3>

      <div className='pl-10'>
        <p className='text-gray-700 mb-4'>{t('about.goals.paragraph1')}</p>

        <blockquote className='border-l-4 border-indigo-400 pl-4 py-3 bg-indigo-50 rounded-r-md italic text-gray-600'>
          {t('about.goals.quote')}
        </blockquote>
      </div>
    </section>
  );
};
