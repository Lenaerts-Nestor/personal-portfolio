'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { Users, Layout, Server, PenToolIcon as Tool } from 'lucide-react';
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
  SiExpress,
  SiSharp,
  SiDotnet,
  SiMonogame,
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiStorybook,
} from 'react-icons/si';
import { useI18n } from '../../shared/i18nContext';
import { SectionHeading } from '../../shared/layout/section-heading';

interface Skill {
  name: string;
  icon?: React.ReactNode;
  key: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  bgColor: string;
  textColor: string;
}

export const TechnologiesSection = () => {
  const { t } = useI18n();

  // Frontend skills
  const frontendSkills: Skill[] = [
    {
      name: 'JavaScript (ES6+)',
      icon: <SiJavascript size={20} className='mr-2' />,
      key: 'JavaScript',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={20} className='mr-2' />,
      key: 'TypeScript',
    },
    {
      name: 'React',
      icon: <SiReact size={20} className='mr-2' />,
      key: 'React',
    },
    {
      name: 'HTML5',
      icon: <SiHtml5 size={20} className='mr-2' />,
      key: 'HTML5',
    },
    { name: 'CSS3', icon: <SiCss3 size={20} className='mr-2' />, key: 'CSS3' },
    {
      name: 'Storybook',
      icon: <SiStorybook size={20} className='mr-2' />,
      key: 'Storybook',
    },
    {
      name: 'Flutter',
      icon: <SiFlutter size={20} className='mr-2' />,
      key: 'Flutter',
    },
    { name: 'Responsive Design', key: 'Responsive Design' },
  ];

  // Backend skills
  const backendSkills: Skill[] = [
    {
      name: 'Node.js',
      icon: <SiNodedotjs size={20} className='mr-2' />,
      key: 'Node.js',
    },
    {
      name: 'Express.js',
      icon: <SiExpress size={20} className='mr-2' />,
      key: 'Express.js',
    },
    {
      name: 'Fastify',
      icon: <SiFastify size={20} className='mr-2' />,
      key: 'Fastify',
    },
    { name: 'C#', icon: <SiSharp size={20} className='mr-2' />, key: 'C#' },
    {
      name: '.NET',
      icon: <SiDotnet size={20} className='mr-2' />,
      key: '.NET',
    },
    {
      name: 'MonoGame',
      icon: <SiMonogame size={20} className='mr-2' />,
      key: 'MonoGame',
    },
    { name: 'RESTful APIs', key: 'RESTful APIs' },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={20} className='mr-2' />,
      key: 'PostgreSQL',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb size={20} className='mr-2' />,
      key: 'MongoDB',
    },
    {
      name: 'MySQL',
      icon: <SiMysql size={20} className='mr-2' />,
      key: 'MySQL',
    },
    {
      name: 'Drizzle ORM',
      icon: <SiDrizzle size={20} className='mr-2' />,
      key: 'Drizzle ORM',
    },
  ];

  // Tools & DevOps skills
  const toolsSkills: Skill[] = [
    {
      name: 'Git & GitHub',
      icon: <SiGit size={20} className='mr-2' />,
      key: 'Git & GitHub',
    },
    {
      name: 'Docker',
      icon: <SiDocker size={20} className='mr-2' />,
      key: 'Docker',
    },
    {
      name: 'Firebase',
      icon: <SiFirebase size={20} className='mr-2' />,
      key: 'Firebase',
    },
    { name: 'Agile Methodologies', key: 'Agile Methodologies' },
  ];

  // Professional skills
  const professionalSkills: Skill[] = [
    { name: 'Problem Solving', key: 'Problem Solving' },
    { name: 'Effective Communication', key: 'Effective Communication' },
    { name: 'Team Collaboration', key: 'Team Collaboration' },
    { name: 'Continuous Learning', key: 'Continuous Learning' },
    { name: 'Attention to Detail', key: 'Attention to Detail' },
    { name: 'Time Management', key: 'Time Management' },
    { name: 'Proactive & Eager to Contribute', key: 'Proactive' },
  ];

  // Ensure the order is: Frontend (top-left), Backend (top-right), Tools (bottom-left), Professional (bottom-right)
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layout className='h-8 w-8 text-indigo-500' />,
      skills: frontendSkills,
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-700',
    },
    {
      title: 'Backend Development',
      icon: <Server className='h-8 w-8 text-blue-500' />,
      skills: backendSkills,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
    {
      title: 'Tools & DevOps',
      icon: <Tool className='h-8 w-8 text-emerald-500' />,
      skills: toolsSkills,
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-700',
    },
    {
      title: 'Professional Skills',
      icon: <Users className='h-8 w-8 text-purple-500' />,
      skills: professionalSkills,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
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

  return (
    <section
      id='technologies'
      className='py-16 md:py-24 bg-gray-50 dark:bg-gray-900'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title='Technical Skills & Competencies'
          description='My expertise in modern web development technologies and professional competencies'
        />

        {/* Changed to 2-column grid on medium screens and larger */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12'>
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 h-full'
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
                  {category.title}
                </h3>
              </div>

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
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${category.bgColor} ${category.textColor} transition-transform hover:scale-105`}
                    variants={tagVariants}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
