import { IntroSection } from '../../components/home/sections/main.intro';
import { TechnologiesSection } from '../../components/home/sections/main.technologies';
import { ProjectsSection } from '../../components/home/sections/main.projects';
import { ExperienceSection } from '../../components/home/sections/main.experience';

export const Home = () => {
  return (
    <>
      <IntroSection />
      <section id="technologies">
        <TechnologiesSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
    </>
  );
};
