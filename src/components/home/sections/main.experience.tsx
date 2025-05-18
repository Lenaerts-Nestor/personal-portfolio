'use client';

import { experienceData } from '../../../utils/expiriencegroups';
import { useI18n } from '../../shared/i18nContext';
import { motion } from 'framer-motion';
import { Briefcase, Download } from 'lucide-react';
import { SectionHeading } from '../../shared/layout/section-heading';

export const ExperienceSection = () => {
  const { t } = useI18n();

  return (
    <section id='experience' className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title={t('home.experienceTitle')}
          description={t('home.experienceDescription')}
          icon={<Briefcase className='h-8 w-8' />}
        />

        {/* Timeline container */}
        <div className='relative'>
          {/* Timeline vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className='absolute left-3.5 sm:left-4 top-4 bottom-4 w-0.5 bg-indigo-400'
          ></motion.div>

          <div className='space-y-12'>
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.company}
                className='relative group'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Connector line from timeline to card */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '2rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                  className='absolute left-3.5 sm:left-4 top-4 h-0.5 bg-indigo-300'
                ></motion.div>

                {/* Timeline dot with icon */}
                <div className='absolute left-0 top-0 z-10'>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${exp.iconBg} flex items-center justify-center shadow-md border-2 border-white transition-all duration-300 group-hover:scale-110`}
                  >
                    {exp.icon}
                  </div>

                  {/* Pulse effect on hover */}
                  <div
                    className={`absolute inset-0 ${exp.iconBg} opacity-30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out`}
                  ></div>
                </div>

                {/* Content card */}
                <div className='ml-12 sm:ml-16'>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className='bg-white rounded-lg shadow-md p-5 border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-indigo-100'
                  >
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
                      <h3 className='text-lg font-bold text-indigo-700'>
                        {exp.role}
                      </h3>
                      <span className='text-purple-500 font-medium text-sm sm:text-base'>
                        {exp.company}
                      </span>
                    </div>

                    <div className='text-sm text-gray-500 mb-1'>
                      {exp.period}
                    </div>
                    <div className='text-xs text-gray-400 mb-3 inline-block px-2 py-1 bg-gray-100 rounded-full'>
                      {exp.type}
                    </div>

                    <p className='text-gray-700'>{exp.description}</p>

                    {/* Skills tags */}
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {['React', 'TypeScript', 'Node.js'].map((skill, i) => (
                        <span
                          key={i}
                          className='text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Small dot at the end of timeline */}
          <div className='absolute left-3.5 sm:left-4 bottom-0 w-2 h-2 rounded-full bg-indigo-400'></div>
        </div>

        {/* Resume download button */}
        <div className='flex justify-center mt-12'>
          <a
            href='#'
            className='px-6 py-3 bg-white border border-indigo-200 text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 transition-all duration-300 flex items-center'
          >
            <Download className='w-5 h-5 mr-2' />
            <span>{t('experience.downloadResume')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
