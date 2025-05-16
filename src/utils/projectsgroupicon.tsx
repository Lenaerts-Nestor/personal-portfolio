import { FaDatabase, FaReact, FaGamepad, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiSharp,
} from 'react-icons/si';

export const projectIcons = {
  timesheet: <FaDatabase className='text-indigo-500 w-10 h-10 mx-auto' />,
  webdev: <FaReact className='text-purple-500 w-10 h-10 mx-auto' />,
  game: <FaGamepad className='text-orange-500 w-10 h-10 mx-auto' />,
};

export const projects = [
  {
    id: 'timesheet',
    title: 'Timesheet',
    description: 'Web app for internal business tracking and management.',
    icon: projectIcons.timesheet,
    techs: [
      <FaNodeJs key='node' className='text-green-600' />,
      <FaReact key='react' className='text-sky-400' />,
      <SiTypescript key='ts' className='text-blue-600' />,
      <SiPostgresql key='pg' className='text-blue-800' />,
    ],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Simple website with login, MongoDB, and admin features.',
    icon: projectIcons.webdev,
    techs: [
      <FaNodeJs key='node' className='text-green-600' />,
      <SiTypescript key='ts' className='text-blue-600' />,
      <SiMongodb key='mongo' className='text-green-700' />,
      <SiExpress key='express' className='text-black' />,
    ],
  },
  {
    id: 'game',
    title: 'Game Development',
    description: '2D platformer using MonoGame and C#.',
    icon: projectIcons.game,
    techs: [<SiSharp key='csharp' className='text-purple-700' />],
  },
];
