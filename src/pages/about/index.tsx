import { GoalsSection } from '../../components/about/sections/goals';
import { WorksStyleSection } from '../../components/about/sections/worksStyle';
import { LearningTrajectSection } from '../../components/about/sections/learningTraject';
import { EyeOnAiSection } from '../../components/about/sections/eyeOnAi';

export const About = () => {
  return (
    <>
      <main className='max-w-3xl mx-auto px-4 py-10'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
          Nestor Lenaerts
        </h1>
        <h2 className='text-lg text-center mb-8 font-medium text-gray-700'>
          Aankomend Full-Stack Developer
        </h2>
        <div className='space-y-10'>
          <GoalsSection />
          <WorksStyleSection />
          <LearningTrajectSection />
          <EyeOnAiSection />
        </div>
      </main>
    </>
  );
};
