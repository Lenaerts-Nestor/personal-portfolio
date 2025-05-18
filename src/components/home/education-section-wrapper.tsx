'use client';

import type React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../shared/i18nContext';
import { SectionHeading } from '../shared/layout/section-heading';

const EducationSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id='education' className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title='Education & Professional Development'
          description='My academic foundation and continuous learning journey in software development'
          icon={<GraduationCap className='h-8 w-8' />}
        />

        <div className='max-w-4xl mx-auto'>
          {/* Graduaat Programmeren - Current Education */}
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
                  Graduaat Programmeren
                </h3>
                <p className='text-lg text-indigo-600 mb-1'>
                  AP Hogeschool Antwerpen
                </p>
                <p className='text-sm text-gray-600 mb-4'>
                  September 2023 - June 2025 (Expected)
                </p>

                <p className='text-gray-700 leading-relaxed mb-4'>
                  Currently completing this practical, industry-focused
                  programming degree that emphasizes hands-on software
                  development skills. The program has provided me with a strong
                  foundation in both frontend and backend technologies, with
                  particular emphasis on modern web development frameworks and
                  practices.
                </p>

                <h4 className='text-lg font-medium text-gray-800 mb-2'>
                  Relevant Coursework
                </h4>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-gray-700 mb-6'>
                  <li>Web Frameworks (React, Node.js)</li>
                  <li>API Development</li>
                  <li>Object-Oriented Programming</li>
                  <li>Database Design & Management</li>
                  <li>Web Development</li>
                  <li>Testing & Security</li>
                  <li>Cloud Systems</li>
                  <li>Workplace Learning (Internship)</li>
                </ul>

                <div className='bg-gray-50 p-4 rounded-lg mb-4'>
                  <h4 className='text-md font-medium text-gray-800 mb-2'>
                    Capstone Project
                  </h4>
                  <p className='text-gray-700 leading-relaxed'>
                    Developed a full-stack timesheet management application
                    (AmoTrack) during my internship at Amotek. Built with React
                    for the frontend and Fastify with PostgreSQL/Drizzle for the
                    backend, the application featured real-time updates,
                    role-based access control, and comprehensive reporting
                    capabilities. This project served as both my internship work
                    and final project for my degree.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bachelor Toegepaste Informatica - Previous Education */}
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
                  <GraduationCap size={32} className='text-purple-600' />
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-gray-600 italic mb-1'>
                  Bachelor Toegepaste Informatica (Not completed)
                </h3>
                <p className='text-lg text-purple-600 mb-1'>
                  AP Hogeschool Antwerpen
                </p>
                <p className='text-sm text-gray-600 mb-4'>
                  September 2020 - June 2022
                </p>

                <p className='text-gray-700 leading-relaxed mb-4'>
                  Studied applied computer science, building a foundational
                  understanding of programming principles and software
                  development. While I did not complete this degree, the
                  knowledge and experience gained during this period
                  significantly contributed to my development as a programmer.
                </p>

                <h4 className='text-lg font-medium text-gray-800 mb-2'>
                  Valuable Coursework
                </h4>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-gray-700 mb-6'>
                  <li>Programming Principles</li>
                  <li>Database Programming</li>
                  <li>Web Programming</li>
                  <li>.NET OOP</li>
                  <li>Data Structures</li>
                  <li>Software Design</li>
                  <li>DevOps Fundamentals</li>
                </ul>

                <p className='text-gray-700 leading-relaxed italic text-sm'>
                  Due to challenging circumstances during the global pandemic, I
                  made the decision to switch to the more practically oriented
                  Graduaat program, which better aligned with my hands-on
                  learning style and career goals in software development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Certifications */}
          <motion.div
            className='bg-white shadow-lg rounded-lg p-8 md:p-12 mt-8 border border-gray-100'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className='flex items-start'>
              <div className='flex-shrink-0 mr-6'>
                <div className='p-3 bg-blue-100 rounded-full'>
                  <Award size={32} className='text-blue-600' />
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Continuous Professional Development
                </h3>

                <p className='text-gray-700 leading-relaxed mb-4'>
                  Beyond formal education, I actively pursue continuous learning
                  through self-study, online courses, and practical projects to
                  stay current with industry trends and technologies.
                </p>

                <div className='space-y-6'>
                  <div>
                    <h4 className='text-lg font-medium text-blue-600 mb-1'>
                      Self-Directed Learning
                    </h4>
                    <p className='text-gray-700'>
                      Regularly engage with documentation, tutorials, and
                      community resources to deepen my understanding of React,
                      Node.js, TypeScript, and database technologies. I believe
                      in learning by doing, so I frequently build small projects
                      to reinforce concepts and explore new technologies.
                    </p>
                  </div>

                  <div>
                    <h4 className='text-lg font-medium text-blue-600 mb-1'>
                      Technical Reading
                    </h4>
                    <p className='text-gray-700'>
                      Study industry-standard books and resources like "Clean
                      Code" by Robert C. Martin and "Don't Make Me Think" by
                      Steve Krug to develop best practices in code quality,
                      maintainability, and user experience design.
                    </p>
                  </div>

                  <div>
                    <h4 className='text-lg font-medium text-blue-600 mb-1'>
                      Practical Application
                    </h4>
                    <p className='text-gray-700'>
                      Apply learning directly through internship work and
                      personal projects, focusing on building full-stack
                      applications with particular emphasis on backend
                      architecture, API design, and database optimization.
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
