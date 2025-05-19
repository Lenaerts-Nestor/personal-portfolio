'use client';

import type React from 'react';
import { IoHardwareChip } from 'react-icons/io5';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Download,
  Wrench,
  HelpCircle,
} from 'lucide-react';
import {
  SiReact,
  SiPostgresql,
  SiFastify,
  SiTypescript,
  SiTailwindcss,
  SiDrizzle,
  SiStorybook,
  SiNodedotjs,
  SiStyledcomponents,
  SiMacos,
  SiPinetwork,
  SiGitforwindows,
} from 'react-icons/si';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';
import { FaApple, FaNetworkWired, FaWindows } from 'react-icons/fa';

// Define the experience data structure
interface Experience {
  roleKey: string;
  companyKey: string;
  periodKey: string;
  typeKey: string;
  descriptionKey?: string;
  responsibilitiesKeys: string[];
  technologies?: { name: string; icon: React.ReactNode }[];
  featured: boolean;
}

export default function ExperienceSection() {
  const { t } = useI18n();

  // Experience data using translation keys
  const experienceData: Experience[] = [
    {
      roleKey: 'experience.roles.softwareDeveloperIntern',
      companyKey: 'experience.companies.amotek',
      periodKey: 'experience.periods.amotekInternship',
      typeKey: 'experience.types.internship',
      descriptionKey: 'experience.descriptions.amotekInternship',
      responsibilitiesKeys: [
        'experience.responsibilities.amotekInternship.0',
        'experience.responsibilities.amotekInternship.1',
        'experience.responsibilities.amotekInternship.2',
        'experience.responsibilities.amotekInternship.3',
      ],
      technologies: [
        { name: 'React', icon: <SiReact className='text-blue-500' /> },
        {
          name: 'TypeScript',
          icon: <SiTypescript className='text-blue-600' />,
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql className='text-blue-700' />,
        },
        { name: 'Fastify', icon: <SiFastify className='text-gray-800' /> },
        { name: 'Storybook', icon: <SiStorybook className='text-pink-500' /> },
        { name: 'Node.js', icon: <SiNodedotjs className='text-green-600' /> },
        {
          name: 'Styled-components',
          icon: <SiStyledcomponents className='text-pink-500' />,
        },
        { name: 'Drizzle ORM', icon: <SiDrizzle className='text-amber-500' /> },
      ],
      featured: true,
    },
    {
      roleKey: 'experience.roles.itSupportSpecialist',
      companyKey: 'experience.companies.beego',
      periodKey: 'experience.periods.beegoStudentJob',
      typeKey: 'experience.types.studentJob',
      descriptionKey: 'experience.descriptions.beegoStudentJob',
      responsibilitiesKeys: [
        'experience.responsibilities.beegoStudentJob.0',
        'experience.responsibilities.beegoStudentJob.1',
        'experience.responsibilities.beegoStudentJob.2',
        'experience.responsibilities.beegoStudentJob.3',
      ],
      technologies: [
        {
          name: 'Windows',
          icon: <FaWindows className='text-blue-500' />,
        },
        { name: 'macOS', icon: <FaApple className='text-gray-700' /> },
        {
          name: 'Networking',
          icon: <FaNetworkWired className='text-gray-500' />,
        },
      ],
      featured: false,
    },
    {
      roleKey: 'experience.roles.ictSupportSpecialist',
      companyKey: 'experience.companies.techSupportCo',
      periodKey: 'experience.periods.techSupportCoStudentJob',
      typeKey: 'experience.types.studentJob',
      descriptionKey: 'experience.descriptions.techSupportCoStudentJob',
      responsibilitiesKeys: [
        'experience.responsibilities.techSupportCoStudentJob.0',
        'experience.responsibilities.techSupportCoStudentJob.1',
        'experience.responsibilities.techSupportCoStudentJob.2',
        'experience.responsibilities.techSupportCoStudentJob.3',
      ],
      technologies: [
        {
          name: 'Hardware',
          icon: <IoHardwareChip className='text-orange-500' />,
        },
        {
          name: 'Networking',
          icon: <FaNetworkWired className='text-gray-500' />,
        },
        {
          name: 'Windows',
          icon: <FaWindows className='text-blue-500' />,
        },
      ],
      featured: false,
    },
  ];

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

        {/* Resume download button */}
        <div className='flex justify-center mt-12'>
          <a
            href={t('about.cvDownloadLink')}
            download
            className='px-6 py-3 bg-white border border-indigo-200 text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 transition-all duration-300 flex items-center'
          >
            <Download className='w-5 h-5 mr-2' />
            <span>{t('experience.downloadResume')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
