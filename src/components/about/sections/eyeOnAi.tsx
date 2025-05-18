'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../../shared/i18nContext'; // Assuming i18nContext is in shared folder

export const EyeOnAiSection = () => {
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
          🤖
        </span>
        {t('about.eyeOnAi.title')}
      </motion.h3>

      <div className='mb-6 pl-10'>
        <h4 className='font-semibold text-gray-800 mb-2'>
          {t('about.eyeOnAi.subheading1Title')}
        </h4>
        <p className='text-gray-700'>{t('about.eyeOnAi.subheading1Text')}</p>
      </div>

      <div className='pl-10'>
        <h4 className='font-semibold text-gray-800 mb-2'>
          {t('about.eyeOnAi.subheading2Title')}
        </h4>
        <p className='text-gray-700'>{t('about.eyeOnAi.subheading2Text')}</p>
      </div>
    </section>
  );
};
