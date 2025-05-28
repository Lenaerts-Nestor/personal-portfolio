import { memo } from 'react';
import { Download } from 'lucide-react';
import { ScrollIndicator } from './scroll-indicator';
import { useI18n } from '../../../shared/i18nContext';
import type { OverviewSection } from '../../../../interface/intro';

interface OverviewCardProps {
  overviewSections: OverviewSection[];
}

export const OverviewCard = memo(({ overviewSections }: OverviewCardProps) => {
  const { t } = useI18n();

  return (
    <div className='bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='text-xl font-semibold text-gray-800'>
            {t('home.quickOverview')}
          </h2>
          <a
            href={t('about.cvDownloadLink')}
            download
            className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md'
          >
            <Download className='w-4 h-4' />
            <span className='hidden sm:inline'>{t('home.intro.downloadResume')}</span>
            <span className='sm:hidden'>CV</span>
          </a>
        </div>

        <div className='space-y-5'>
          {overviewSections.map((section, index) => (
            <div
              key={index}
              className='flex items-start gap-4 group p-3 rounded-xl'
            >
              <div
                className={`flex-shrink-0 w-12 h-12 ${section.bgColor} rounded-xl flex items-center justify-center ${section.iconColor}`}
              >
                {section.icon}
              </div>
              <div className='flex-1'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-medium text-gray-800'>
                    {section.title}
                  </h3>
                </div>
                <p
                  className='text-gray-500 text-sm mt-1'
                  dangerouslySetInnerHTML={{
                    __html: section.description,
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>

        <ScrollIndicator />
      </div>
    </div>
  );
});

OverviewCard.displayName = 'OverviewCard';