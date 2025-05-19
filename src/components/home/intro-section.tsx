'use client';

import { motion } from 'framer-motion';
import {
  Code,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Download,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { gradientTextClasses } from '../../style/style';
import { useI18n } from '../shared/i18nContext';

export const IntroSection = () => {
  const { t } = useI18n();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Overview sections that link to main content areas
  const overviewSections = [
    {
      icon: <Code className='w-5 h-5' />,
      title: t('home.technologies'),
      description: t('home.techDescription'),
      link: '#technologies',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      iconColor: 'text-indigo-600',
    },
    {
      icon: <FolderKanban className='w-5 h-5' />,
      title: t('home.projects'),
      description: t('home.projectsDescription'),
      link: '#projects',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      iconColor: 'text-purple-600',
    },
    {
      icon: <Briefcase className='w-5 h-5' />,
      title: t('home.experienceTitle'),
      description: t('home.experienceDescription'),
      link: '#experience',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconColor: 'text-blue-600',
    },
    {
      icon: <GraduationCap className='w-5 h-5' />,
      title: t('home.educationTitle'),
      description: t('home.educationDescription'),
      link: '#education',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section
      id='intro'
      className='h-[calc(100vh-64px)] flex items-center py-6 sm:py-10 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Main Heading and Description */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
            className='space-y-5'
          >
            {/* Position Badge */}
            <motion.div variants={fadeIn}>
              <span className='inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-2'>
                {t('home.position')}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${gradientTextClasses}`}
              variants={fadeIn}
            >
              {t('home.welcome')}
            </motion.h1>

            {/* Description */}
            <motion.p
              className='text-lg text-gray-600 leading-relaxed'
              variants={fadeIn}
            >
              {t('home.description')}
            </motion.p>

            {/* Primary CTAs - Download CV button repositioned for better visibility */}
            <motion.div className='flex flex-wrap gap-4' variants={fadeIn}>
              <a
                href={t('about.cvDownloadLink')}
                download
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300'
              >
                <Download className='w-5 h-5' />
                <span>{t('experience.downloadResume')}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Profile Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:max-w-lg w-full mx-auto'
          >
            <div className='bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
              <div className='p-5 sm:p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    {t('home.quickOverview')}
                  </h2>
                  <span className='px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium'>
                    {t('home.position')}
                  </span>
                </div>

                <motion.div
                  className='space-y-2'
                  initial='hidden'
                  animate='visible'
                  variants={staggerContainer}
                >
                  {/* Enhanced clickable overview sections */}
                  {overviewSections.map((section, index) => (
                    <motion.a
                      key={index}
                      href={section.link}
                      variants={fadeIn}
                      className='flex items-start gap-3 group p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02] border border-transparent hover:border-gray-100'
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 ${section.bgColor} rounded-lg flex items-center justify-center ${section.iconColor} shadow-sm group-hover:shadow transition-shadow duration-300`}
                      >
                        {section.icon}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                          <h3 className='font-medium text-gray-800 mb-1 group-hover:text-indigo-700 transition-colors duration-300 text-lg'>
                            {section.title}
                          </h3>
                          <ExternalLink className='w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>
                        <p className='text-gray-600 text-sm'>
                          {section.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className='flex justify-center mt-4'
                >
                  <a
                    href='#technologies'
                    className='flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors'
                  >
                    <span className='text-sm mb-2'>{t('home.scrollDown')}</span>
                    <ChevronDown className='w-5 h-5 animate-bounce' />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
