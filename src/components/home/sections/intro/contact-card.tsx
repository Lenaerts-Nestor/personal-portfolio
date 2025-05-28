import { Info, Mail, Phone, Github, Linkedin, MapPin, Clock, Car, Building2, Languages, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { useI18n } from '../../../shared/i18nContext';
import { fadeIn } from '../../../../interface/intro';

const contactItems = [
  { 
    key: 'email', 
    icon: Mail, 
    color: 'blue', 
    href: (value: string) => `mailto:${value}`,
    ariaLabel: 'Send email'
  },
  { 
    key: 'phone', 
    icon: Phone, 
    color: 'green', 
    href: (value: string) => `tel:${value}`,
    ariaLabel: 'Call phone number'
  },
  { 
    key: 'githubUsername', 
    icon: Github, 
    color: 'gray', 
    href: (value: string) => `https://${value}`,
    target: '_blank',
    ariaLabel: 'View GitHub profile'
  },
  { 
    key: 'linkedinUsername', 
    icon: Linkedin, 
    color: 'sky', 
    href: (value: string) => `https://${value}`,
    target: '_blank',
    ariaLabel: 'View LinkedIn profile'
  },
];

const statusBadges = [
  { key: 'antwerpenRegion', icon: MapPin, color: 'purple' },
  { key: 'availableImmediately', icon: Clock, color: 'green' },
  { key: 'hasCar', icon: Car, color: 'amber' },
  { key: 'officeReady', icon: Building2, color: 'rose' },
  { key: 'languages', icon: Languages, color: 'indigo' },
];

const mobileBadges = [
  { key: 'juniorFullStack', icon: Briefcase, color: 'indigo' },
  { key: 'juniorBackend', icon: Code, color: 'blue' },
];

export const ContactCard = memo(() => {
  const { t } = useI18n();

  const getContactItemClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: 'bg-green-50 text-green-600 hover:bg-green-100',
      gray: 'bg-gray-50 text-gray-600 hover:bg-gray-100',
      sky: 'bg-sky-50 text-sky-600 hover:bg-sky-100',
    };
    return `group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${colorMap[color as keyof typeof colorMap]}`;
  };

  const getBadgeClasses = (color: string, variant: 'status' | 'mobile' = 'status') => {
    const baseClasses = 'inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-colors duration-200';
    const colorMap = {
      purple: variant === 'status' ? 'bg-purple-50 text-purple-600 hover:bg-purple-100' : 'bg-purple-100 text-purple-700 hover:bg-purple-200',
      green: variant === 'status' ? 'bg-green-50 text-green-600 hover:bg-green-100' : 'bg-green-100 text-green-700 hover:bg-green-200',
      amber: variant === 'status' ? 'bg-amber-50 text-amber-600 hover:bg-amber-100' : 'bg-amber-100 text-amber-700 hover:bg-amber-200',
      rose: variant === 'status' ? 'bg-rose-50 text-rose-600 hover:bg-rose-100' : 'bg-rose-100 text-rose-700 hover:bg-rose-200',
      indigo: variant === 'status' ? 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
      blue: variant === 'status' ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    };
    return `${baseClasses} ${colorMap[color as keyof typeof colorMap]}`;
  };
  return (
    <motion.div
      variants={fadeIn}
      className='bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm flex flex-col lg:max-h-[50vh]'
    >      {/* Header */}
      <div className='flex items-center gap-3 p-4 lg:p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex-shrink-0'>
        <div className='p-2 bg-indigo-100 rounded-lg'>
          <Info className='w-5 h-5 text-indigo-600' />
        </div>
        <h3 className='text-base font-semibold text-gray-800'>
          {t('home.intro.contactDetails')}
        </h3>
      </div>

      <div className='p-4 lg:p-5 space-y-4 lg:space-y-5 flex-1 lg:overflow-y-auto'>
        {/* Contact Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {contactItems.map(({ key, icon: Icon, color, href, target, ariaLabel }) => (
            <a
              key={key}
              href={href(t(`home.intro.${key}`))}
              {...(target && { target, rel: 'noopener noreferrer' })}
              className={getContactItemClasses(color)}
              aria-label={ariaLabel}
            >
              <Icon className='w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200' />
              <span className='text-sm font-medium truncate'>
                {t(`home.intro.${key}`)}
              </span>
            </a>
          ))}
        </div>

        {/* Status Badges */}
        <div className='pt-4 border-t border-gray-100'>
          <div className='flex flex-wrap gap-2'>
            {statusBadges.map(({ key, icon: Icon, color }) => {
              const translationKey = key === 'hasCar' || key === 'officeReady' ? `home.${key}` : `home.intro.${key}`;
              return (
                <span
                  key={key}
                  className={getBadgeClasses(color)}
                >
                  <Icon className='w-3.5 h-3.5' />
                  <span>{t(translationKey)}</span>
                </span>
              );
            })}

            {/* Mobile-only position badges */}
            {mobileBadges.map(({ key, icon: Icon, color }) => (
              <span
                key={key}
                className={`${getBadgeClasses(color, 'mobile')} md:hidden`}
              >
                <Icon className='w-3.5 h-3.5' />
                <span>{t(`home.intro.${key}`)}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ContactCard.displayName = 'ContactCard';