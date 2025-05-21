'use client';

import type React from 'react';
import { GraduationCap } from 'lucide-react';

import { motion } from 'framer-motion';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { educationData } from '../../../utils/education-data';


const EducationSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id='education' className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title={t('education.title')}
          description={t('education.description')}
          icon={<GraduationCap className='h-8 w-8' />}
        />

        <div className='max-w-4xl mx-auto space-y-8'>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={
                'bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100'
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='flex items-start mb-4'>
                <div className='flex-shrink-0 mr-4 md:mr-6'>
                  <div className='p-2 md:p-3 bg-indigo-100 rounded-full'>
                    <GraduationCap size={24} className='text-indigo-600' />
                  </div>
                </div>
                <div className='flex-1'>
                  <h3
                    className={`text-xl md:text-2xl font-semibold mb-1 ${
                      edu.status === 'not_completed'
                        ? 'text-gray-600 italic'
                        : 'text-gray-900'
                    }`}
                  >
                    {t(edu.degreeKey)}{' '}
                    {edu.status === 'not_completed' &&
                      `(${t('education.notCompletedStatus')})`}
                  </h3>
                  <p className='text-md md:text-lg text-indigo-600 mb-1'>
                    {t(edu.institutionKey)}
                  </p>
                  <p className='text-sm text-gray-600 mb-4'>
                    {t(edu.periodKey)}
                  </p>
                  {edu.descriptionKey && (
                    <p className='text-gray-700 leading-relaxed mb-4'>
                      {t(edu.descriptionKey)}
                    </p>
                  )}
                </div>
              </div>
              {edu.courseworkKeys && edu.courseworkKeys.length > 0 && (
                <div className='bg-gray-50 p-4 rounded-lg mb-4'>
                  <h4 className='text-md font-medium text-gray-800 mb-2'>
                    {t(
                      edu.courseworkTitleKey ||
                        'education.graduaat.courseworkTitleDefault' 
                    )}
                  </h4>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-gray-700 text-sm'>
                    {edu.courseworkKeys.map((courseKey, courseIndex) => (
                      <li key={courseIndex}>{t(courseKey)}</li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.noteKey && (
                <p className='text-gray-700 leading-relaxed italic text-sm mt-4'>
                  {t(edu.noteKey)}
                </p>
              )}
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: educationData.length * 0.1 }}
            className='max-w-4xl mx-auto text-center text-gray-700 italic mt-8'
          >
            {t('education.potentialNote')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
