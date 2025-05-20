'use client';

import type React from 'react';
import {
  FaLightbulb,
  FaUsers,
  FaBook,
  FaSearch,
  FaClock,
  FaHandsHelping,
} from 'react-icons/fa';
import { MdChat } from 'react-icons/md';
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
  SiSwagger,
  SiCodeblocks,
  SiPostman,
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
  color: string;
  lightColor: string;
  darkColor: string;
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
    {
      name: 'RESTful APIs',
      icon: <SiCodeblocks size={20} className='mr-2' />,
      key: 'RESTful APIs',
    },
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
    {
      name: 'Swagger',
      icon: <SiSwagger size={20} className='mr-2' />,
      key: 'Swagger',
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
    {
      name: 'Postman',
      icon: <SiPostman size={20} className='mr-2' />,
      key: 'Postman',
    },
  ];

  const professionalSkills: Skill[] = [
    {
      name: 'Problem Solving',
      icon: <FaLightbulb size={20} className='mr-2' />, // Represents ideas and solutions
      key: 'Problem Solving',
    },
    {
      name: 'Effective Communication',
      icon: <MdChat size={20} className='mr-2' />,
      key: 'Effective Communication',
    },
    {
      name: 'Team Collaboration',
      icon: <FaUsers size={20} className='mr-2' />, // Represents teamwork
      key: 'Team Collaboration',
    },
    {
      name: 'Continuous Learning',
      icon: <FaBook size={20} className='mr-2' />, // Represents learning and knowledge
      key: 'Continuous Learning',
    },
    {
      name: 'Attention to Detail',
      icon: <FaSearch size={20} className='mr-2' />, // Represents focus and detail
      key: 'Attention to Detail',
    },
    {
      name: 'Time Management',
      icon: <FaClock size={20} className='mr-2' />, // Represents time management
      key: 'Time Management',
    },
    {
      name: 'Proactive & Eager to Contribute',
      icon: <FaHandsHelping size={20} className='mr-2' />, // Represents contribution and proactivity
      key: 'Proactive',
    },
  ];

  // Ensure the order is: Frontend (top-left), Backend (top-right), Tools (bottom-left), Professional (bottom-right)
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layout className='h-8 w-8' />,
      skills: frontendSkills,
      color: 'indigo',
      lightColor: 'bg-indigo-50 dark:bg-indigo-950/30',
      darkColor: 'bg-indigo-600 dark:bg-indigo-500',
    },
    {
      title: 'Backend Development',
      icon: <Server className='h-8 w-8' />,
      skills: backendSkills,
      color: 'purple',
      lightColor: 'bg-purple-50 dark:bg-purple-950/30',
      darkColor: 'bg-purple-600 dark:bg-purple-500',
    },
    {
      title: 'Tools & DevOps',
      icon: <Tool className='h-8 w-8' />,
      skills: toolsSkills,
      color: 'emerald',
      lightColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      darkColor: 'bg-emerald-600 dark:bg-emerald-500',
    },
    {
      title: 'Professional Skills',
      icon: <Users className='h-8 w-8' />,
      skills: professionalSkills,
      color: 'rose',
      lightColor: 'bg-rose-50 dark:bg-rose-950/30',
      darkColor: 'bg-rose-600 dark:bg-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id='technologies'
      className='py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <SectionHeading
          title='Technical Skills'
          description='My expertise in modern web development technologies and professional competencies'
        />

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className='relative h-full'
              variants={itemVariants}
            >
              <div
                className={`h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 ${category.lightColor} backdrop-blur-sm`}
              >
                {/* Header */}
                <div
                  className={`${category.darkColor} px-6 py-4 flex items-center gap-3`}
                >
                  <div className='p-2 bg-white/20 rounded-lg text-white'>
                    {category.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className='p-5'>
                  <motion.div
                    className='grid grid-cols-2 sm:grid-cols-3 gap-3'
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.03,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.key}
                        className={`flex items-center p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-${category.color}-300 dark:hover:border-${category.color}-500`}
                        variants={skillVariants}
                      >
                        {skill.icon ? (
                          <div
                            className={`text-${category.color}-500 flex items-center`}
                          >
                            {skill.icon}
                          </div>
                        ) : (
                          <div
                            className={`w-5 h-5 mr-2 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/50 border border-${category.color}-200 dark:border-${category.color}-700`}
                          ></div>
                        )}
                        <span className='text-sm font-medium text-gray-700 dark:text-gray-200 truncate'>
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
