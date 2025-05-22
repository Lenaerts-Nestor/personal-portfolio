import type { OverviewCardProps } from '../../../../interface/intro';
import { ScrollIndicator } from './scroll-indicator';


export const OverviewCard = ({ t, overviewSections }: OverviewCardProps) => {
  return (
    <div className='bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
      <div className='p-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-5'>
          {t('home.quickOverview')}
        </h2>

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

        <ScrollIndicator t={t} />
      </div>
    </div>
  );
};