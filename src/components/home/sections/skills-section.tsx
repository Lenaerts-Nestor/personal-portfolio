'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { Code, Users } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiFastify,
  SiPostgresql,
  SiDrizzle,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiMongodb,
} from 'react-icons/si';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';

interface SkillWithLevel {
  name: string;
  icon?: React.ReactNode;
  key: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
}

interface SkillCategory {
  titleKey: string;
  icon: React.ReactNode;
  skills: SkillWithLevel[];
  bgColor: string;
  textColor: string;
}

export const TechnologiesSection = () => {
  const { t } = useI18n();

  const skillCategories: SkillCategory[] = [
    {
      titleKey: 'Technical Skills',
      icon: <Code className='h-8 w-8 text-indigo-500' />,
      bgColor: 'bg-indigo-100 dark:bg-indigo-500/30',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      skills: [
        {
          name: 'JavaScript (ES6+)',
          icon: <SiJavascript size={20} className='mr-2' />,
          key: 'JavaScript',
          level: 'Advanced',
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript size={20} className='mr-2' />,
          key: 'TypeScript',
          level: 'Intermediate',
        },
        {
          name: 'React',
          icon: <SiReact size={20} className='mr-2' />,
          key: 'React',
          level: 'Intermediate',
        },
        {
          name: 'Node.js',
          icon: <SiNodedotjs size={20} className='mr-2' />,
          key: 'Node.js',
          level: 'Intermediate',
        },
        {
          name: 'Fastify',
          icon: <SiFastify size={20} className='mr-2' />,
          key: 'Fastify',
          level: 'Intermediate',
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql size={20} className='mr-2' />,
          key: 'PostgreSQL',
          level: 'Intermediate',
        },
        {
          name: 'MongoDB',
          icon: <SiMongodb size={20} className='mr-2' />,
          key: 'MongoDB',
          level: 'Beginner',
        },
        {
          name: 'Drizzle ORM',
          icon: <SiDrizzle size={20} className='mr-2' />,
          key: 'Drizzle ORM',
          level: 'Intermediate',
        },
        {
          name: 'RESTful APIs',
          key: 'RESTful APIs',
          level: 'Intermediate',
        },
        {
          name: 'HTML5',
          icon: <SiHtml5 size={20} className='mr-2' />,
          key: 'HTML5',
          level: 'Advanced',
        },
        {
          name: 'CSS3',
          icon: <SiCss3 size={20} className='mr-2' />,
          key: 'CSS3',
          level: 'Advanced',
        },
        {
          name: 'Git & GitHub',
          icon: <SiGit size={20} className='mr-2' />,
          key: 'Git & GitHub',
          level: 'Intermediate',
        },
        {
          name: 'Docker',
          icon: <SiDocker size={20} className='mr-2' />,
          key: 'Docker',
          level: 'Beginner',
        },
        {
          name: 'Agile Methodologies',
          key: 'Agile Methodologies',
          level: 'Intermediate',
        },
      ],
    },
    {
      titleKey: 'Professional Skills',
      icon: <Users className='h-8 w-8 text-purple-500' />,
      bgColor: 'bg-purple-100 dark:bg-purple-500/30',
      textColor: 'text-purple-700 dark:text-purple-300',
      skills: [
        {
          name: 'Problem Solving',
          key: 'Problem Solving',
          level: 'Advanced',
        },
        {
          name: 'Effective Communication',
          key: 'Effective Communication',
          level: 'Intermediate',
        },
        {
          name: 'Team Collaboration',
          key: 'Team Collaboration',
          level: 'Intermediate',
        },
        {
          name: 'Continuous Learning',
          key: 'Continuous Learning',
          level: 'Advanced',
        },
        {
          name: 'Attention to Detail',
          key: 'Attention to Detail',
          level: 'Advanced',
        },
        {
          name: 'Time Management',
          key: 'Time Management',
          level: 'Intermediate',
        },
        {
          name: 'Proactive & Eager to Contribute',
          key: 'Proactive',
          level: 'Advanced',
        },
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Beginner':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section
      id='technologies'
      className='py-16 md:py-24 bg-gray-50 dark:bg-gray-900'
    >
      <div className='container mx-auto px-4'>
        <SectionHeading
          title='Technical Skills & Competencies'
          description='My expertise in modern web development technologies and professional competencies'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12'>
          {skillCategories.map((category) => (
            <motion.div
              key={category.titleKey}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300'
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className='flex items-center mb-6'>
                <div className='p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4'>
                  {category.icon}
                </div>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                  {category.titleKey}
                </h3>
              </div>

              {/* Skill level legend */}
              {category.titleKey === 'Technical Skills' && (
                <div className='flex flex-wrap gap-2 mb-4'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 rounded-full bg-green-500 mr-1'></div>
                    <span className='text-xs text-gray-600'>Advanced</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 rounded-full bg-blue-500 mr-1'></div>
                    <span className='text-xs text-gray-600'>Intermediate</span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 rounded-full bg-yellow-500 mr-1'></div>
                    <span className='text-xs text-gray-600'>Beginner</span>
                  </div>
                </div>
              )}

              {/* Group skills by level for Technical Skills */}
              {category.titleKey === 'Technical Skills' ? (
                <div>
                  {['Advanced', 'Intermediate', 'Beginner'].map((level) => (
                    <div key={level} className='mb-4'>
                      <motion.div
                        className='flex flex-wrap gap-3'
                        variants={{
                          visible: { transition: { staggerChildren: 0.05 } },
                        }}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        {category.skills
                          .filter((skill) => skill.level === level)
                          .map((skill) => (
                            <motion.span
                              key={skill.key}
                              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${getLevelColor(
                                level
                              )} transition-transform hover:scale-105`}
                              variants={tagVariants}
                            >
                              {skill.icon}
                              {skill.name}
                            </motion.span>
                          ))}
                      </motion.div>
                    </div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className='flex flex-wrap gap-3'
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.key}
                      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${category.bgColor} ${category.textColor} transition-transform hover:scale-105`}
                      variants={tagVariants}
                    >
                      {skill.icon}
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
