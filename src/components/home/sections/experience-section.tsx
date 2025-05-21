
import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Wrench,
  HelpCircle,
} from 'lucide-react';

import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { experienceData } from '../../../utils/experience-data';



export default function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section id='experience' className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title={t('home.experienceTitle')}
          description={t('home.experienceDescription')}
          icon={<Briefcase className='h-8 w-8' />}
        />

        {/* Desktop layout - grid */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.companyKey} // Use key from translation data if possible, company name might be too generic
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
                  <div
                    className={`p-2 rounded-lg ${
                      exp.featured
                        ? 'bg-white border border-indigo-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {/* Consider mapping role keys to icons in a separate object */}
                    {exp.roleKey ===
                    'experience.roles.softwareDeveloperIntern' ? (
                      <Building2 className='h-5 w-5 text-indigo-700' />
                    ) : exp.roleKey ===
                        'experience.roles.itSupportSpecialist' ||
                      exp.roleKey ===
                        'experience.roles.ictSupportSpecialist' ? (
                      <HelpCircle className='h-5 w-5 text-gray-600' />
                    ) : (
                      <Wrench className='h-5 w-5 text-gray-600' />
                    )}
                  </div>
                  <div className='flex-1'>
                    <h3
                      className={`text-lg font-semibold ${
                        exp.featured ? 'text-indigo-700' : 'text-gray-800'
                      }`}
                    >
                      {t(exp.roleKey)}
                    </h3>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm'>
                      <span className='font-medium'>{t(exp.companyKey)}</span>
                      <span className='hidden sm:inline text-gray-400'>•</span>
                      <span className='text-gray-600'>{t(exp.periodKey)}</span>
                    </div>
                    <div className='mt-1 mb-3'>
                      <span className='text-xs text-gray-500 inline-block'>
                        {t(exp.typeKey)}
                      </span>
                    </div>
                  </div>
                </div>

                {exp.descriptionKey && (
                  <p className='text-gray-700 mb-3 text-sm'>
                    {t(exp.descriptionKey)}
                  </p>
                )}

                <ul className='space-y-2 text-gray-700 text-sm flex-grow'>
                  {exp.responsibilitiesKeys?.map((respKey, i) => (
                    <li key={i} className='flex items-start'>
                      <span
                        className={`mr-2 ${
                          exp.featured ? 'text-indigo-500' : 'text-gray-500'
                        }`}
                      >
                        •
                      </span>
                      <span>{t(respKey)}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className='mt-4 pt-4 border-t border-gray-200'>
                    <h4 className='text-xs font-medium text-gray-500 mb-2'>
                      {t('experience.technologiesUsed')}
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i} // Consider a unique key for each technology if possible
                          className='flex items-center bg-white px-2 py-1 rounded-full text-xs font-medium border border-gray-200 shadow-sm'
                        >
                          <span className='mr-1'>{tech.icon}</span>
                          {tech.name}{' '}
                          {/* Technology names are often not translated */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile layout - stacked cards */}
        <div className='md:hidden space-y-6'>
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.companyKey} // Use key from translation data if possible
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-lg shadow-sm overflow-hidden ${
                exp.featured
                  ? 'bg-indigo-50 border border-indigo-100'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className='p-5'>
                <div className='flex items-start gap-3'>
                  <div
                    className={`p-2 rounded-lg ${
                      exp.featured
                        ? 'bg-white border border-indigo-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {/* Consider mapping role keys to icons */}
                    {exp.roleKey ===
                    'experience.roles.softwareDeveloperIntern' ? (
                      <Building2 className='h-5 w-5 text-indigo-700' />
                    ) : exp.roleKey ===
                        'experience.roles.itSupportSpecialist' ||
                      exp.roleKey ===
                        'experience.roles.ictSupportSpecialist' ? (
                      <HelpCircle className='h-5 w-5 text-gray-600' />
                    ) : (
                      <Wrench className='h-5 w-5 text-gray-600' />
                    )}
                  </div>
                  <div className='flex-1'>
                    <h3
                      className={`text-lg font-semibold ${
                        exp.featured ? 'text-indigo-700' : 'text-gray-800'
                      }`}
                    >
                      {t(exp.roleKey)}
                    </h3>
                    <div className='flex flex-col text-sm'>
                      <span className='font-medium'>{t(exp.companyKey)}</span>
                      <span className='text-gray-600'>{t(exp.periodKey)}</span>
                    </div>
                    <div className='mt-1 mb-3'>
                      <span className='text-xs text-gray-500 inline-block'>
                        {t(exp.typeKey)}
                      </span>
                    </div>
                  </div>
                </div>

                {exp.descriptionKey && (
                  <p className='text-gray-700 mb-3 text-sm'>
                    {t(exp.descriptionKey)}
                  </p>
                )}

                <ul className='space-y-2 text-gray-700 text-sm'>
                  {exp.responsibilitiesKeys?.map((respKey, i) => (
                    <li key={i} className='flex items-start'>
                      <span
                        className={`mr-2 ${
                          exp.featured ? 'text-indigo-500' : 'text-gray-500'
                        }`}
                      >
                        •
                      </span>
                      <span>{t(respKey)}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className='mt-4 pt-4 border-t border-gray-200'>
                    <h4 className='text-xs font-medium text-gray-500 mb-2'>
                      {t('experience.technologiesUsed')}
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i} // Consider a unique key for each technology if possible
                          className='flex items-center bg-white px-2 py-1 rounded-full text-xs font-medium border border-gray-200 shadow-sm'
                        >
                          <span className='mr-1'>{tech.icon}</span>
                          {tech.name}{' '}
                          {/* Technology names are often not translated */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
