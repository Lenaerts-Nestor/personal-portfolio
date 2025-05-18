'use client';

import { techStackCategories } from '../../../utils/techgroupsIcon';
import { useI18n } from '../../shared/i18nContext';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { SectionHeading } from '../../shared/layout/section-heading';

export const TechnologiesSection = () => {
  const { t } = useI18n();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section
      id='technologies'
      className='py-16 bg-gradient-to-b from-white to-gray-50'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title={t('home.technologies')}
          description={t('home.techDescription')}
          icon={<Code className='h-8 w-8' />}
        />

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:gap-10'>
          {/* Frontend */}
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
            className='flex flex-col h-full rounded-2xl shadow-xl bg-white overflow-hidden border-t-4 border-indigo-500 hover:shadow-2xl transition-shadow duration-300'
          >
            <div className='bg-gradient-to-r from-indigo-500 to-indigo-600 py-4'>
              <h3 className='text-2xl font-bold text-white text-center tracking-wide uppercase'>
                Frontend
              </h3>
            </div>
            <div className='p-6 flex-grow'>
              <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                {techStackCategories[0].items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={item}
                    className='flex flex-col items-center justify-center p-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 cursor-pointer'
                  >
                    <div className='mb-2'>{tech.icon}</div>
                    <span className='font-medium text-gray-800 text-center text-sm'>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
            className='flex flex-col h-full rounded-2xl shadow-xl bg-white overflow-hidden border-t-4 border-purple-500 hover:shadow-2xl transition-shadow duration-300'
          >
            <div className='bg-gradient-to-r from-purple-500 to-purple-600 py-4'>
              <h3 className='text-2xl font-bold text-white text-center tracking-wide uppercase'>
                Backend
              </h3>
            </div>
            <div className='p-6 flex-grow'>
              <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                {techStackCategories[1].items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={item}
                    className='flex flex-col items-center justify-center p-3 rounded-lg hover:bg-purple-50 transition-all duration-300 cursor-pointer'
                  >
                    <div className='mb-2'>{tech.icon}</div>
                    <span className='font-medium text-gray-800 text-center text-sm'>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cloud & Tools */}
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
            className='flex flex-col h-full rounded-2xl shadow-xl bg-white overflow-hidden border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300'
          >
            <div className='bg-gradient-to-r from-blue-500 to-blue-600 py-4'>
              <h3 className='text-2xl font-bold text-white text-center tracking-wide uppercase'>
                Cloud & Tools
              </h3>
            </div>
            <div className='p-6 flex-grow'>
              <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                {techStackCategories[3].items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={item}
                    className='flex flex-col items-center justify-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer'
                  >
                    <div className='mb-2'>{tech.icon}</div>
                    <span className='font-medium text-gray-800 text-center text-sm'>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
            className='flex flex-col h-full rounded-2xl shadow-xl bg-white overflow-hidden border-t-4 border-green-500 hover:shadow-2xl transition-shadow duration-300'
          >
            <div className='bg-gradient-to-r from-green-500 to-green-600 py-4'>
              <h3 className='text-2xl font-bold text-white text-center tracking-wide uppercase'>
                Database
              </h3>
            </div>
            <div className='p-6 flex-grow'>
              <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
                {techStackCategories[2].items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={item}
                    className='flex flex-col items-center justify-center p-3 rounded-lg hover:bg-green-50 transition-all duration-300 cursor-pointer'
                  >
                    <div className='mb-2'>{tech.icon}</div>
                    <span className='font-medium text-gray-800 text-center text-sm'>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
