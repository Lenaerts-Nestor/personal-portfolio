'use client';

import { motion } from 'framer-motion';

import { Download, ArrowRight } from 'lucide-react';
import { gradientTextClasses } from '../../../style/style';
import { CustomButton } from '../../shared/button';
import { useI18n } from '../../shared/i18nContext';

export const IntroSection = () => {
  const { t } = useI18n();

  return (
    <section
      id='intro'
      className='min-h-[calc(100vh-64px)] flex items-center py-16 sm:py-24'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='text-left'
          >
            <motion.h1
              className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${gradientTextClasses} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Full-Stack Developer with React & Node.js Expertise
            </motion.h1>

            <motion.p
              className='mt-6 text-lg leading-8 text-gray-600 mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Junior developer with hands-on experience in building modern web
              applications. I combine technical skills with strong
              problem-solving abilities to deliver clean, efficient code and
              exceptional user experiences.
            </motion.p>

            <motion.div
              className='space-y-4 mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className='flex items-center'>
                <span className='bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2'>
                  React
                </span>
                <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2'>
                  TypeScript
                </span>
                <span className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2'>
                  Node.js
                </span>
                <span className='bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  PostgreSQL
                </span>
              </div>
              <p className='text-gray-600'>
                Based in Belgium • Available for full-time positions • Open to
                relocation
              </p>
            </motion.div>

            <motion.div
              className='flex flex-col sm:flex-row gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href='/resume.pdf'
                download
                className='inline-flex items-center'
              >
                <CustomButton
                  text='Download CV'
                  variant='primary'
                  icon={<Download className='w-4 h-4 ml-2' />}
                />
              </a>
              <a href='#projects'>
                <CustomButton
                  text='View Projects'
                  variant='secondary'
                  icon={<ArrowRight className='w-4 h-4 ml-2' />}
                />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='relative hidden md:block'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl transform rotate-3'></div>
            <div className='relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100'>
              <div className='flex items-center mb-6'>
                <div className='w-3 h-3 bg-red-500 rounded-full mr-2'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full mr-2'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>

              <div className='space-y-4'>
                <div className='h-6 bg-gray-100 rounded-md w-3/4'></div>
                <div className='h-6 bg-gray-100 rounded-md'></div>
                <div className='h-6 bg-gray-100 rounded-md w-5/6'></div>
                <div className='h-6 bg-indigo-100 rounded-md w-1/2'></div>

                <div className='pt-4'>
                  <div className='h-24 bg-purple-100 rounded-md'></div>
                </div>

                <div className='space-y-2'>
                  <div className='h-4 bg-gray-100 rounded-md w-5/6'></div>
                  <div className='h-4 bg-gray-100 rounded-md'></div>
                  <div className='h-4 bg-gray-100 rounded-md w-3/4'></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
