'use client';

import type React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../shared/i18nContext';
import { SectionHeading } from '../shared/layout/section-heading';

const EducationSectionMobile: React.FC = () => {
  const { t } = useI18n();

  return (
    <section
      id='education-mobile'
      className='py-16 md:py-24 bg-white md:hidden'
    >
      <div className='container mx-auto px-4'>
        <SectionHeading
          title={t('education.mobile.title')}
          description={t('education.mobile.description')}
          icon={<GraduationCap className='h-8 w-8' />}
        />

        <div className='space-y-6 mt-8'>
          {/* Graduaat Programmeren - Current Education */}
          <motion.div
            className='bg-white shadow-lg rounded-lg p-6 border border-gray-100'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex items-center mb-4'>
              <div className='p-2 bg-indigo-100 rounded-full mr-3'>
                <GraduationCap size={24} className='text-indigo-600' />
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  {t('education.mobile.graduaatTitle')}
                </h3>
                <p className='text-sm text-indigo-600'>
                  {t('education.mobile.graduaatInstitution')}
                </p>
                <p className='text-xs text-gray-600'>
                  {t('education.mobile.graduaatPeriod')}
                </p>
              </div>
            </div>

            <p className='text-sm text-gray-700 mb-4'>
              {t('education.mobile.graduaatDescription')}
            </p>

            <div className='mb-4 bg-gray-50 p-3 rounded-lg'>
              <h4 className='text-sm font-medium text-gray-800 mb-2'>
                {t('education.mobile.graduaatFocusTitle')}
              </h4>
              <div className='flex flex-wrap gap-2'>
                {(t('education.mobile.graduaatFocusAreas') as string[]).map(
                  (area, i) => (
                    <span
                      key={i}
                      className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className='mb-4'>
              <h4 className='text-sm font-medium text-gray-800 mb-2 flex items-center'>
                <span className='w-2 h-2 bg-indigo-500 rounded-full mr-2'></span>
                {t('education.mobile.graduaatCapstoneTitle')}
              </h4>
              <p className='text-sm text-gray-700'>
                {t('education.mobile.graduaatCapstoneDescription')}
              </p>
            </div>
          </motion.div>

          {/* Bachelor Toegepaste Informatica - Previous Education */}
          <motion.div
            className='bg-white shadow-lg rounded-lg p-6 border border-gray-100'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='flex items-center mb-4'>
              <div className='p-2 bg-purple-100 rounded-full mr-3'>
                <GraduationCap size={24} className='text-purple-600' />
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-600 italic'>
                  {t('education.mobile.bachelorTitle')}
                  <span className='text-xs ml-1'>
                    {t('education.mobile.bachelorNotCompleted')}
                  </span>
                </h3>
                <p className='text-sm text-purple-600'>
                  {t('education.mobile.bachelorInstitution')}
                </p>
                <p className='text-xs text-gray-600'>
                  {t('education.mobile.bachelorPeriod')}
                </p>
              </div>
            </div>

            <div className='mb-4 bg-gray-50 p-3 rounded-lg'>
              <h4 className='text-sm font-medium text-gray-800 mb-2'>
                {t('education.mobile.bachelorCourseworkTitle')}
              </h4>
              <div className='flex flex-wrap gap-2'>
                {(t('education.mobile.bachelorCoursework') as string[]).map(
                  (course, i) => (
                    <span
                      key={i}
                      className='text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'
                    >
                      {course}
                    </span>
                  )
                )}
              </div>
            </div>

            <p className='text-xs text-gray-700 italic'>
              {t('education.mobile.bachelorSwitchNote')}
            </p>
          </motion.div>

          {/* Professional Development */}
          <motion.div
            className='bg-white shadow-lg rounded-lg p-6 border border-gray-100'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className='flex items-center mb-4'>
              <div className='p-2 bg-blue-100 rounded-full mr-3'>
                <Award size={24} className='text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900'>
                {t('education.mobile.profDevTitle')}
              </h3>
            </div>

            <div className='space-y-4'>
              {(
                t('education.mobile.profDevItems') as {
                  title: string;
                  description: string;
                }[]
              ).map((item, i) => (
                <div key={i} className='bg-blue-50 p-3 rounded-lg'>
                  <h4 className='text-sm font-medium text-blue-600'>
                    {item.title}
                  </h4>
                  <p className='text-xs text-gray-700'>{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSectionMobile;
