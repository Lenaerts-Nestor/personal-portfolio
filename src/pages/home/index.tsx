import { IntroSection } from '../../components/home/sections/main.intro';
import { TechnologiesSection } from '../../components/home/sections/main.technologies';
import { ProjectsSection } from '../../components/home/sections/main.projects';
import { ExperienceSection } from '../../components/home/sections/main.experience';
import { ScrollToTop } from '../../components/shared/scroll-to-top';

import { useI18n } from '../../components/shared/i18nContext';
import { Footer } from '../../components/shared/layout/footer';
import { SectionNavigator } from '../../components/shared/section.navigator';

export const Home = () => {
  const { t } = useI18n();

  const sections = [
    { id: 'intro', label: t('navigation.home') },
    { id: 'technologies', label: t('navigation.skills') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'experience', label: t('navigation.experience') },
  ];

  return (
    <>
      <main>
        <IntroSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
      <ScrollToTop />
      <SectionNavigator sections={sections} />
    </>
  );
};
