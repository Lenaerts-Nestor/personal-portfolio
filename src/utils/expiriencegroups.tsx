import { FaLaptopCode, FaUserTie, FaBriefcase } from 'react-icons/fa';

export const experienceData = [
  {
    company: 'Amotek',
    role: 'Full-Stack Developer',
    period: 'Feb 2024 - Jun 2024',
    type: 'Hybrid · Temporary Contract/internship',
    description:
      "I'm worked on a project called AmoTrack, where I'm learning to build a full-stack application using React, PostgreSQL, and Fastify. I'm focusing on both frontend and backend development.",
    icon: <FaLaptopCode className='text-white w-4 h-4' />,
    iconBg: 'bg-indigo-500',
  },
  {
    company: 'Beego',
    role: 'ICT Consultant',
    period: 'Okt 2023 - Mei 2024',
    type: 'Op afstand · Tijdelijk contract',
    description:
      'Ik hielp klanten met basistechnische problemen thuis of op het werk, zoals het repareren van computers en uitleggen hoe ze veilig online kunnen blijven.',
    icon: <FaUserTie className='text-white w-4 h-4' />,
    iconBg: 'bg-purple-500',
  },
  {
    company: 'Digipolis',
    role: 'ICT Support Specialist',
    period: 'Aug 2024 - Sep 2024',
    type: 'Antwerpen, België · Tijdelijk contract',
    description:
      'Ik leerde de basis van ICT-ondersteuning door computers in te stellen en te helpen met netwerkinstallaties. Zo kreeg ik een goed beeld van hoe alles werkt buiten het programmeren.',
    icon: <FaBriefcase className='text-white w-4 h-4' />,
    iconBg: 'bg-green-500',
  },
];
