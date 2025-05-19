'use client';

import type React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../shared/i18nContext';
import { SectionHeading } from '../shared/layout/section-heading';

const EducationSectionWrapper: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id='education' className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title='Education & Professional Development'
          description='My academic foundation and continuous learning journey in software development'
          icon={<GraduationCap className='h-8 w-8' />}
        />

        {/* Compact side-by-side layout for education section */}
        <div className='max-w-4xl mx-auto education-content'>
          {/* Graduaat Programmeren - Current Education */}
          <motion.div
            className='bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 education-item'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex items-start'>
              <div className='flex-shrink-0 mr-4'>
                <div className='p-2 bg-indigo-100 rounded-full'>
                  <GraduationCap size={24} className='text-indigo-600' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                  Graduaat Programmeren
                </h3>
                <p className='text-sm text-indigo-600 mb-1'>
                  AP Hogeschool Antwerpen
                </p>
                <p className='text-xs text-gray-600 mb-3'>
                  September 2023 - June 2025 (Expected)
                </p>

                <div className='bg-gray-50 p-3 rounded-lg mb-3'>
                  <h4 className='text-sm font-medium text-gray-800 mb-2'>
                    Key Coursework
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                      Web Frameworks
                    </span>
                    <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                      API Development
                    </span>
                    <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                      OOP
                    </span>
                    <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                      Databases
                    </span>
                  </div>
                </div>

                <p className='text-xs text-gray-700'>
                  Industry-focused programming degree with emphasis on practical
                  web development skills.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bachelor Toegepaste Informatica - Previous Education */}
          <motion.div
            className='bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 education-item'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='flex items-start'>
              <div className='flex-shrink-0 mr-4'>
                <div className='p-2 bg-purple-100 rounded-full'>
                  <GraduationCap size={24} className='text-purple-600' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-600 italic mb-1'>
                  Bachelor Toegepaste Informatica
                  <span className='text-xs ml-1'>(Not completed)</span>
                </h3>
                <p className='text-sm text-purple-600 mb-1'>
                  AP Hogeschool Antwerpen
                </p>
                <p className='text-xs text-gray-600 mb-3'>
                  September 2020 - June 2022
                </p>

                <div className='bg-gray-50 p-3 rounded-lg mb-3'>
                  <h4 className='text-sm font-medium text-gray-800 mb-2'>
                    Valuable Coursework
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    <span className='text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'>
                      Programming Principles
                    </span>
                    <span className='text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'>
                      Database Programming
                    </span>
                    <span className='text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'>
                      Web Programming
                    </span>
                    <span className='text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'>
                      .NET OOP
                    </span>
                  </div>
                </div>

                <p className='text-xs text-gray-700 italic'>
                  Switched to Graduaat program for more hands-on learning
                  approach.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Development */}
          <motion.div
            className='bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 education-item md:col-span-2'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className='flex items-start'>
              <div className='flex-shrink-0 mr-4'>
                <div className='p-2 bg-blue-100 rounded-full'>
                  <Award size={24} className='text-blue-600' />
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Continuous Professional Development
                </h3>

                <div className='grid md:grid-cols-3 gap-4'>
                  <div className='bg-blue-50 p-3 rounded-lg'>
                    <h4 className='text-sm font-medium text-blue-600 mb-1'>
                      Self-Directed Learning
                    </h4>
                    <p className='text-xs text-gray-700'>
                      Regular engagement with documentation, tutorials, and
                      community resources to deepen understanding of React,
                      Node.js, and TypeScript.
                    </p>
                  </div>

                  <div className='bg-blue-50 p-3 rounded-lg'>
                    <h4 className='text-sm font-medium text-blue-600 mb-1'>
                      Technical Reading
                    </h4>
                    <p className='text-xs text-gray-700'>
                      Study of industry-standard books like "Clean Code" and
                      "Don't Make Me Think" for best practices.
                    </p>
                  </div>

                  <div className='bg-blue-50 p-3 rounded-lg'>
                    <h4 className='text-sm font-medium text-blue-600 mb-1'>
                      Practical Application
                    </h4>
                    <p className='text-xs text-gray-700'>
                      Applied learning through internship work and personal
                      projects, focusing on full-stack applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSectionWrapper;
