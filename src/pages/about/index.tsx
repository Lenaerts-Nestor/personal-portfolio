import { AboutHero } from '../../components/about/about-hero';
import { AboutContent } from '../../components/about/about-content';

export const About = () => {
  return (
    <>
      <main className='flex-grow'>
        <AboutHero />
        <AboutContent />
      </main>
    </>
  );
};
