import type React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { HeaderMenuProps } from '../../../interface/navbar';

export const ResponsiveNavMenu = ({
  items,
  onLinkClick,
  isMobile,
}: HeaderMenuProps) => {
  const location = useLocation();

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
        if (onLinkClick) {
          onLinkClick();
        }
      }
    } else if (onLinkClick) {
      onLinkClick();
    }
  };

  if (isMobile) {
    return (
      <nav className='flex flex-col space-y-2'>
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={(e) => handleAnchorClick(e, item.path)}
            className={`block px-4 py-3 rounded-md text-center text-base font-medium transition-colors
                        ${
                          location.pathname === item.path ||
                          (location.pathname === '/' &&
                            item.path.startsWith('/#'))
                            ? 'bg-indigo-50 text-indigo-600'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                        }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav>
      <ul className='flex items-center space-x-2'>
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              onClick={(e) => handleAnchorClick(e, item.path)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group
                          ${
                            location.pathname === item.path ||
                            (location.pathname === '/' &&
                              item.path.startsWith('/#'))
                              ? 'text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600'
                          }`}
            >
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
  );
};
