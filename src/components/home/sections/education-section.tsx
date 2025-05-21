import { GraduationCap } from 'lucide-react';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { EducationCard } from './education/education-card';
import { ProfessionalDevCard } from './education/professional-dev-card';

export default function EducationSection() {
  const { t } = useI18n();

  // Professional development data
  const professionalSections = [
    {
      title: 'Self-Directed Learning',
      description: 'Regular engagement with documentation, tutorials, and community resources to deepen understanding of React, Node.js, and TypeScript.'
    },
    {
      title: 'Technical Reading',
      description: 'Study of industry-standard books like "Clean Code" and "Don\'t Make Me Think" for best practices.'
    },
    {
      title: 'Practical Application',
      description: 'Applied learning through internship work and personal projects, focusing on full-stack applications.'
    }
  ];
  
  // Education data
  const educationData = [
    {
      title: 'Graduaat Programmeren',
      institution: 'AP Hogeschool Antwerpen',
      period: 'September 2023 - June 2025 (Expected)',
      courseworks: ['Web Frameworks', 'API Development', 'OOP', 'Databases'],
      courseworkTitle: 'Key Coursework',
      description: 'Industry-focused programming degree with emphasis on practical web development skills.',
      notCompleted: false,
      badgeColor: 'indigo' as const
    },
    {
      title: 'Bachelor Toegepaste Informatica',
      institution: 'AP Hogeschool Antwerpen',
      period: 'September 2020 - June 2022',
      courseworks: ['Programming Principles', 'Database Programming', 'Web Programming', '.NET OOP'],
      courseworkTitle: 'Valuable Coursework',
      description: 'Switched to Graduaat program for more hands-on learning approach.',
      notCompleted: true,
      badgeColor: 'purple' as const
    }
  ];

  return (
    <section id='education' className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title='Education & Professional Development'
          description='My academic foundation and continuous learning journey in software development'
          icon={<GraduationCap className='h-8 w-8' />}
        />

        {/* Education content layout */}
        <div className='max-w-4xl mx-auto education-content'>
          {/* Map through education data */}
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

          {/* Professional Development */}
          <ProfessionalDevCard 
            title="Continuous Professional Development"
            sections={professionalSections}
          />
        </div>
      </div>
    </section>
  );
}