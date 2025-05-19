import { motion } from 'framer-motion';
import {
  Code,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Download,
  ChevronDown,
  MapPin,
  Car,
  Building2,
  Mail,
  Phone,
  Github,
  Linkedin,
  Languages,
  Clock,
  Info,
  ExternalLink,
} from 'lucide-react';
import { gradientTextClasses } from '../../../style/style';
import { useI18n } from '../../shared/i18nContext';

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
      description: 'React, TypeScript, Node.js, PostgreSQL, Fastify',
      link: '#technologies',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      iconColor: 'text-indigo-600',
    },
    {
      icon: <FolderKanban className='w-5 h-5' />,
      title: t('home.projects'),
      description: 'Full-stack timesheet app, React components library',
      link: '#projects',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      iconColor: 'text-purple-600',
    },
    {
      icon: <Briefcase className='w-5 h-5' />,
      title: t('home.experienceTitle'),
      description: 'Software Development Intern, IT Support',
      link: '#experience',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconColor: 'text-blue-600',
    },
    {
      icon: <GraduationCap className='w-5 h-5' />,
      title: t('home.educationTitle'),
      description: 'Graduaat Programmeren, AP Hogeschool',
      link: '#education',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section
      id='intro'
      className='min-h-[calc(100vh-64px)] flex items-center py-6 sm:py-10 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Main Heading and Description */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
            className='space-y-6'
          >
            {/* Position Badges */}

            {/* Main Heading */}
            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-600 ${gradientTextClasses}`}
              variants={fadeIn}
            >
              Software Developer
            </motion.h1>

            {/* Position Badges - Moved below the main heading for better visibility */}
            <motion.div
              variants={fadeIn}
              className='flex-wrap gap-3 mt-4 hidden md:flex'
            >
              <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium'>
                <Briefcase className='w-4 h-4' />
                <span>Junior Full-stack Developer</span>
              </span>
              <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium'>
                <Code className='w-4 h-4' />
                <span>Junior Backend Developer</span>
              </span>
            </motion.div>

            {/* Description with highlighted keywords */}
            <motion.p
              className='text-lg text-gray-600 leading-relaxed max-w-2xl'
              variants={fadeIn}
            >
              I'm a <span className='font-medium'>24-year-old developer</span>{' '}
              about to receive my{' '}
              <span className='font-semibold text-indigo-600'>
                Graduaat Programmeren
              </span>{' '}
              diploma. Recently completed a successful internship building a{' '}
              <span className='font-semibold text-indigo-600'>
                full-stack timesheet application
              </span>{' '}
              using React, TypeScript, Node.js, Fastify & PostgreSQL. Eager to
              start my career as a{' '}
              <span className='font-medium'>
                Junior Full-stack or Backend Developer
              </span>
              , with a strong willingness to learn new technologies and
              languages.
            </motion.p>

            {/* Contact Information - Moved outside of Quick Overview */}
            <motion.div
              variants={fadeIn}
              className='mt-6 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden'
            >
              {/* Contact Header */}
              <div className='flex items-center gap-2 p-4 border-b border-gray-100 bg-gray-50'>
                <Info className='w-5 h-5 text-indigo-600' />
                <h3 className='text-sm font-medium text-indigo-600'>
                  Contact & Details
                </h3>
              </div>

              <div className='p-4'>
                {/* Contact Methods - First group */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4'>
                  <a
                    href='mailto:email@example.com'
                    className='flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200'
                  >
                    <Mail className='w-4 h-4 flex-shrink-0' />
                    <span className='text-sm truncate'>email@example.com</span>
                  </a>
                  <a
                    href='tel:+32123456789'
                    className='flex items-center gap-2 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200'
                  >
                    <Phone className='w-4 h-4 flex-shrink-0' />
                    <span className='text-sm truncate'>+32 123 456 789</span>
                  </a>
                  <a
                    href='https://github.com/username'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200'
                  >
                    <Github className='w-4 h-4 flex-shrink-0' />
                    <span className='text-sm truncate'>
                      github.com/username
                    </span>
                  </a>
                  <a
                    href='https://linkedin.com/in/username'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-3 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors duration-200'
                  >
                    <Linkedin className='w-4 h-4 flex-shrink-0' />
                    <span className='text-sm truncate'>
                      linkedin.com/in/username
                    </span>
                  </a>
                </div>

                {/* Personal Details - Second group with visual separation */}
                <div className='pt-3 border-t border-gray-100'>
                  <div className='flex flex-wrap gap-2'>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-medium'>
                      <MapPin className='w-3.5 h-3.5' />
                      <span>Antwerpen Region</span>
                    </span>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-medium'>
                      <Clock className='w-3.5 h-3.5' />
                      <span>Available Immediately</span>
                    </span>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full text-xs font-medium'>
                      <Car className='w-3.5 h-3.5' />
                      <span>Own car</span>
                    </span>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-medium'>
                      <Building2 className='w-3.5 h-3.5' />
                      <span>Office ready</span>
                    </span>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium'>
                      <Languages className='w-3.5 h-3.5' />
                      <span>Dutch, English, Spanish</span>
                    </span>

                    {/* Position badges integrated into personal details for better mobile display */}
                    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium md:hidden'>
                      <Briefcase className='w-3.5 h-3.5' />
                      <span>Junior Full-stack Developer</span>
                    </span>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium md:hidden'>
                      <Code className='w-3.5 h-3.5' />
                      <span>Junior Backend Developer</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div variants={fadeIn}>
              <a
                href={t('about.cvDownloadLink')}
                download
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300'
              >
                <Download className='w-5 h-5' />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Quick Overview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full'
          >
            <div className='bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
              <div className='p-6'>
                <h2 className='text-xl font-semibold text-gray-800 mb-5'>
                  Quick Overview
                </h2>

                {/* Overview Sections with enhanced navigation */}
                <div className='space-y-5'>
                  {overviewSections.map((section, index) => (
                    <a
                      key={index}
                      href={section.link}
                      className='flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-xl transition-colors duration-200'
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 ${section.bgColor} rounded-xl flex items-center justify-center ${section.iconColor}`}
                      >
                        {section.icon}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                          <h3 className='font-medium text-gray-800 group-hover:text-indigo-600 transition-colors duration-200'>
                            {section.title}
                          </h3>
                          <ExternalLink className='w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200' />
                        </div>
                        <p className='text-gray-500 text-sm mt-1'>
                          {section.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Contact & Details Section - Remove this entire section from the Quick Overview */}

                {/* Scroll Down Indicator */}
                <div className='flex justify-center mt-6 text-gray-400'>
                  <a
                    href='#technologies'
                    className='flex flex-col items-center hover:text-indigo-500 transition-colors duration-200 group'
                    onClick={(e) => {
                      e.preventDefault();
                      const technologiesSection =
                        document.getElementById('technologies');
                      if (technologiesSection) {
                        technologiesSection.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }
                    }}
                  >
                    <span className='text-xs mb-1 group-hover:text-indigo-500'>
                      Scroll down to explore more
                    </span>
                    <ChevronDown className='w-5 h-5 animate-bounce group-hover:text-indigo-500' />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
