import { motion } from 'framer-motion';
import { memo } from 'react';
import { useI18n } from '../../../shared/i18nContext';
import { fadeIn } from '../../../../interface/intro';

export const SectionDescription = memo(() => {
  const { t } = useI18n();

  return (
    <motion.div
      className='space-y-4'
      variants={fadeIn}
    >
      <p className='text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl'>
        {t('home.intro.introP1')}
        <span className='font-semibold text-gray-800'>{t('home.intro.age')}</span>
        {t('home.intro.introP2')}
        <span className='font-bold text-indigo-600 hover:text-indigo-700 transition-colors'>
          {t('home.intro.degree')}
        </span>
        {t('home.intro.introP3')}
      </p>
      
      <p className='text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl'>
        <span className='font-bold text-indigo-600 hover:text-indigo-700 transition-colors'>
          {t('home.intro.projectHighlight')}
        </span>
        {t('home.intro.introP4')}
        <span className='font-semibold text-gray-800'>
          {t('home.intro.roleAspiration')}
        </span>
        {t('home.intro.introP5')}
      </p>
    </motion.div>
  );
});

SectionDescription.displayName = 'SectionDescription';