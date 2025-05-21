import { motion } from 'framer-motion';
import type { Experience } from '../../../../interface/experience';
import { ExperienceHeader } from './ExperienceHeader';
import { ExperienceIcon } from './ExperienceIcon';
import { ExperienceList } from './ExperienceList';
import { ExperienceTechnologies } from './ExperienceTechnologies';

interface DesktopExperienceCardProps {
  experience: Experience;
  index: number;
  t: (key: string) => string;
}

export const DesktopExperienceCard = ({
  experience: exp,
  index: idx,
  t
}: DesktopExperienceCardProps) => {
  return (
    <motion.div
      key={exp.companyKey}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`rounded-lg shadow-sm overflow-hidden h-full ${
        exp.featured
          ? 'bg-indigo-50 border border-indigo-100'
          : 'bg-white border border-gray-100'
      }`}
    >
      <div className='p-6 flex flex-col h-full'>
        <div className='flex items-start gap-4'>
          <ExperienceIcon roleKey={exp.roleKey} featured={exp.featured} />
          <ExperienceHeader
            roleKey={exp.roleKey}
            companyKey={exp.companyKey}
            periodKey={exp.periodKey}
            typeKey={exp.typeKey}
            featured={exp.featured}
            t={t}
            isDesktop={true}
          />
        </div>

        {exp.descriptionKey && (
          <p className='text-gray-700 mb-3 text-sm'>
            {t(exp.descriptionKey)}
          </p>
        )}

        <ExperienceList 
          responsibilitiesKeys={exp.responsibilitiesKeys}
          t={t}
          featured={exp.featured}
        />

        {exp.technologies && (
          <ExperienceTechnologies technologies={exp.technologies} t={t} />
        )}
      </div>
    </motion.div>
  );
};