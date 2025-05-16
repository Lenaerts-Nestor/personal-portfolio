import { FaBriefcase, FaLaptopCode, FaUserTie } from 'react-icons/fa';

const experienceData = [
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

export const ExperienceSection = () => {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-purple-700 mb-2'>
          Ervaring
        </h2>
        <div className='h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-8' />
        <p className='text-center text-lg text-gray-600 mb-8'>
          Mijn professionele reis in de techindustrie tot nu toe.
        </p>

        {/* Timeline container */}
        <div className='relative'>
          {/* Timeline vertical line */}
          <div className='absolute left-3.5 sm:left-4 top-4 bottom-4 w-0.5 bg-indigo-400'></div>

          <div className='space-y-12'>
            {experienceData.map((exp, idx) => (
              <div key={exp.company} className='relative group'>
                {/* Connector line from timeline to card - positioned BEHIND the icon */}
                <div className='absolute left-3.5 sm:left-4 top-4 w-8 sm:w-12 h-0.5 bg-indigo-300'></div>

                {/* Timeline dot with icon */}
                <div className='absolute left-0 top-0 z-10'>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${exp.iconBg} flex items-center justify-center shadow-md border-2 border-white transition-all duration-300 group-hover:scale-110`}
                  >
                    {exp.icon}
                  </div>

                  {/* Pulse effect on hover */}
                  <div
                    className={`absolute inset-0 ${exp.iconBg} opacity-30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out`}
                  ></div>
                </div>

                {/* Content card */}
                <div className='ml-12 sm:ml-16'>
                  <div className='bg-white rounded-lg shadow-md p-5 border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-indigo-100'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
                      <h3 className='text-lg font-bold text-indigo-700'>
                        {exp.role}
                      </h3>
                      <span className='text-purple-500 font-medium text-sm sm:text-base'>
                        {exp.company}
                      </span>
                    </div>

                    <div className='text-sm text-gray-500 mb-1'>
                      {exp.period}
                    </div>
                    <div className='text-xs text-gray-400 mb-3'>{exp.type}</div>

                    <p className='text-gray-700'>{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small dot at the end of timeline */}
          <div className='absolute left-3.5 sm:left-4 bottom-0 w-2 h-2 rounded-full bg-indigo-400'></div>
        </div>
      </div>
    </section>
  );
};
