'use client';

import { CustomButton } from '../../shared/button';
import { useI18n } from '../../shared/i18nContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gradientTextClasses } from '../../../style/style';

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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-left'
          >
            <motion.h1
              className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${gradientTextClasses} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('home.welcome')}
            </motion.h1>

            <motion.p
              className='mt-6 text-lg leading-8 text-gray-600 mb-10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('home.description')}
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to='/Blog'>
                <CustomButton text={t('home.blogButton')} variant='primary' />
              </Link>
              <Link to='/About'>
                <CustomButton
                  text={t('home.aboutButton')}
                  variant='secondary'
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
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

        <motion.div
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
        >
          <div className='flex flex-col items-center'>
            <span className='text-sm text-gray-500 mb-2'>
              {t('home.scrollDown')}
            </span>
            <svg
              className='w-6 h-6 text-indigo-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
