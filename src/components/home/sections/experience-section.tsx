import { Briefcase } from 'lucide-react';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { experienceData } from '../../../utils/experience-data';
import { ExperienceLayout } from './experience/ExperienceLayout';
import { SECTION_IDS } from '../../../constants';
import { Section, Container } from '../../ui';

export default function ExperienceSection() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_IDS.EXPERIENCE} background="default">
      <Container maxWidth="lg">
        <SectionHeading
          title={t('home.experienceTitle')}
          description={t('home.experienceDescription')}
          icon={<Briefcase className='h-8 w-8' />}
        />

        <ExperienceLayout experiences={experienceData} t={t} />
      </Container>
    </Section>
  );
}