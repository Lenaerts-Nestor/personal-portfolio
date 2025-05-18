import { TechnologiesSection as MainTechnologies } from '../../components/home/skills-section';
import EducationSection from '../../components/home/education-section';
import { ScrollToTop } from '../../components/shared/scroll-to-top';

import { useI18n } from '../../components/shared/i18nContext';
import { Footer } from '../../components/shared/layout/footer';
import { SectionNavigator } from '../../components/shared/section.navigator';
import MainProjects from '../../components/home/projects-sections';
import MainExperience from '../../components/home/experience-section';
import { IntroSection } from '../../components/home/intro-section';
import EducationSectionWrapper from '../../components/home/education-section-wrapper';

const HomePage = () => {
  const { t } = useI18n();

  const sections = [
    { id: 'intro', label: t('navigation.home') },
    { id: 'technologies', label: t('navigation.skills') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'experience', label: t('navigation.experience') },
    { id: 'education', label: t('navigation.education') },
  ];

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
      <SectionNavigator sections={sections} />
    </>
  );
};

export default HomePage;
