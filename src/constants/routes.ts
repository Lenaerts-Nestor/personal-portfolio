/**
 * Application route paths
 * NOTE: Lowercase paths are used for consistency across the application
 */
export const ROUTES = {
  HOME: '/',
  BLOG: '/blog', // Changed from /Blog to fix case inconsistency
  ABOUT: '/about',
} as const;

/**
 * Type-safe route type
 */
export type Route = typeof ROUTES[keyof typeof ROUTES];

/**
 * Hash-based navigation routes for in-page section scrolling
 * These are used in the navbar for smooth scroll navigation
 */
export const HASH_ROUTES = {
  TECHNOLOGIES: '/#technologies',
  PROJECTS: '/#projects',
  EXPERIENCE: '/#experience',
  EDUCATION: '/#education',
} as const;

/**
 * Type-safe hash route type
 */
export type HashRoute = typeof HASH_ROUTES[keyof typeof HASH_ROUTES];

/**
 * Helper function to check if current path matches a route
 */
export const isActiveRoute = (currentPath: string, route: Route): boolean => {
  return currentPath.toLowerCase() === route.toLowerCase();
};

/**
 * Helper function to extract section ID from hash route
 */
export const getSectionIdFromHash = (hash: string): string => {
  return hash.replace('/#', '');
};
