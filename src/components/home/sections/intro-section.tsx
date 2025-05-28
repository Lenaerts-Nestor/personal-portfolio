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
      className='relative flex items-center justify-center lg:h-[calc(100vh-64px)] lg:items-center lg:justify-center lg:overflow-hidden'
      role='banner'
      aria-labelledby='intro-heading'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full min-h-0'>
          {/* Main Content */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
            className='space-y-6 lg:space-y-8 flex flex-col justify-center min-h-0'
          >
            <motion.h1
              id='intro-heading'
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${gradientTextClasses}`}
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
            className='w-full lg:justify-self-end flex items-center min-h-0'
          >
            <OverviewCard overviewSections={overviewSections} />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

IntroSection.displayName = 'IntroSection';