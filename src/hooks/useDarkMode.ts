import { useState, useEffect } from 'react';

/**
 * useDarkMode - Centralized dark mode management hook
 *
 * Manages dark mode state with localStorage persistence and system preference detection.
 * Automatically applies dark class to document element.
 *
 * @example
 * const { isDark, toggle, setDark, setLight } = useDarkMode();
 *
 * // Toggle dark mode
 * <button onClick={toggle}>Toggle Theme</button>
 *
 * // Set specific mode
 * <button onClick={() => setDark()}>Dark Mode</button>
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply dark class to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Persist to localStorage
    localStorage.setItem('darkMode', String(isDark));
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);
  const setDark = () => setIsDark(true);
  const setLight = () => setIsDark(false);

  return {
    isDark,
    toggle,
    setDark,
    setLight,
  };
}
