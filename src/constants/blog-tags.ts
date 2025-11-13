/**
 * Blog post tags used for categorizing and filtering weekly updates
 * These tags match the tags used in i18n translation files (en.json, nl.json)
 */
export const BLOG_TAGS = {
  // Work style & approach
  ONBOARDING: 'onboarding',
  TEAMWORK: 'teamwork',
  INDEPENDENCE: 'independence',
  FOCUS: 'focus',

  // Technical areas
  CODE: 'code',
  FULLSTACK: 'fullstack',
  BACKEND: 'backend',
  DEVOPS: 'devops',
  REFACTORING: 'refactoring',
  LIBRARY_DEVELOPMENT: 'library-development',
  AUTHENTICATION: 'authentication',
  OPTIMIZATION: 'optimization',

  // Development process
  DOCUMENTATION: 'documentation',
  TESTING: 'testing',
  ARCHITECTURE: 'architecture',

  // Growth & learning
  LESSONS_LEARNED: 'lessons-learned',
  PERSONAL_GROWTH: 'personal-growth',
  LEARNING: 'learning',
  REFLECTION: 'reflection',

  // Outcomes & milestones
  WINS: 'wins',
  CHALLENGES: 'challenges',
  MILESTONE: 'milestone',

  // Project activities
  PRESENTATION: 'presentation',
  FINALIZATION: 'finalization',
  TRANSITION: 'transition',
  HANDOVER: 'handover',

  // UI/UX & productivity
  UI_UX: 'ui-ux',
  PRODUCTIVITY: 'productivity',
} as const;

/**
 * Type-safe blog tag type
 */
export type BlogTag = typeof BLOG_TAGS[keyof typeof BLOG_TAGS];

/**
 * Tag categories for grouping related tags
 * Useful for organizing tag filters in the UI
 */
export const TAG_CATEGORIES = {
  TECHNICAL: 'technical',
  PROCESS: 'process',
  GROWTH: 'growth',
  OUTCOMES: 'outcomes',
  PROJECT_STAGES: 'project-stages',
} as const;

export type TagCategory = typeof TAG_CATEGORIES[keyof typeof TAG_CATEGORIES];

/**
 * Mapping of tags to their categories
 * Can be used for color coding or grouped filtering
 */
export const TAG_TO_CATEGORY: Record<BlogTag, TagCategory> = {
  // Technical tags
  [BLOG_TAGS.CODE]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.FULLSTACK]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.BACKEND]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.DEVOPS]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.REFACTORING]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.LIBRARY_DEVELOPMENT]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.AUTHENTICATION]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.OPTIMIZATION]: TAG_CATEGORIES.TECHNICAL,
  [BLOG_TAGS.UI_UX]: TAG_CATEGORIES.TECHNICAL,

  // Process tags
  [BLOG_TAGS.ONBOARDING]: TAG_CATEGORIES.PROCESS,
  [BLOG_TAGS.TEAMWORK]: TAG_CATEGORIES.PROCESS,
  [BLOG_TAGS.INDEPENDENCE]: TAG_CATEGORIES.PROCESS,
  [BLOG_TAGS.FOCUS]: TAG_CATEGORIES.PROCESS,
  [BLOG_TAGS.DOCUMENTATION]: TAG_CATEGORIES.PROCESS,
  [BLOG_TAGS.TESTING]: TAG_CATEGORIES.PROCESS,
  [BLOG_TAGS.ARCHITECTURE]: TAG_CATEGORIES.PROCESS,
  [BLOG_TAGS.PRODUCTIVITY]: TAG_CATEGORIES.PROCESS,

  // Growth tags
  [BLOG_TAGS.LESSONS_LEARNED]: TAG_CATEGORIES.GROWTH,
  [BLOG_TAGS.PERSONAL_GROWTH]: TAG_CATEGORIES.GROWTH,
  [BLOG_TAGS.LEARNING]: TAG_CATEGORIES.GROWTH,
  [BLOG_TAGS.REFLECTION]: TAG_CATEGORIES.GROWTH,

  // Outcome tags
  [BLOG_TAGS.WINS]: TAG_CATEGORIES.OUTCOMES,
  [BLOG_TAGS.CHALLENGES]: TAG_CATEGORIES.OUTCOMES,
  [BLOG_TAGS.MILESTONE]: TAG_CATEGORIES.OUTCOMES,

  // Project stage tags
  [BLOG_TAGS.PRESENTATION]: TAG_CATEGORIES.PROJECT_STAGES,
  [BLOG_TAGS.FINALIZATION]: TAG_CATEGORIES.PROJECT_STAGES,
  [BLOG_TAGS.TRANSITION]: TAG_CATEGORIES.PROJECT_STAGES,
  [BLOG_TAGS.HANDOVER]: TAG_CATEGORIES.PROJECT_STAGES,
};

/**
 * Helper function to get category for a tag
 */
export const getTagCategory = (tag: string): TagCategory | null => {
  return TAG_TO_CATEGORY[tag as BlogTag] || null;
};

/**
 * Helper function to get all tags in a category
 */
export const getTagsByCategory = (category: TagCategory): BlogTag[] => {
  return Object.entries(TAG_TO_CATEGORY)
    .filter(([, tagCategory]) => tagCategory === category)
    .map(([tag]) => tag as BlogTag);
};
