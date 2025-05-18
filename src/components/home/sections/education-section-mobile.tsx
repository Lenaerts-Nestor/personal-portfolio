'use client';

import type React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';

const EducationSectionMobile: React.FC = () => {
  const { t } = useI18n();

  return (
    <section
      id='education-mobile'
      className='py-16 md:py-24 bg-white md:hidden'
    >
      <div className='container mx-auto px-4'>
        <SectionHeading
          title='Education & Professional Development'
          description='My academic foundation and continuous learning journey'
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
                  Graduaat Programmeren
                </h3>
                <p className='text-sm text-indigo-600'>
                  AP Hogeschool Antwerpen
                </p>
                <p className='text-xs text-gray-600'>
                  Sep 2023 - Jun 2025 (Expected)
                </p>
              </div>
            </div>

            <p className='text-sm text-gray-700 mb-4'>
              Practical, industry-focused programming degree emphasizing
              hands-on software development skills with focus on modern web
              technologies.
            </p>

            <div className='mb-4 bg-gray-50 p-3 rounded-lg'>
              <h4 className='text-sm font-medium text-gray-800 mb-2'>
                Key Focus Areas
              </h4>
              <div className='flex flex-wrap gap-2'>
                <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                  Web Frameworks
                </span>
                <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                  API Development
                </span>
                <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                  OO Programming
                </span>
                <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                  Databases
                </span>
                <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                  Testing & Security
                </span>
                <span className='text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full'>
                  Cloud Systems
                </span>
              </div>
            </div>

            <div className='mb-4'>
              <h4 className='text-sm font-medium text-gray-800 mb-2 flex items-center'>
                <span className='w-2 h-2 bg-indigo-500 rounded-full mr-2'></span>
                Capstone Project
              </h4>
              <p className='text-sm text-gray-700'>
                Full-stack timesheet application (AmoTrack) built with React,
                Fastify, and PostgreSQL during internship at Amotek.
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
                  Bachelor Toegepaste Informatica
                  <span className='text-xs ml-1'>(Not completed)</span>
                </h3>
                <p className='text-sm text-purple-600'>
                  AP Hogeschool Antwerpen
                </p>
                <p className='text-xs text-gray-600'>Sep 2020 - Jun 2022</p>
              </div>
            </div>

            <div className='mb-4 bg-gray-50 p-3 rounded-lg'>
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
                <span className='text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'>
                  Software Design
                </span>
              </div>
            </div>

            <p className='text-xs text-gray-700 italic'>
              Switched to the more practically oriented Graduaat program, which
              better aligned with my hands-on learning style and career goals.
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
                Continuous Learning
              </h3>
            </div>

            <div className='space-y-4'>
              <div className='bg-blue-50 p-3 rounded-lg'>
                <h4 className='text-sm font-medium text-blue-600'>
                  Self-Directed Learning
                </h4>
                <p className='text-xs text-gray-700'>
                  Regular engagement with documentation, tutorials, and
                  community resources for React, Node.js, TypeScript, and
                  databases.
                </p>
              </div>

              <div className='bg-blue-50 p-3 rounded-lg'>
                <h4 className='text-sm font-medium text-blue-600'>
                  Technical Reading
                </h4>
                <p className='text-xs text-gray-700'>
                  Study of industry-standard resources like "Clean Code" and
                  "Don't Make Me Think" for best practices.
                </p>
              </div>

              <div className='bg-blue-50 p-3 rounded-lg'>
                <h4 className='text-sm font-medium text-blue-600'>
                  Practical Application
                </h4>
                <p className='text-xs text-gray-700'>
                  Applied learning through internship work and personal
                  projects, focusing on full-stack applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSectionMobile;
