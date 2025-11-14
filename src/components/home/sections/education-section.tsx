import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../../shared/layout/section-heading';
import { EducationCard } from './education/education-card';
import { AIMethodologyCard } from './education/ai-methodology-card';
import { educationData } from '../../../utils/education-data';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SECTION_IDS } from '../../../constants';
import { Section, Container } from '../../ui';
import { useI18n } from '../../shared/i18nContext';

export default function EducationSection() {
  const sectionRef = useScrollAnimation({
    animationType: 'slide-right',
    threshold: 0.2
  });

  const { t } = useI18n();

  return (
    <Section ref={sectionRef} id={SECTION_IDS.EDUCATION} background="default">
      <Container maxWidth="lg">
        <SectionHeading
          title={t('education.sectionTitle')}
          description={t('education.sectionDescription')}
          icon={<GraduationCap className='h-8 w-8' />}
        />

        {/* Desktop: 2-column grid */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 gap-6'>
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              title={edu.title}
              institution={edu.institution}
              period={edu.period}
              courseworks={edu.courseworks}
              courseworkTitle={edu.courseworkTitle}
              description={edu.description}
              notCompleted={edu.notCompleted}
              delay={index * 0.2}
            />
          ))}
          <AIMethodologyCard delay={0.4} />
        </div>

        {/* Mobile: Stacked */}
        <div className='md:hidden space-y-6'>
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              title={edu.title}
              institution={edu.institution}
              period={edu.period}
              courseworks={edu.courseworks}
              courseworkTitle={edu.courseworkTitle}
              description={edu.description}
              notCompleted={edu.notCompleted}
              delay={index * 0.2}
            />
          ))}
          <AIMethodologyCard delay={0.4} />
        </div>
      </Container>
    </Section>
  );
}
