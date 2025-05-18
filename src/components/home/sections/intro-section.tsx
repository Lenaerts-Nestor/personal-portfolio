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
              className='mt-6 text-lg leading-8 text-gray-600 mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Junior developer with hands-on experience in building modern web
              applications. I combine technical skills with strong
              problem-solving abilities to deliver clean, efficient code and
              exceptional user experiences. Based in Belgium and available for
              opportunities across Europe.
            </motion.p>

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
            className='relative hidden md:flex justify-center items-center'
          >
            <div className='w-80 h-80 rounded-full bg-indigo-100 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7zwDG7AheP5bFHrvDtRpJZ3q1ZBU74.png'
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
