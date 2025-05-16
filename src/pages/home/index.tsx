import { Navbar } from '../../components/shared/navbar/navbar';
import { IntroSection } from '../../components/shared/sections/main.intro';
import { TechnologiesSection } from '../../components/shared/sections/main.technologies';
import { ProjectsSection } from '../../components/shared/sections/main.projects';
import { ExperienceSection } from '../../components/shared/sections/main.experience';

export const Home = () => {
  const menuItems = [
    { path: '/Home', label: 'Home' },
    { path: '/About', label: 'Over mij' },
    { path: '/Blog', label: 'Blog' },
  ];

  const handleLanguageChange = (language: string) => {
    console.log(`Language changed to: ${language}`);
  };

  return (
    <>
      <Navbar
        menuItems={menuItems}
        defaultLanguage='en'
        onLanguageChange={handleLanguageChange}
        socials={[
          { platform: 'github', url: 'https://github.com/yourusername' },
          { platform: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
        ]}
      />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
    </>
  );
};
