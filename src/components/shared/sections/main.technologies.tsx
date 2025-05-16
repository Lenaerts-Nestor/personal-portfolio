import { technologyGroups } from '../../../utils/techgroupsIcon';

export const TechnologiesTechnologies = () => {
  return (
    <section className='py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-purple-700 mb-2'>
          Technologieën
        </h2>
        <div className='h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-8' />
        <p className='text-center text-lg text-gray-600 mb-8'>
          Dit zijn de technologieën waarmee ik momenteel kan werken. Binnenkort
          volgt er meer!
        </p>
        {/* Responsive quadrant layout for desktop, stacked for mobile */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:grid-rows-2 md:gap-8'>
          {/* Frontend - Top Left */}
          <div className='flex flex-col h-full border-2 border-indigo-200 rounded-2xl shadow-lg shadow-indigo-100 bg-white/80 p-4'>
            <h3 className='text-2xl font-bold text-indigo-800 mb-6 text-center tracking-wide uppercase drop-shadow-sm'>
              Frontend
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {technologyGroups[0].items.map((tech) => (
                <div
                  key={tech.name}
                  className='flex flex-col items-center justify-center bg-white rounded-xl shadow border border-gray-200 p-6 hover:shadow-lg transition'
                >
                  {tech.icon}
                  <span className='mt-3 font-medium text-gray-800 text-center text-base'>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Backend - Top Right */}
          <div className='flex flex-col h-full border-2 border-purple-200 rounded-2xl shadow-lg shadow-purple-100 bg-white/80 p-4'>
            <h3 className='text-2xl font-bold text-indigo-800 mb-6 text-center tracking-wide uppercase drop-shadow-sm'>
              Backend
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {technologyGroups[1].items.map((tech) => (
                <div
                  key={tech.name}
                  className='flex flex-col items-center justify-center bg-white rounded-xl shadow border border-gray-200 p-6 hover:shadow-lg transition'
                >
                  {tech.icon}
                  <span className='mt-3 font-medium text-gray-800 text-center text-base'>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Cloud & Tools - Bottom Left */}
          <div className='flex flex-col h-full border-2 border-blue-200 rounded-2xl shadow-lg shadow-blue-100 bg-white/80 p-4'>
            <h3 className='text-2xl font-bold text-indigo-800 mb-6 text-center tracking-wide uppercase drop-shadow-sm'>
              Cloud & Tools
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {technologyGroups[3].items.map((tech) => (
                <div
                  key={tech.name}
                  className='flex flex-col items-center justify-center bg-white rounded-xl shadow border border-gray-200 p-6 hover:shadow-lg transition'
                >
                  {tech.icon}
                  <span className='mt-3 font-medium text-gray-800 text-center text-base'>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Database - Bottom Right */}
          <div className='flex flex-col h-full border-2 border-green-200 rounded-2xl shadow-lg shadow-green-100 bg-white/80 p-4'>
            <h3 className='text-2xl font-bold text-indigo-800 mb-6 text-center tracking-wide uppercase drop-shadow-sm'>
              Database
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {technologyGroups[2].items.map((tech) => (
                <div
                  key={tech.name}
                  className='flex flex-col items-center justify-center bg-white rounded-xl shadow border border-gray-200 p-6 hover:shadow-lg transition'
                >
                  {tech.icon}
                  <span className='mt-3 font-medium text-gray-800 text-center text-base'>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
