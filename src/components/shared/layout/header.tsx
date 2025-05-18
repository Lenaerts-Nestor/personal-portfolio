'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../i18nContext';

export const Header = () => {
  const { t } = useI18n();
  const [activeSection, setActiveSection] = useState('intro');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events to update active section and header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Get all sections and determine which one is currently in view
      const sections = ['intro', 'technologies', 'projects', 'experience'];
      const sectionElements = sections.map((id) => document.getElementById(id));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-6xl mx-auto px-4 flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
        >
          Portfolio
        </Link>

        <nav className='hidden md:flex space-x-1'>
          {[
            { id: 'intro', label: t('navigation.home') },
            { id: 'technologies', label: t('navigation.skills') },
            { id: 'projects', label: t('navigation.projects') },
            { id: 'experience', label: t('navigation.experience') },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                activeSection === item.id
                  ? 'text-indigo-700'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-2'
                  layoutId='activeSection'
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className='flex items-center space-x-4'>
          <Link
            to='/Blog'
            className='hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md shadow-sm hover:from-indigo-700 hover:to-purple-700 transition-colors'
          >
            {t('home.blogButton')}
          </Link>
          <Link
            to='/About'
            className='hidden sm:inline-flex px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-200 rounded-md shadow-sm hover:bg-indigo-50 transition-colors'
          >
            {t('home.aboutButton')}
          </Link>
        </div>
      </div>

      {/* Section progress indicator */}
      <div className='h-1 w-full bg-gray-100'>
        <motion.div
          className='h-full bg-gradient-to-r from-indigo-600 to-purple-600'
          initial={{ width: '25%' }}
          animate={{
            width:
              activeSection === 'intro'
                ? '25%'
                : activeSection === 'technologies'
                ? '50%'
                : activeSection === 'projects'
                ? '75%'
                : '100%',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.header>
  );
};
