interface ExperienceHeaderProps {
  roleKey: string;
  companyKey: string;
  periodKey: string;
  typeKey: string;
  featured: boolean;
  t: (key: string) => string;
  isDesktop?: boolean;
}

export const ExperienceHeader = ({
  roleKey,
  companyKey,
  periodKey,
  typeKey,
  featured,
  t,
  isDesktop = true
}: ExperienceHeaderProps) => {
  const headerClassName = `text-lg font-semibold ${
    featured ? 'text-indigo-700' : 'text-gray-800'
  }`;
  
  const periodClassName = isDesktop
    ? 'flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm'
    : 'flex flex-col text-sm';
  
  return (
    <div className='flex-1'>
      <h3 className={headerClassName}>
        {t(roleKey)}
      </h3>
      <div className={periodClassName}>
        <span className='font-medium'>{t(companyKey)}</span>
        {isDesktop && <span className='hidden sm:inline text-gray-400'>•</span>}
        <span className='text-gray-600'>{t(periodKey)}</span>
      </div>
      <div className='mt-1 mb-3'>
        <span className='text-xs text-gray-500 inline-block'>
          {t(typeKey)}
        </span>
      </div>
    </div>
  );
};