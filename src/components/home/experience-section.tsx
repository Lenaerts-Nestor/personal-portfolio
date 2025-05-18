'use client';

import type React from 'react';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Download,
  Wrench,
  HelpCircle,
} from 'lucide-react';
import { SectionHeading } from '../shared/layout/section-heading';
import {
  SiReact,
  SiPostgresql,
  SiFastify,
  SiTypescript,
  SiTailwindcss,
  SiDrizzle,
} from 'react-icons/si';

// Define the experience data structure
interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  description?: string;
  responsibilities: string[];
  technologies?: { name: string; icon: React.ReactNode }[];
  featured: boolean;
}

export default function ExperienceSection() {
  // Experience data with the requested content
  const experienceData: Experience[] = [
    {
      role: 'Software Development Intern',
      company: 'Amotek',
      period: 'Feb 2024 - Jun 2024',
      type: 'Internship',
      description:
        'Worked on the AmoTrack project, building a full-stack application that the company now uses internally and is ready for client deployment.',
      responsibilities: [
        'Developed frontend components with React and TypeScript, creating a well-structured user interface',
        'Implemented RESTful API endpoints using Fastify for backend development',
        'Created database schemas and queries with PostgreSQL and Drizzle ORM',
        'Worked primarily independently, occasionally collaborating with colleagues for guidance',
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
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className='text-teal-500' />,
        },
        { name: 'Drizzle ORM', icon: <SiDrizzle className='text-amber-500' /> },
      ],
      featured: true,
    },
    {
      role: 'IT Support Specialist',
      company: 'Beego',
      period: 'Jun 2023 - Dec 2023',
      type: 'Student Job',
      description:
        'Provided on-site technical support to customers in their homes.',
      responsibilities: [
        "Visited customers' homes to resolve various technical issues with computers and devices",
        'Provided clear explanations on safe internet navigation and cybersecurity best practices',
        'Assisted elderly and non-technical users with setting up and troubleshooting their devices',
        "Documented solutions for common problems to improve the company's knowledge base",
      ],
      technologies: [
        {
          name: 'Windows',
          icon: <span className='i-mdi-microsoft-windows text-blue-500' />,
        },
        { name: 'macOS', icon: <span className='i-mdi-apple text-gray-700' /> },
        {
          name: 'Networking',
          icon: <span className='i-mdi-lan text-green-600' />,
        },
      ],
      featured: false,
    },
    {
      role: 'ICT Support Specialist',
      company: 'TechSupport Co.',
      period: 'Jan 2023 - May 2023',
      type: 'Student Job',
      description:
        'A simple job where I explored the hardware side of IT outside of programming.',
      responsibilities: [
        'Set up and configured computers and workstations for new employees',
        'Assisted with network installations and basic troubleshooting',
        'Learned the fundamentals of IT support and hardware maintenance',
        'Gained valuable experience in the operational aspects of IT infrastructure',
      ],
      technologies: [
        {
          name: 'Hardware',
          icon: <span className='i-mdi-desktop-tower text-gray-700' />,
        },
        {
          name: 'Networking',
          icon: <span className='i-mdi-network text-blue-600' />,
        },
        {
          name: 'Windows',
          icon: <span className='i-mdi-microsoft-windows text-blue-500' />,
        },
      ],
      featured: false,
    },
  ];

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
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
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
                    {exp.role === 'Software Development Intern' ? (
                      <Building2 className='h-5 w-5 text-indigo-700' />
                    ) : exp.role === 'IT Support Specialist' ? (
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
                  </div>
                </div>

                {exp.description && (
                  <p className='text-gray-700 mb-3 text-sm'>
                    {exp.description}
                  </p>
                )}

                <ul className='space-y-2 text-gray-700 text-sm flex-grow'>
                  {exp.responsibilities?.map((resp, i) => (
                    <li key={i} className='flex items-start'>
                      <span
                        className={`mr-2 ${
                          exp.featured ? 'text-indigo-500' : 'text-gray-500'
                        }`}
                      >
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className='mt-4 pt-4 border-t border-gray-200'>
                    <h4 className='text-xs font-medium text-gray-500 mb-2'>
                      Technologies:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className='flex items-center bg-white px-2 py-1 rounded-full text-xs font-medium border border-gray-200 shadow-sm'
                        >
                          <span className='mr-1'>{tech.icon}</span>
                          {tech.name}
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
              key={exp.company}
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
                    {exp.role === 'Software Development Intern' ? (
                      <Building2 className='h-5 w-5 text-indigo-700' />
                    ) : exp.role === 'IT Support Specialist' ? (
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
                  </div>
                </div>

                {exp.description && (
                  <p className='text-gray-700 mb-3 text-sm'>
                    {exp.description}
                  </p>
                )}

                <ul className='space-y-2 text-gray-700 text-sm'>
                  {exp.responsibilities?.map((resp, i) => (
                    <li key={i} className='flex items-start'>
                      <span
                        className={`mr-2 ${
                          exp.featured ? 'text-indigo-500' : 'text-gray-500'
                        }`}
                      >
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className='mt-4 pt-4 border-t border-gray-200'>
                    <h4 className='text-xs font-medium text-gray-500 mb-2'>
                      Technologies:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className='flex items-center bg-white px-2 py-1 rounded-full text-xs font-medium border border-gray-200 shadow-sm'
                        >
                          <span className='mr-1'>{tech.icon}</span>
                          {tech.name}
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
