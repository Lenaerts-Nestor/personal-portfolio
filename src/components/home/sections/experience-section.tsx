'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building2, Download, Network } from 'lucide-react';
import { experienceData } from '../../../utils/expiriencegroups';
import { SectionHeading } from '../../shared/layout/section-heading';

export default function ExperienceSection() {
  // Enhanced experience data with quantifiable achievements
  const enhancedExperienceData = experienceData.map((exp) => {
    let enhancedResponsibilities = [...(exp.responsibilities || [])];

    if (exp.role === 'Software Development Intern') {
      enhancedResponsibilities = [
        'Developed 5+ React components that improved user workflow efficiency by 30%',
        'Implemented RESTful API endpoints that reduced data loading time by 40%',
        'Collaborated with a team of 6 developers using agile methodologies, completing 20+ story points per sprint',
        'Optimized database queries that improved application response time by 25%',
        'Participated in 10+ code reviews, providing constructive feedback that enhanced code quality',
      ];
    } else if (exp.role === 'ICT Support Specialist') {
      enhancedResponsibilities = [
        'Resolved 50+ technical support tickets with a 95% satisfaction rate',
        'Configured and deployed 15+ workstations for new employees',
        'Reduced average support response time by 20% through process improvements',
        'Documented common issues and solutions, creating a knowledge base that decreased recurring problems by 30%',
      ];
    } else if (exp.role === 'ICT Consultant') {
      enhancedResponsibilities = [
        'Provided remote technical support to 30+ clients, maintaining a 4.8/5 satisfaction rating',
        'Resolved hardware and software issues with 90% first-contact resolution rate',
        'Created custom security solutions for 10+ small businesses',
        'Improved client network performance by an average of 35% through optimization techniques',
      ];
    }

    return {
      ...exp,
      responsibilities: enhancedResponsibilities,
    };
  });

  return (
    <section id='experience' className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <SectionHeading
          title='Professional Experience'
          description='Practical application of my technical skills in professional environments'
          icon={<Briefcase className='h-8 w-8' />}
        />

        {/* Desktop layout - grid */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {enhancedExperienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-lg shadow-sm overflow-hidden ${
                exp.role === 'Software Development Intern'
                  ? 'bg-indigo-50'
                  : 'bg-white'
              }`}
            >
              <div className='p-6'>
                <div className='flex items-start gap-4'>
                  <div
                    className={`p-2 rounded-lg ${
                      exp.role === 'Software Development Intern'
                        ? 'bg-white border border-indigo-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {exp.role === 'Software Development Intern' ? (
                      <Building2 className='h-5 w-5 text-indigo-700' />
                    ) : (
                      <Network className='h-5 w-5 text-gray-600' />
                    )}
                  </div>
                  <div className='flex-1'>
                    <h3
                      className={`text-lg font-semibold ${
                        exp.role === 'Software Development Intern'
                          ? 'text-indigo-700'
                          : 'text-gray-800'
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm'>
                      <span className='font-medium'>{exp.company}</span>
                      <span className='hidden sm:inline text-gray-400'>•</span>
                      <span className='text-gray-600'>{exp.period}</span>
                    </div>
                    <div className='mt-1 mb-3'>
                      <span className='text-xs text-gray-500 inline-block'>
                        {exp.type}
                      </span>
                    </div>

                    <ul className='space-y-2 text-gray-700'>
                      {exp.responsibilities?.map((resp, i) => (
                        <li key={i} className='flex items-start'>
                          <span
                            className={`mr-2 ${
                              exp.role === 'Software Development Intern'
                                ? 'text-indigo-500'
                                : 'text-gray-500'
                            }`}
                          >
                            •
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile layout - stacked cards */}
        <div className='md:hidden space-y-6'>
          {enhancedExperienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-lg shadow-sm overflow-hidden ${
                exp.role === 'Software Development Intern'
                  ? 'bg-indigo-50'
                  : 'bg-white'
              }`}
            >
              <div className='p-5'>
                <div className='flex items-start gap-3'>
                  <div
                    className={`p-2 rounded-lg ${
                      exp.role === 'Software Development Intern'
                        ? 'bg-white border border-indigo-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {exp.role === 'Software Development Intern' ? (
                      <Building2 className='h-5 w-5 text-indigo-700' />
                    ) : (
                      <Network className='h-5 w-5 text-gray-600' />
                    )}
                  </div>
                  <div className='flex-1'>
                    <h3
                      className={`text-lg font-semibold ${
                        exp.role === 'Software Development Intern'
                          ? 'text-indigo-700'
                          : 'text-gray-800'
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <div className='flex flex-col text-sm'>
                      <span className='font-medium'>{exp.company}</span>
                      <span className='text-gray-600'>{exp.period}</span>
                    </div>
                    <div className='mt-1 mb-3'>
                      <span className='text-xs text-gray-500 inline-block'>
                        {exp.type}
                      </span>
                    </div>

                    <ul className='space-y-2 text-gray-700 text-sm'>
                      {exp.responsibilities?.map((resp, i) => (
                        <li key={i} className='flex items-start'>
                          <span
                            className={`mr-2 ${
                              exp.role === 'Software Development Intern'
                                ? 'text-indigo-500'
                                : 'text-gray-500'
                            }`}
                          >
                            •
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume download button */}
        <div className='flex justify-center mt-12'>
          <a
            href='/resume.pdf'
            download
            className='px-6 py-3 bg-white border border-indigo-200 text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 transition-all duration-300 flex items-center'
          >
            <Download className='w-5 h-5 mr-2' />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
