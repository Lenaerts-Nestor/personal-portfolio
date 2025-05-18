'use client';

import type React from 'react';
import { GraduationCap } from 'lucide-react';

import { motion } from 'framer-motion';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';

interface EducationEntry {
  degreeKey: string;
  institutionKey: string;
  periodKey: string;
  status?: 'completed' | 'in_progress' | 'not_completed';
  descriptionKey?: string;
  courseworkTitleKey?: string;
  courseworkKeys?: string[];
  noteKey?: string;
}

const educationData: EducationEntry[] = [
  {
    degreeKey: 'about.education.graduaat.degree',
    institutionKey: 'about.education.institution',
    periodKey: 'about.education.graduaat.period',
    status: 'in_progress',
    courseworkTitleKey: 'about.education.courseworkTitle',
    courseworkKeys: [
      'about.education.graduaat.coursework.itEssentials',
      'about.education.graduaat.coursework.projectSkills',
      'about.education.graduaat.coursework.basicProgramming',
      'about.education.graduaat.coursework.databases',
      'about.education.graduaat.coursework.cloudSystems',
      'about.education.graduaat.coursework.ooProgramming',
      'about.education.graduaat.coursework.webDevelopment',
      'about.education.graduaat.coursework.webTechnology',
      'about.education.graduaat.coursework.wplExploration',
      'about.education.graduaat.coursework.wplProject',
      'about.education.graduaat.coursework.proWorkplaces',
      'about.education.graduaat.coursework.webFrameworks',
      'about.education.graduaat.coursework.apiDevelopment',
      'about.education.graduaat.coursework.testingSecurity',
      'about.education.graduaat.coursework.wplCase',
    ],
    descriptionKey: 'about.education.graduaat.description',
  },
  {
    degreeKey: 'about.education.bachelor.degree',
    institutionKey: 'about.education.institution',
    periodKey: 'about.education.bachelor.period',
    status: 'not_completed',
    courseworkTitleKey: 'about.education.courseworkTitle',
    courseworkKeys: [
      'about.education.bachelor.coursework.programmingPrinciples',
      'about.education.bachelor.coursework.databases',
      'about.education.bachelor.coursework.webTechnology',
      'about.education.bachelor.coursework.dataNetworks',
      'about.education.bachelor.coursework.linux',
      'about.education.bachelor.coursework.digitalFundamentals',
      'about.education.bachelor.coursework.businessProcesses',
      'about.education.bachelor.coursework.iotExperiments',
      'about.education.bachelor.coursework.webProgramming',
      'about.education.bachelor.coursework.discoverIT',
      'about.education.bachelor.coursework.analysis',
      'about.education.bachelor.coursework.communication',
      'about.education.bachelor.coursework.cyberSecurity',
      'about.education.bachelor.coursework.dataStructures',
      'about.education.bachelor.coursework.databaseProgramming',
      'about.education.bachelor.coursework.routingSwitching',
      'about.education.bachelor.coursework.netOOP',
      'about.education.bachelor.coursework.softwareDesign',
      'about.education.bachelor.coursework.uxDesign',
      'about.education.bachelor.coursework.introMobile',
      'about.education.bachelor.coursework.devOps',
    ],
    descriptionKey: 'about.education.bachelor.description',
    noteKey: 'about.education.bachelor.note',
  },
];

const EducationSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id='education' className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title={t('about.education.title')}
          description={t('home.educationDescription')}
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
                      `(${t('about.education.notCompletedStatus')})`}
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
                        'about.education.courseworkTitleDefault'
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
            {t('about.education.potentialNote')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
