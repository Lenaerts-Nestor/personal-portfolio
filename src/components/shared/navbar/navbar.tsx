'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Code,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Mail,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SwitchLanguage } from './languageSwitch';
import type { NavbarProps } from '../../../interface/navbar';

export const Navbar = ({
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
  const location = useLocation();

  const menuItems = [
    { path: '/#skills', label: 'Skills', icon: <Code className='h-4 w-4' /> },
    {
      path: '/#experience',
      label: 'Experience',
      icon: <Briefcase className='h-4 w-4' />,
    },
    {
      path: '/#projects',
      label: 'Projects',
      icon: <FolderKanban className='h-4 w-4' />,
    },
    {
      path: '/#education',
      label: 'Education',
      icon: <GraduationCap className='h-4 w-4' />,
    },
    { path: '/#contact', label: 'Contact', icon: <Mail className='h-4 w-4' /> },
    { path: '/blog', label: 'Blog', icon: null },
  ];

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
          <Github className='h-5 w-5 text-gray-700 hover:text-indigo-600' />
        );
      case 'linkedin':
        return (
          <Linkedin className='h-5 w-5 text-gray-700 hover:text-indigo-600' />
        );
      default:
        return null;
    }
  };

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const targetId = path.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    } else {
      closeMobileMenu();
    }
  };

  return (
    <header className='border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-50 w-full shadow-sm'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center justify-between py-3'>
          {/* Logo/Name - Left aligned */}
          <div className='flex items-center'>
            <Link to='/' className='text-lg font-bold text-gray-800 mr-8'>
              Nestor Lenaerts
            </Link>
          </div>

          {/* Desktop Navigation - Center aligned */}
          <div className='hidden md:flex items-center justify-center flex-1'>
            <nav>
              <ul className='flex items-center space-x-1'>
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={(e) => handleAnchorClick(e, item.path)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group flex items-center
                        ${
                          location.pathname === item.path ||
                          (location.pathname === '/' &&
                            item.path.startsWith('/#'))
                            ? 'text-indigo-600'
                            : 'text-gray-700 hover:text-indigo-600'
                        }`}
                    >
                      {item.icon && <span className='mr-1.5'>{item.icon}</span>}
                      {item.label}
                      {(location.pathname === item.path ||
                        (location.pathname === '/' &&
                          item.path.startsWith('/#') &&
                          location.hash === item.path.replace('/', ''))) && (
                        <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-indigo-600 rounded-full'></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right side - Language switch and socials */}
          <div className='flex items-center space-x-4'>
            <SwitchLanguage
              defaultLanguage={language}
              leftOption='EN'
              rightOption='NL'
              onLanguageChange={handleLanguageChange}
            />

            {/* Social links - visible on desktop */}
            <div className='hidden md:flex items-center space-x-3'>
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-indigo-600 transition-colors'
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className='p-1 text-gray-700 hover:text-indigo-600 md:hidden'
              aria-label='Toggle mobile menu'
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
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 px-4 pb-4 pt-2 z-50'>
          <div className='flex flex-col space-y-1 bg-gray-50 rounded-lg p-3'>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleAnchorClick(e, item.path)}
                className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors
                  ${
                    location.pathname === item.path ||
                    (location.pathname === '/' && item.path.startsWith('/#'))
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                  }`}
              >
                {item.icon && <span className='mr-2'>{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
          <div className='flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-200'>
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:text-indigo-600'
                aria-label={social.platform}
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
