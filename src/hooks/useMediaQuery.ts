import { useState, useEffect } from 'react';

/**
 * useMediaQuery - Responsive breakpoint detection hook
 *
 * Listens to media query changes and returns whether it matches.
 * Useful for responsive component behavior.
 *
 * @param query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns boolean - Whether the media query matches
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 *
 * return isMobile ? <MobileView /> : <DesktopView />;
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    // SSR safety check
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);

    // Update state if query result changes
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Set initial value
    setMatches(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
