'use client';

import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Code,
  GraduationCap,
  FolderKanban,
  Briefcase,
} from 'lucide-react';
import { gradientTextClasses } from '../../style/style';
import { CustomButton } from '../shared/button';
import { useI18n } from '../shared/i18nContext';

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
              {t('home.welcome')}
            </motion.h1>

            <motion.p
              className='mt-6 text-lg leading-8 text-gray-600 mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('home.description')}
            </motion.p>

            {/* Section Navigation Buttons */}
            <motion.div
              className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href='#technologies'
                className='flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium'
              >
                <Code className='w-4 h-4' />
                <span>{t('home.technologies')}</span>
              </a>

              <a
                href='#projects'
                className='flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium'
              >
                <FolderKanban className='w-4 h-4' />
                <span>{t('home.projects')}</span>
              </a>

              <a
                href='#experience'
                className='flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium'
              >
                <Briefcase className='w-4 h-4' />
                <span>{t('home.experienceTitle')}</span>
              </a>

              <a
                href='#education'
                className='flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium'
              >
                <GraduationCap className='w-4 h-4' />
                <span>{t('home.educationTitle')}</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='relative hidden md:flex justify-center items-center'
          >
            <div className='w-80 h-80 rounded-full bg-indigo-100 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7zwDG7AheP5bFHrvDtRpJZ3q1ZBU74.png'
                alt='Profile' // Consider adding an alt text translation key as well
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
