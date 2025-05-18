'use client';

import type React from 'react';
import { GraduationCap, Award } from 'lucide-react';

import { motion } from 'framer-motion';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';

const EducationSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id='education' className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <SectionHeading
          title='Education & Certifications'
          description='My academic background and professional development'
          icon={<GraduationCap className='h-8 w-8' />}
        />

        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='bg-white shadow-lg rounded-lg p-8 md:p-12 mb-8 border border-gray-100'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex items-start'>
              <div className='flex-shrink-0 mr-6'>
                <div className='p-3 bg-indigo-100 rounded-full'>
                  <GraduationCap size={32} className='text-indigo-600' />
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-1'>
                  Bachelor of Applied Computer Science
                </h3>
                <p className='text-lg text-indigo-600 mb-1'>
                  AP University College Antwerp
                </p>
                <p className='text-sm text-gray-600 mb-4'>
                  September 2021 - June 2024
                </p>

                <h4 className='text-lg font-medium text-gray-800 mb-2'>
                  Key Coursework
                </h4>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-gray-700 mb-6'>
                  <li>Advanced Web Development</li>
                  <li>Database Design & Management</li>
                  <li>Software Engineering Principles</li>
                  <li>Full-Stack Development</li>
                  <li>Mobile Application Development</li>
                  <li>Agile Project Management</li>
                  <li>Cloud Computing & DevOps</li>
                  <li>UI/UX Design Fundamentals</li>
                </ul>

                <div className='bg-gray-50 p-4 rounded-lg mb-4'>
                  <h4 className='text-md font-medium text-gray-800 mb-2'>
                    Final Project
                  </h4>
                  <p className='text-gray-700 leading-relaxed'>
                    Developed a full-stack timesheet management application
                    using React, Fastify, and PostgreSQL. The application
                    featured real-time updates, role-based access control, and
                    comprehensive reporting capabilities.
                  </p>
                </div>

                <p className='text-gray-700 leading-relaxed'>
                  My education provided a strong foundation in both theoretical
                  computer science concepts and practical application
                  development skills, with a focus on modern web technologies
                  and software engineering practices.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className='bg-white shadow-lg rounded-lg p-8 md:p-12 border border-gray-100'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='flex items-start'>
              <div className='flex-shrink-0 mr-6'>
                <div className='p-3 bg-purple-100 rounded-full'>
                  <Award size={32} className='text-purple-600' />
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Professional Certifications
                </h3>

                <div className='space-y-6'>
                  <div>
                    <h4 className='text-lg font-medium text-purple-600 mb-1'>
                      Web Development Fundamentals
                    </h4>
                    <p className='text-sm text-gray-600 mb-2'>
                      freeCodeCamp • Completed March 2023
                    </p>
                    <p className='text-gray-700'>
                      Comprehensive certification covering HTML, CSS,
                      JavaScript, and responsive web design principles.
                    </p>
                  </div>

                  <div>
                    <h4 className='text-lg font-medium text-purple-600 mb-1'>
                      JavaScript Algorithms and Data Structures
                    </h4>
                    <p className='text-sm text-gray-600 mb-2'>
                      freeCodeCamp • Completed May 2023
                    </p>
                    <p className='text-gray-700'>
                      Advanced JavaScript concepts including functional
                      programming, object-oriented programming, and algorithm
                      implementation.
                    </p>
                  </div>

                  <div>
                    <h4 className='text-lg font-medium text-purple-600 mb-1'>
                      React Development
                    </h4>
                    <p className='text-sm text-gray-600 mb-2'>
                      Udemy • Completed November 2023
                    </p>
                    <p className='text-gray-700'>
                      Comprehensive React course covering components, hooks,
                      state management, and integration with backend services.
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

export default EducationSection;
