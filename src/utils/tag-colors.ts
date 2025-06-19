/**
 * Utility function to generate deterministic colors for tags based on their string hash
 */

// Predefined color combinations for tags
const TAG_COLOR_VARIANTS = [
  { bg: 'bg-indigo-100', text: 'text-indigo-800' },
  { bg: 'bg-purple-100', text: 'text-purple-800' },
  { bg: 'bg-blue-100', text: 'text-blue-800' },
  { bg: 'bg-green-100', text: 'text-green-800' },
  { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  { bg: 'bg-pink-100', text: 'text-pink-800' },
  { bg: 'bg-red-100', text: 'text-red-800' },
  { bg: 'bg-orange-100', text: 'text-orange-800' },
  { bg: 'bg-teal-100', text: 'text-teal-800' },
  { bg: 'bg-cyan-100', text: 'text-cyan-800' },
  { bg: 'bg-emerald-100', text: 'text-emerald-800' },
  { bg: 'bg-lime-100', text: 'text-lime-800' },
] as const;

/**
 * Simple hash function to convert a string to a number
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Get deterministic colors for a tag based on its string value
 */
export function getTagColors(tag: string): { bg: string; text: string } {
  const hash = hashString(tag);
  const index = hash % TAG_COLOR_VARIANTS.length;
  return TAG_COLOR_VARIANTS[index];
}

/**
 * Get CSS classes for a tag badge
 */
export function getTagBadgeClasses(tag: string): string {
  const colors = getTagColors(tag);
  return `inline-flex items-center rounded-full ${colors.bg} px-3 py-0.5 text-xs font-medium ${colors.text}`;
}
