import { motion } from 'framer-motion';
import type { DesktopExperienceCardProps } from '../../../../interface/experience';
import { Card } from '@/components/ui';
import { ExperienceHeader } from './ExperienceHeader';
import { ExperienceIcon } from './ExperienceIcon';
import { ExperienceList } from './ExperienceList';
import { ExperienceTechnologies } from './ExperienceTechnologies';

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
      className="h-full"
    >
      <Card
        variant={exp.featured ? 'featured' : 'default'}
        padding="md"
        className="h-full flex flex-col"
      >
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
          <p className='text-gray-700 dark:text-gray-300 mb-3 text-sm'>
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
      </Card>
    </motion.div>
  );
};