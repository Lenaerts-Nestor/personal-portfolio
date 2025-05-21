import { Layout, Users ,Server ,PenToolIcon as Tool} from "lucide-react";
import { FaLightbulb, FaUsers, FaBook, FaSearch, FaClock, FaHandsHelping } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3, SiStorybook, SiFlutter, SiNodedotjs, SiExpress, SiFastify, SiSharp, SiDotnet, SiMonogame, SiCodeblocks, SiPostgresql, SiMongodb, SiMysql, SiDrizzle, SiSwagger, SiGit, SiDocker, SiFirebase, SiPostman } from "react-icons/si";
import type { Skill, SkillCategory } from "../interface/skills";

  export const skills_frontendSkills: Skill[] = [
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

  export const skills_backendSkills: Skill[] = [
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

  export const skills_toolsSkills: Skill[] = [
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

  export const skills_professionalSkills: Skill[] = [
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

  export const skills_skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layout className='h-8 w-8' />,
      skills: skills_frontendSkills,
      color: 'indigo',
      lightColor: 'bg-indigo-50 dark:bg-indigo-950/30',
      darkColor: 'bg-indigo-600 dark:bg-indigo-500',
    },
    {
      title: 'Backend Development',
      icon: <Server className='h-8 w-8' />,
      skills: skills_backendSkills,
      color: 'purple',
      lightColor: 'bg-purple-50 dark:bg-purple-950/30',
      darkColor: 'bg-purple-600 dark:bg-purple-500',
    },
    {
      title: 'Tools & DevOps',
      icon: <Tool className='h-8 w-8' />,
      skills: skills_toolsSkills,
      color: 'emerald',
      lightColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      darkColor: 'bg-emerald-600 dark:bg-emerald-500',
    },
    {
      title: 'Professional Skills',
      icon: <Users className='h-8 w-8' />,
      skills: skills_professionalSkills,
      color: 'rose',
      lightColor: 'bg-rose-50 dark:bg-rose-950/30',
      darkColor: 'bg-rose-600 dark:bg-rose-500',
    },
  ];

  export const skills_containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

 export const skills_itemVariants = {
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

  export const skills_skillVariants = {
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
