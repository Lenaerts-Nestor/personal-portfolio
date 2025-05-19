'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Code,
  Briefcase,
  FolderKanban,
  GraduationCap,
  ArrowLeft,
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
  const [_language, setLanguage] = useState(defaultLanguage);
  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';

  const homeMenuItems = [
    {
      path: '/#projects',
      label: 'Projects',
      icon: <FolderKanban className='h-4 w-4' />,
      priority: 'high',
    },
    {
      path: '/#technologies',
      label: 'Skills',
      icon: <Code className='h-4 w-4' />,
      priority: 'high',
    },
    {
      path: '/#experience',
      label: 'Experience',
      icon: <Briefcase className='h-4 w-4' />,
      priority: 'high',
    },
    {
      path: '/#education',
      label: 'Education',
      icon: <GraduationCap className='h-4 w-4' />,
      priority: 'high',
    },

    { path: '/blog', label: 'Blog', icon: null, priority: 'low' },
  ];

  const blogMenuItems = [
    {
      path: '/',
      label: 'Back to Portfolio',
      icon: <ArrowLeft className='h-4 w-4' />,
      priority: 'high',
    },
  ];

  // Select appropriate menu items based on current page
  const menuItems = isBlogPage ? blogMenuItems : homeMenuItems;

  // Close mobile menu when location changes
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, location.hash]);

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
          <Github className='h-5 w-5 text-gray-700 hover:text-indigo-600 transition-colors' />
        );
      case 'linkedin':
        return (
          <Linkedin className='h-5 w-5 text-gray-700 hover:text-indigo-600 transition-colors' />
        );
      default:
        return null;
    }
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        window.location.href = path;
        return;
      }
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

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    if (path === '/blog') {
      return location.pathname === '/blog';
    }
    if (path.startsWith('/#')) {
      return (
        location.pathname === '/' && location.hash === path.replace('/', '')
      );
    }
    return false;
  };

  // Group menu items by priority for mobile view
  const highPriorityItems = menuItems.filter(
    (item) => item.priority === 'high'
  );
  const otherItems = menuItems.filter((item) => item.priority !== 'high');

  return (
    <header className='fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Name - Left aligned */}
          <div className='flex-shrink-0'>
            <Link
              to='/'
              className='text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors'
              onClick={closeMobileMenu}
            >
              Nestor Lenaerts
            </Link>
          </div>

          {/* Desktop Navigation - Center aligned */}
          <nav className='hidden md:flex items-center justify-center space-x-1 flex-1 mx-4'>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleAnchorClick(e, item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group flex items-center
                  ${
                    isActive(item.path)
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }
                  ${item.priority === 'high' ? 'font-semibold' : ''}
                  ${item.priority === 'low' ? 'opacity-80' : ''}`}
              >
                {item.icon && <span className='mr-1.5'>{item.icon}</span>}
                {item.label}
                {isActive(item.path) && (
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full'></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side - Language switch and socials */}
          <div className='flex items-center space-x-4'>
            <SwitchLanguage
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
              className='p-1 text-gray-700 hover:text-indigo-600 transition-colors md:hidden'
              aria-label='Toggle mobile menu'
              aria-expanded={isMobileMenuOpen}
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

      {/* Mobile Menu Panel - Redesigned for better clarity */}
      {isMobileMenuOpen && (
        <div className='md:hidden fixed inset-x-0 top-16 bg-white shadow-lg border-t border-gray-200 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto'>
          {/* High priority items in a prominent section */}
          <nav className='flex flex-col p-4 space-y-2'>
            {highPriorityItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleAnchorClick(e, item.path)}
                className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors
                  ${
                    isActive(item.path)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                  }`}
              >
                {item.icon && <span className='mr-3'>{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Other items in a secondary section if they exist */}
          {otherItems.length > 0 && (
            <>
              <div className='border-t border-gray-100 mx-4'></div>
              <nav className='flex flex-col p-4 space-y-2'>
                {otherItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleAnchorClick(e, item.path)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        isActive(item.path)
                          ? 'bg-gray-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                      }`}
                  >
                    {item.icon && <span className='mr-3'>{item.icon}</span>}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </>
          )}

          {/* Social links in mobile menu */}
          <div className='flex justify-center space-x-6 p-4 mt-2 border-t border-gray-200'>
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 text-gray-500 hover:text-indigo-600 transition-colors'
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
