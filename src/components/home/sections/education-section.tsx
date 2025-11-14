import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../../shared/layout/section-heading';
import { EducationCard } from './education/education-card';
import { ProfessionalDevCard } from './education/professional-dev-card';
import { educationData, professionalSections } from '../../../utils/education-data';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SECTION_IDS } from '../../../constants';
import { Section, Container } from '../../ui';

export default function EducationSection() {
  const sectionRef = useScrollAnimation({ 
    animationType: 'slide-right',
    threshold: 0.2 
  });

  return (
    <Section ref={sectionRef} id={SECTION_IDS.EDUCATION} background="default">
      <Container maxWidth="lg">
        <SectionHeading
          title='Education & Professional Development'
          description='My academic foundation and continuous learning journey in software development'
          icon={<GraduationCap className='h-8 w-8' />}
        />

        <div className='max-w-4xl mx-auto education-content'>
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
              badgeColor={edu.badgeColor}
              delay={index * 0.2}
            />
          ))}
          <ProfessionalDevCard
            title="Continuous Professional Development"
            sections={professionalSections}
          />
        </div>
      </Container>
    </Section>
  );
}