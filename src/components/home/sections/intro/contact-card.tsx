import { Info, Mail, Phone, Github, Linkedin, MapPin, Clock, Car, Building2, Languages, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  t: (key: string) => string;
  fadeIn: any;
}

export const ContactCard = ({ t, fadeIn }: ContactCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className='mt-6 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden'
    >
      {/* Contact Header */}
      <div className='flex items-center gap-2 p-4 border-b border-gray-100 bg-gray-50'>
        <Info className='w-5 h-5 text-indigo-600' />
        <h3 className='text-sm font-medium text-indigo-600'>
          {t('home.intro.contactDetails')}
        </h3>
      </div>

      <div className='p-4'>
        {/* Contact Methods - First group */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4'>
          <a
            href={`mailto:${t('home.intro.email')}`}
            className='flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200'
          >
            <Mail className='w-4 h-4 flex-shrink-0' />
            <span className='text-sm truncate'>
              {t('home.intro.email')}
            </span>
          </a>
          <a
            href={`tel:${t('home.intro.phone')}`}
            className='flex items-center gap-2 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200'
          >
            <Phone className='w-4 h-4 flex-shrink-0' />
            <span className='text-sm truncate'>
              {t('home.intro.phone')}
            </span>
          </a>
          <a
            href={`https://${t('home.intro.githubUsername')}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200'
          >
            <Github className='w-4 h-4 flex-shrink-0' />
            <span className='text-sm truncate'>
              {t('home.intro.githubUsername')}
            </span>
          </a>
          <a
            href={`https://${t('home.intro.linkedinUsername')}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-3 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors duration-200'
          >
            <Linkedin className='w-4 h-4 flex-shrink-0' />
            <span className='text-sm truncate'>
              {t('home.intro.linkedinUsername')}
            </span>
          </a>
        </div>

        {/* Personal Details - Second group with visual separation */}
        <div className='pt-3 border-t border-gray-100'>
          <div className='flex flex-wrap gap-2'>
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-medium'>
              <MapPin className='w-3.5 h-3.5' />
              <span>{t('home.intro.antwerpenRegion')}</span>
            </span>
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-medium'>
              <Clock className='w-3.5 h-3.5' />
              <span>{t('home.intro.availableImmediately')}</span>
            </span>
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full text-xs font-medium'>
              <Car className='w-3.5 h-3.5' />
              <span>{t('home.hasCar')}</span>
            </span>
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-medium'>
              <Building2 className='w-3.5 h-3.5' />
              <span>{t('home.officeReady')}</span>
            </span>
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium'>
              <Languages className='w-3.5 h-3.5' />
              <span>{t('home.intro.languages')}</span>
            </span>

            {/* Position badges integrated into personal details for better mobile display */}
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium md:hidden'>
              <Briefcase className='w-3.5 h-3.5' />
              <span>{t('home.intro.juniorFullStack')}</span>
            </span>
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium md:hidden'>
              <Code className='w-3.5 h-3.5' />
              <span>{t('home.intro.juniorBackend')}</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};