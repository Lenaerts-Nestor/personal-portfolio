import { Briefcase } from 'lucide-react';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { experienceData } from '../../../utils/experience-data';
import { ExperienceLayout } from './experience/ExperienceLayout';

export default function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section id='experience' className='py-16 bg-gray-50'>
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