import { Briefcase } from 'lucide-react';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { experienceData } from '../../../utils/experience-data';
import { ExperienceLayout } from './experience/ExperienceLayout';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function ExperienceSection() {
  const { t } = useI18n();
  const sectionRef = useScrollAnimation({ 
    animationType: 'slide-left',
    threshold: 0.2 
  });
  return (
    <section ref={sectionRef} id='experience' className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title={t('home.experienceTitle')}
          description={t('home.experienceDescription')}
          icon={<Briefcase className='h-8 w-8' />}
        />

        <ExperienceLayout experiences={experienceData} t={t} />
      </div>
    </section>
  );
}