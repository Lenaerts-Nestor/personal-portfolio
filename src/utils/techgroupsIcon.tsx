import {
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiJavascript,
  SiSharp,
  SiDotnet,
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiCss3,
  SiHtml5,
  SiMonogame,
  SiExpress,
  SiDrizzle,
  SiFastify,
  SiPostgresql,
  SiGit,
  SiStorybook,
  SiDocker,
} from 'react-icons/si';

export const techStackCategories = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: <SiReact size={48} color='#61DAFB' /> },
      { name: 'TypeScript', icon: <SiTypescript size={48} color='#3178C6' /> },
      { name: 'JavaScript', icon: <SiJavascript size={48} color='#F7DF1E' /> },
      { name: 'CSS', icon: <SiCss3 size={48} color='#1572B6' /> },
      { name: 'HTML', icon: <SiHtml5 size={48} color='#E34F26' /> },
      { name: 'Storybook', icon: <SiStorybook size={48} color='#FF4785' /> },
      { name: 'Flutter', icon: <SiFlutter size={48} color='#02569B' /> },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs size={48} color='#68A063' /> },
      { name: 'Express.js', icon: <SiExpress size={48} color='#000000' /> },
      { name: 'C#', icon: <SiSharp size={48} color='#9B4F96' /> },
      { name: '.NET', icon: <SiDotnet size={48} color='#512BD4' /> },
      { name: 'MonoGame', icon: <SiMonogame size={48} color='#FF6600' /> },
      { name: 'Fastify', icon: <SiFastify size={48} color='#000000' /> },
      { name: 'Drizzle', icon: <SiDrizzle size={48} color='#000000' /> },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb size={48} color='#47A248' /> },
      { name: 'SQL', icon: <SiMysql size={48} color='#4479A1' /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={48} color='#336791' /> },
    ],
  },
  {
    label: 'Cloud & Tools',
    items: [
      { name: 'Firebase', icon: <SiFirebase size={48} color='#FFCA28' /> },
      { name: 'Git', icon: <SiGit size={48} color='#F05032' /> },
      { name: 'Docker', icon: <SiDocker size={48} color='#2496ED' /> },
    ],
  },
];
