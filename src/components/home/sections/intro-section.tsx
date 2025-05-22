import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { gradientTextClasses } from '../../../style/style';
import { useI18n } from '../../shared/i18nContext';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

import { ContactCard } from './intro/contact-card';
import { OverviewCard } from './intro/overview-card';
import { PositionBadges } from './intro/position-badges';
import { SectionDescription } from './intro/section-description';
import { staggerContainer, fadeIn } from '../../../interface/intro';

export const IntroSection = () => {
  const { t } = useI18n();

  const overviewSections = [
    {
      icon: <Code className='w-5 h-5' />,
      title: t('home.coreSkillsTitle'),
      description: t('home.intro.overviewSkillsDescription'),
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      iconColor: 'text-indigo-600',
    },
    {
      icon: <GraduationCap className='w-5 h-5' />,
      title: t('home.educationTitle'),
      description: t('home.intro.overviewEducationSummary').replace(
        /API Development|Web Frameworks|Database Management/g,
        '<span class="font-semibold text-emerald-700">$&</span>'
      ),
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      iconColor: 'text-emerald-600',
    },
    {
      icon: <Briefcase className='w-5 h-5' />,
      title: t('home.intro.internshipHighlightTitle'),
      description: t('home.intro.internshipHighlightDescription'),
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconColor: 'text-blue-600',
    },
  ];

  return (
    <section
      id='intro'
      className='min-h-[calc(100vh-64px)] flex items-center py-6 sm:py-10 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
            className='space-y-6'
          >
            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-600 ${gradientTextClasses}`}
              variants={fadeIn}
            >
              {t('home.intro.softwareDeveloper')}
            </motion.h1>
            <PositionBadges t={t} fadeIn={fadeIn} />
            <SectionDescription t={t} fadeIn={fadeIn} />
            <ContactCard t={t} fadeIn={fadeIn} />
            <motion.div variants={fadeIn}>
              <a
                href={t('about.cvDownloadLink')}
                download
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300'
              >
                <Download className='w-5 h-5' />
                <span>{t('home.intro.downloadResume')}</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full'
          >
            <OverviewCard t={t} overviewSections={overviewSections} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};