'use client';

import { motion } from 'framer-motion';
import { GoalsSection } from './sections/goals';
import { EyeOnAiSection } from './sections/eyeOnAi';
import { LearningTrajectSection } from './sections/learningTraject';
import { SkillsSection } from './sections/skilss';
import { WorksStyleSection } from './sections/worksStyle';
import { useI18n } from '../shared/i18nContext';

export const AboutContent = () => {
  const { t } = useI18n();
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='md:col-span-2 space-y-12'
          >
            <div className='bg-white rounded-xl shadow-md p-8 border border-gray-100'>
              <WorksStyleSection />
              <hr className='my-8 border-gray-100' />
              <GoalsSection />
              <hr className='my-8 border-gray-100' />
              <LearningTrajectSection />
              <hr className='my-8 border-gray-100' />
              <EyeOnAiSection />
            </div>
          </motion.div>

          {/* Right column - Skills and additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-8'
          >
            <div className='bg-white rounded-xl shadow-md p-6 border border-gray-100'>
              <SkillsSection />
            </div>

            <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-md p-6 border border-gray-100'>
              <h3 className='text-xl font-semibold text-indigo-700 mb-4'>
                {t('about.contactTitle')}
              </h3>
              <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-indigo-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <a
                    href='mailto:contact@example.com'
                    className='text-indigo-600 hover:underline'
                  >
                    {t('about.contactEmail')}
                  </a>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-indigo-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                  <a
                    href='https://github.com/Lenaerts-Nestor'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-indigo-600 hover:underline'
                  >
                    {t('about.github')}
                  </a>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-indigo-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                  <a
                    href='https://www.linkedin.com/in/nestor-lenaerts/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-indigo-600 hover:underline'
                  >
                    {t('about.linkedin')}
                  </a>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-md p-6 border border-gray-100'>
              <h3 className='text-xl font-semibold text-indigo-700 mb-4'>
                {t('about.cvDownloadTitle')}
              </h3>
              <a
                href='#'
                className='inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-sm hover:from-indigo-700 hover:to-purple-700 transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                {t('about.cvDownloadButton')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
