/**
 * Section IDs used for navigation and scrolling
 * These IDs correspond to the HTML id attributes on section elements
 */
export const SECTION_IDS = {
  INTRO: 'intro',
  TECHNOLOGIES: 'technologies',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
} as const;

/**
 * Type-safe section ID type
 * This ensures only valid section IDs can be used
 */
export type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS];

/**
 * Sections that appear in the navigation menu
 * Note: INTRO is excluded as it's not part of the navbar navigation
 */
export const NAVIGATION_SECTIONS: readonly SectionId[] = [
  SECTION_IDS.TECHNOLOGIES,
  SECTION_IDS.PROJECTS,
  SECTION_IDS.EXPERIENCE,
  SECTION_IDS.EDUCATION,
] as const;

/**
 * All sections in order of appearance on the page
 */
export const ALL_SECTIONS: readonly SectionId[] = [
  SECTION_IDS.INTRO,
  SECTION_IDS.TECHNOLOGIES,
  SECTION_IDS.PROJECTS,
  SECTION_IDS.EXPERIENCE,
  SECTION_IDS.EDUCATION,
] as const;
