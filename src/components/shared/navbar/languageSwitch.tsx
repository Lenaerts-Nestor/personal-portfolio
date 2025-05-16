import { useState } from 'react';

import type { SwitchLanguageProps } from '../../../interface/navbar';

export const SwitchLanguage = ({
  defaultLanguage = 'en',
  leftOption = 'EN',
  rightOption = 'NL',
  onLanguageChange,
}: SwitchLanguageProps) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
  };

  const isLeftActive = language === leftOption.toLowerCase();
  const isRightActive = language === rightOption.toLowerCase();

  return (
    <div className='flex bg-gray-100 rounded-full p-1 w-fit select-none relative'>
      <div
        className={`absolute h-[calc(100%-8px)] top-1 rounded-full bg-white shadow-sm transition-all duration-300 ease-in-out z-0`}
        style={{
          width: 'calc(50% - 4px)',
          left: isLeftActive ? '4px' : 'calc(50% + 0px)',
        }}
      />

      <button
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors z-10 relative ${
          isLeftActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => handleLanguageChange(leftOption.toLowerCase())}
      >
        {leftOption}
      </button>
      <button
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors z-10 relative ${
          isRightActive
            ? 'text-indigo-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => handleLanguageChange(rightOption.toLowerCase())}
      >
        {rightOption}
      </button>
    </div>
  );
};
