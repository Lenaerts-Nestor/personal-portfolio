/**
 * Social media platform identifiers
 * Used in navbar and footer for social links
 */
export const SOCIAL_PLATFORMS = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
} as const;

/**
 * Type-safe social platform type
 */
export type SocialPlatform = typeof SOCIAL_PLATFORMS[keyof typeof SOCIAL_PLATFORMS];

/**
 * Helper function to validate if a string is a valid social platform
 */
export const isValidSocialPlatform = (platform: string): platform is SocialPlatform => {
  return Object.values(SOCIAL_PLATFORMS).includes(platform as SocialPlatform);
};

/**
 * Helper function to normalize platform name (case-insensitive)
 */
export const normalizePlatformName = (platform: string): SocialPlatform | null => {
  const normalized = platform.toLowerCase();
  return isValidSocialPlatform(normalized) ? normalized : null;
};
