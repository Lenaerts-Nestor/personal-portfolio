'use client';

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavigatorProps {
  sections: Section[];
}

export const SectionNavigator = ({ sections }: SectionNavigatorProps) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block'>
      <div className='flex flex-col items-center space-y-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md'>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className='relative group'
            aria-label={`Scroll to ${section.label} section`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-indigo-600'
                  : 'bg-gray-300 group-hover:bg-indigo-400'
              }`}
            />
            <span className='absolute left-0 top-0 transform -translate-x-full -translate-y-1/4 bg-indigo-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mr-2'>
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
