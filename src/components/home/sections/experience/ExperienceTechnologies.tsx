import type { ExperienceTechnologiesProps } from '../../../../interface/experience';
import { Badge } from '@/components/ui';

export const ExperienceTechnologies = ({
  technologies,
  t
}: ExperienceTechnologiesProps) => {
  if (!technologies?.length) return null;

  return (
    <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
      <h4 className='text-xs font-medium text-gray-500 dark:text-gray-400 mb-2'>
        {t('experience.technologiesUsed')}
      </h4>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech, i) => (
          <Badge
            key={i}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <span>{tech.icon}</span>
            {tech.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};