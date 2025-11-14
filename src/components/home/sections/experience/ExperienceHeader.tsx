import type { ExperienceHeaderProps } from "../../../../interface/experience";
import { typography } from "../../../../constants";


export const ExperienceHeader = ({
  roleKey,
  companyKey,
  periodKey,
  typeKey,
  featured,
  t,
  isDesktop = true
}: ExperienceHeaderProps) => {
  const headerClassName = `${typography.heading.h4} ${
    featured ? 'text-indigo-700 dark:text-indigo-400' : 'text-gray-800 dark:text-gray-200'
  }`;

  const periodClassName = isDesktop
    ? `flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 ${typography.body.sm}`
    : `flex flex-col ${typography.body.sm}`;

  return (
    <div className='flex-1'>
      <h3 className={headerClassName}>
        {t(roleKey)}
      </h3>
      <div className={periodClassName}>
        <span className={typography.weight.medium}>{t(companyKey)}</span>
        {isDesktop && <span className='hidden sm:inline text-gray-400 dark:text-gray-600'>•</span>}
        <span className='text-gray-600 dark:text-gray-400'>{t(periodKey)}</span>
      </div>
      <div className='mt-1 mb-3'>
        <span className={`${typography.body.xs} text-gray-500 dark:text-gray-500 inline-block`}>
          {t(typeKey)}
        </span>
      </div>
    </div>
  );
};