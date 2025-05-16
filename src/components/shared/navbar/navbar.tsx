import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

import { NavbarTitle } from './title';
import { ResponsiveNavMenu } from './menu';
import { SwitchLanguage } from './languageSwitch';
import type { NavbarProps } from '../../../interface/navbar';

export const Navbar = ({
  menuItems,
  defaultLanguage = 'en',
  onLanguageChange,
  socials = [
    { platform: 'github', url: 'https://github.com/Lenaerts-Nestor' },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/nestor-lenaerts/',
    },
  ],
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState(defaultLanguage);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return (
          <Github className='h-6 w-6 text-gray-700 hover:text-indigo-600' />
        );
      case 'linkedin':
        return (
          <Linkedin className='h-6 w-6 text-gray-700 hover:text-indigo-600' />
        );
      default:
        return null;
    }
  };

  return (
    <header className='border-b border-gray-200 bg-white sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center justify-between py-3'>
          <NavbarTitle />

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            <ResponsiveNavMenu items={menuItems} />
            <SwitchLanguage
              defaultLanguage={language}
              leftOption='EN'
              rightOption='NL'
              onLanguageChange={handleLanguageChange}
            />
          </div>

          {/* Mobile Navigation Trigger */}
          <div className='flex items-center space-x-3 md:hidden'>
            <SwitchLanguage
              defaultLanguage={language}
              leftOption='EN'
              rightOption='NL'
              onLanguageChange={handleLanguageChange}
            />
            <button
              onClick={toggleMobileMenu}
              className='p-1 text-gray-700 hover:text-indigo-600'
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 px-4 pb-4 pt-2'>
          <div className='flex flex-col space-y-1 bg-gray-50 rounded-lg p-3'>
            <ResponsiveNavMenu
              items={menuItems}
              isMobile
              onLinkClick={closeMobileMenu}
            />
          </div>
          <div className='flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-200'>
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:text-indigo-600'
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
