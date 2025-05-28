import { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../../../shared/i18nContext';

export const ScrollIndicator = memo(() => {
  const { t } = useI18n();

  return (
    <div className='flex justify-center mt-6 text-gray-400'>
      <a
        href='#technologies'
        className='flex flex-col items-center hover:text-indigo-500 transition-colors duration-200 group'
        onClick={(e) => {
          e.preventDefault();
          const technologiesSection =
            document.getElementById('technologies');
          if (technologiesSection) {
            technologiesSection.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }}
      >
        <span className='text-xs mb-1 group-hover:text-indigo-500'>
          {t('home.scrollDown')}
        </span>
        <ChevronDown className='w-5 h-5 animate-bounce group-hover:text-indigo-500' />
      </a>
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';