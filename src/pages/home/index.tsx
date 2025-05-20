import { TechnologiesSection as MainTechnologies } from '../../components/home/sections/skills-section';
import { ScrollToTop } from '../../components/shared/scroll-to-top';

import { Footer } from '../../components/shared/layout/footer';

import EducationSectionWrapper from '../../components/home/education-section-wrapper';
import { IntroSection } from '../../components/home/sections/intro-section';
import ProjectsSection from '../../components/home/sections/projects-sections';
import ExperienceSection from '../../components/home/sections/experience-section';

const HomePage = () => {
  return (
    <>
      <main>
        <IntroSection />
        <MainTechnologies />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSectionWrapper />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
