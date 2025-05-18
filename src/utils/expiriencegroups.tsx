import type { ReactNode } from 'react';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  responsibilities?: string[];
  icon?: ReactNode;
  iconBg?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'Amotek',
    role: 'Software Development Intern',
    period: 'Feb 2024 - Jun 2024',
    type: 'Hybrid · Temporary Contract/internship',
    description:
      'Completed a full-stack software development internship, working on the AmoTrack project.',
    responsibilities: [
      'Built features using React (frontend) and Fastify with PostgreSQL/Drizzle (backend)',
      'Participated in the full development lifecycle from planning to deployment',
      'Contributed to architecture discussions and code reviews',
      'Implemented RESTful API endpoints and frontend components',
      'Utilized modern Git workflows and agile methodologies',
    ],
    iconBg: 'bg-indigo-500',
  },
  {
    company: 'Beego',
    role: 'ICT Consultant',
    period: 'Oct 2023 - May 2024',
    type: 'Remote · Temporary Contract',
    description:
      'Helped clients with basic technical problems at home or at work, such as repairing computers and explaining how to stay safe online.',
    responsibilities: [
      'Diagnosing and resolving hardware and software issues',
      'Providing remote technical support to clients',
      'Advising clients on cybersecurity best practices',
      'Assisting with network troubleshooting and configuration',
    ],
    iconBg: 'bg-purple-500',
  },
  {
    company: 'Digipolis',
    role: 'ICT Support Specialist',
    period: 'Aug 2024 - Sep 2024',
    type: 'Antwerpen, Belgium · Temporary Contract',
    description:
      'Provided ICT support in a professional environment, learning the basics of ICT support by setting up computers and helping with network installations.',
    responsibilities: [
      'Assisted with system setup and configuration',
      'Provided network assistance and troubleshooting',
      'Developed strong communication and client interaction skills',
      'Gained foundational experience in IT operations',
    ],
    iconBg: 'bg-green-500',
  },
];
