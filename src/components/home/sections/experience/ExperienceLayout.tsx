import type {  ExperienceLayoutProps } from '../../../../interface/experience';
import { DesktopExperienceCard } from './DesktopExperienceCard';
import { MobileExperienceCard } from './MobileExperienceCard';



export const ExperienceLayout = ({ experiences, t }: ExperienceLayoutProps) => {
  return (
    <>
      <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {experiences.map((exp, idx) => (
          <DesktopExperienceCard 
            key={exp.companyKey}
            experience={exp} 
            index={idx} 
            t={t} 
          />
        ))}
      </div>

      {/* Mobile layout - stacked cards */}
      <div className='md:hidden space-y-6'>
        {experiences.map((exp, idx) => (
          <MobileExperienceCard 
            key={exp.companyKey}
            experience={exp} 
            index={idx} 
            t={t} 
          />
        ))}
      </div>
    </>
  );
};