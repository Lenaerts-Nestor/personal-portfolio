import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { gradientTextClasses } from '../../../style/style';
import { useI18n } from '../../shared/i18nContext';

import { ContactCard } from './intro/contact-card';
import { OverviewCard } from './intro/overview-card';
import { PositionBadges } from './intro/position-badges';
import { SectionDescription } from './intro/section-description';
import { createOverviewSections } from './intro/overview-data';
import { staggerContainer, fadeIn } from '../../../interface/intro';

export const IntroSection = memo(() => {
  const { t } = useI18n();
  const overviewSections = useMemo(() => createOverviewSections(t), [t]);

  return (
    <section
      id='intro'
      className='min-h-[calc(100vh-64px)] flex items-center py-8 sm:py-12 lg:py-16 overflow-hidden'
      role='banner'
      aria-labelledby='intro-heading'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          {/* Main Content */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
            className='space-y-8 lg:space-y-10'
          >
            <motion.h1
              id='intro-heading'
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${gradientTextClasses}`}
              variants={fadeIn}
            >
              {t('home.intro.softwareDeveloper')}
            </motion.h1>
            
            <PositionBadges />
            <SectionDescription />
            <ContactCard />
          </motion.div>

          {/* Overview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full lg:justify-self-end'
          >
            <OverviewCard overviewSections={overviewSections} />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

IntroSection.displayName = 'IntroSection';