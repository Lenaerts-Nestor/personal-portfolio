/**
 * Constants barrel file
 * Centralizes all constant exports for easy importing throughout the application
 *
 * Usage:
 * import { SECTION_IDS, ROUTES, PROJECT_IDS } from '@/constants';
 * or
 * import { SECTION_IDS, ROUTES, PROJECT_IDS } from '../constants';
 */

// Section constants
export {
  SECTION_IDS,
  NAVIGATION_SECTIONS,
  ALL_SECTIONS,
  type SectionId,
} from './sections';

// Project constants
export {
  PROJECT_IDS,
  PROJECTS_WITH_CUSTOM_SUMMARY,
  PROJECTS_WITH_CUSTOM_TYPE_LABEL,
  hasCustomSummary,
  hasCustomTypeLabel,
  type ProjectId,
} from './projects';

// Route constants
export {
  ROUTES,
  HASH_ROUTES,
  isActiveRoute,
  getSectionIdFromHash,
  type Route,
  type HashRoute,
} from './routes';

// Social media constants
export {
  SOCIAL_PLATFORMS,
  isValidSocialPlatform,
  normalizePlatformName,
  type SocialPlatform,
} from './socials';

// Blog tag constants
export {
  BLOG_TAGS,
  TAG_CATEGORIES,
  TAG_TO_CATEGORY,
  getTagCategory,
  getTagsByCategory,
  type BlogTag,
  type TagCategory,
} from './blog-tags';
