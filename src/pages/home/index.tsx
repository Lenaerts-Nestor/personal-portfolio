import { TechnologiesSection as MainTechnologies } from '../../components/home/skills-section';
import { ScrollToTop } from '../../components/shared/scroll-to-top';

import { Footer } from '../../components/shared/layout/footer';
import MainProjects from '../../components/home/projects-sections';
import MainExperience from '../../components/home/experience-section';
import { IntroSection } from '../../components/home/intro-section';
import EducationSectionWrapper from '../../components/home/education-section-wrapper';

const HomePage = () => {
  return (
    <>
      <main>
        <IntroSection />
        <MainTechnologies />
        <MainProjects />
        <MainExperience />
        <EducationSectionWrapper />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
