import { motion } from 'framer-motion';
import { Briefcase, Code } from 'lucide-react';

interface PositionBadgesProps {
  t: (key: string) => string;
  fadeIn: any;
}

export const PositionBadges = ({ t, fadeIn }: PositionBadgesProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className='flex-wrap gap-3 mt-4 hidden md:flex'
    >
      <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium'>
        <Briefcase className='w-4 h-4' />
        <span>{t('home.intro.juniorFullStack')}</span>
      </span>
      <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium'>
        <Code className='w-4 h-4' />
        <span>{t('home.intro.juniorBackend')}</span>
      </span>
    </motion.div>
  );
};