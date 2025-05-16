import { FaDatabase, FaReact, FaGamepad, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiSharp,
  SiFlutter,
  SiFirebase,
  SiDotnet,
  SiCss3,
  SiMysql,
} from 'react-icons/si';

export const projectIcons = {
  timesheet: <FaDatabase className='text-indigo-500 w-10 h-10 mx-auto' />,
  webdev: <FaReact className='text-purple-500 w-10 h-10 mx-auto' />,
  game: <FaGamepad className='text-orange-500 w-10 h-10 mx-auto' />,
  webapi: <FaDatabase className='text-purple-400 w-10 h-10 mx-auto' />,
  parkflow: <FaReact className='text-blue-400 w-10 h-10 mx-auto' />,
  carinfo: <FaReact className='text-cyan-400 w-10 h-10 mx-auto' />,
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
  {
    id: 'webapi',
    title: 'Web_API',
    description:
      'This project demonstrates the development of web services based on open standards such as XML, JSON, and HTTP(S)..',
    icon: projectIcons.webapi,
    techs: [
      <SiDotnet key='dotnet' className='text-purple-700' />,
      <SiMysql key='sql' className='text-blue-700' />,
    ],
  },
  {
    id: 'parkflow',
    title: 'ParkFlow',
    description:
      'Flutter-app waarmee gebruikers parkeerplekken kunnen reserveren,bekijken, verlengen of annuleren.Gebruikers kunnen ook hun voertuig selecteren uit een lijst van...',
    icon: projectIcons.parkflow,
    techs: [
      <SiFlutter key='flutter' className='text-blue-400' />,
      <SiFirebase key='firebase' className='text-yellow-500' />,
    ],
  },
  {
    id: 'carinfo',
    title: 'car_info',
    description:
      "this is a project where i test my skils of react native and focused on mobile devices where i test my skils to get API's correctly and use the CRUDS functions",
    icon: projectIcons.carinfo,
    techs: [
      <FaReact key='react' className='text-cyan-400' />,
      <SiTypescript key='ts' className='text-blue-600' />,
      <SiCss3 key='css' className='text-blue-500' />,
    ],
  },
];
