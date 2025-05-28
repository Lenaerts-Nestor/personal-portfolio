import { motion } from 'framer-motion';
import { memo } from 'react';
import { Briefcase, Code } from 'lucide-react';
import { useI18n } from '../../../shared/i18nContext';
import { fadeIn } from '../../../../interface/intro';

export const PositionBadges = memo(() => {
  const { t } = useI18n();

  return (
    <motion.div
      variants={fadeIn}
      className='flex flex-wrap gap-3 mt-4'
    >
      <span className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
        <Briefcase className='w-4 h-4' />
        <span>{t('home.intro.juniorFullStack')}</span>
      </span>
      <span className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
        <Code className='w-4 h-4' />
        <span>{t('home.intro.juniorBackend')}</span>
      </span>
    </motion.div>
  );
});

PositionBadges.displayName = 'PositionBadges';