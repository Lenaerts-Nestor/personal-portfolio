import { motion } from 'framer-motion';
import type { SectionDescriptionProps } from '../../../../interface/intro';


export const SectionDescription = ({ t, fadeIn }: SectionDescriptionProps) => {
  return (
    <motion.p
      className='text-lg text-gray-600 leading-relaxed max-w-2xl'
      variants={fadeIn}
    >
      {t('home.intro.introP1')}
      <span className='font-medium'>{t('home.intro.age')}</span>
      {t('home.intro.introP2')}
      <span className='font-semibold text-indigo-600'>
        {t('home.intro.degree')}
      </span>
      {t('home.intro.introP3')}
      <span className='font-semibold text-indigo-600'>
        {t('home.intro.projectHighlight')}
      </span>
      {t('home.intro.introP4')}
      <span className='font-medium'>
        {t('home.intro.roleAspiration')}
      </span>
      {t('home.intro.introP5')}
    </motion.p>
  );
};