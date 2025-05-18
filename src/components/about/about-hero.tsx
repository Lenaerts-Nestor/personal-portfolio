'use client';

import { motion } from 'framer-motion';
import { gradientTextClasses } from '../../style/style';
import { useI18n } from '../shared/i18nContext';

export const AboutHero = () => {
  const { t } = useI18n();

  return (
    <section className='py-16 bg-gradient-to-b from-white to-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0'
          >
            <div className='w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center'>
              <span className='text-6xl'>👨‍💻</span>
            </div>
          </motion.div>

          <div className='text-center md:text-left'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-4xl md:text-5xl font-bold mb-4 ${gradientTextClasses}`}
            >
              {t('about.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-xl text-gray-600 max-w-2xl'
            >
              {t('about.subtitle')}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
