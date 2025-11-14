/**
 * Design Tokens
 * Centralized design system tokens extracted from style.css
 *
 * Usage:
 * import { spacing, typography, animation } from '@/constants/design-tokens';
 * <div className={spacing.section.mobile}>...</div>
 */

/**
 * Spacing tokens based on 8px base unit
 * Following a consistent spacing scale for vertical rhythm and layout
 */
export const spacing = {
  /** Section padding */
  section: {
    mobile: 'py-12',
    desktop: 'md:py-20',
    /** Combined mobile and desktop padding */
    responsive: 'py-12 md:py-20',
  },
  /** Card internal padding */
  card: {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  },
  /** Gap spacing for grids and flex containers */
  gap: {
    xs: 'gap-2',   // 8px
    sm: 'gap-4',   // 16px
    md: 'gap-6',   // 24px
    lg: 'gap-8',   // 32px
    xl: 'gap-12',  // 48px
  },
  /** Container max-width and padding */
  container: {
    maxWidth: 'max-w-7xl',
    padding: 'px-4 md:px-6 lg:px-8',
    /** Combined container classes */
    full: 'max-w-7xl mx-auto px-4 md:px-6 lg:px-8',
  },
} as const;

/**
 * Typography scale and text styles
 * Consistent font sizes, weights, and line heights for text hierarchy
 */
export const typography = {
  /** Heading styles with responsive sizing */
  heading: {
    /** Main page titles (e.g., "Projects", "Experience") */
    h1: 'text-4xl md:text-5xl font-bold tracking-tight',
    /** Section subtitles */
    h2: 'text-3xl md:text-4xl font-bold tracking-tight',
    /** Card titles and subsections */
    h3: 'text-2xl md:text-3xl font-semibold',
    /** Small headings */
    h4: 'text-xl md:text-2xl font-medium',
  },
  /** Body text styles */
  body: {
    /** Default body text (16px) */
    base: 'text-base leading-relaxed',
    /** Larger body text for lead paragraphs */
    lg: 'text-lg leading-relaxed',
    /** Smaller body text for secondary content */
    sm: 'text-sm leading-normal',
    /** Caption text for metadata */
    xs: 'text-xs leading-normal',
  },
  /** Font weights */
  weight: {
    normal: 'font-normal',    // 400
    medium: 'font-medium',    // 500
    semibold: 'font-semibold', // 600
    bold: 'font-bold',        // 700
  },
  /** Line heights */
  leading: {
    tight: 'leading-tight',     // 1.25
    normal: 'leading-normal',   // 1.5
    relaxed: 'leading-relaxed', // 1.625
  },
} as const;

/**
 * Border radius tokens
 * Extracted from CSS custom properties (--radius based system)
 */
export const radius = {
  /** Base radius: 0.625rem (10px) */
  base: 'rounded-[0.625rem]',
  /** Small radius: 6px */
  sm: 'rounded-[0.375rem]',
  /** Medium radius: 8px */
  md: 'rounded-[0.5rem]',
  /** Large radius: 10px (base) */
  lg: 'rounded-[0.625rem]',
  /** Extra large radius: 14px */
  xl: 'rounded-[0.875rem]',
  /** Full rounded (pills/badges) */
  full: 'rounded-full',
} as const;

/**
 * Animation and transition tokens
 * Consistent timing for smooth interactions
 */
export const animation = {
  /** Transition durations */
  duration: {
    fast: 'duration-150',      // 150ms - Quick feedback
    normal: 'duration-200',    // 200ms - Default transitions
    medium: 'duration-300',    // 300ms - Smooth animations
    slow: 'duration-500',      // 500ms - Dramatic effects
  },
  /** Easing functions */
  easing: {
    default: 'ease-in-out',
    in: 'ease-in',
    out: 'ease-out',
    /** Custom cubic-bezier for natural motion */
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  /** Common transitions */
  transition: {
    /** All properties transition */
    all: 'transition-all duration-300',
    /** Color transitions (backgrounds, text) */
    colors: 'transition-colors duration-200',
    /** Transform transitions (scale, translate) */
    transform: 'transition-transform duration-300',
    /** Opacity fade */
    opacity: 'transition-opacity duration-300',
  },
  /** Hover effects */
  hover: {
    /** Lift card on hover */
    lift: 'hover:shadow-xl hover:-translate-y-2',
    /** Scale up slightly */
    scale: 'hover:scale-105',
    /** Brighten background */
    brighten: 'hover:brightness-110',
  },
} as const;

/**
 * Shadow tokens
 * Consistent elevation system
 */
export const shadow = {
  sm: 'shadow-sm',
  base: 'shadow',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  none: 'shadow-none',
} as const;

/**
 * Grid system tokens
 * Responsive grid layouts
 */
export const grid = {
  /** Standard card grid (responsive columns) */
  cards: {
    /** 1 column mobile, 2 tablet, 3 desktop */
    default: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    /** 1 column mobile, 2 desktop */
    twoCol: 'grid grid-cols-1 md:grid-cols-2',
    /** 1 column mobile, 2 tablet, 4 desktop */
    fourCol: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  },
  /** Gap spacing for grids */
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  },
} as const;

/**
 * Breakpoint constants (matching Tailwind defaults)
 * For use in media queries and responsive hooks
 */
export const breakpoints = {
  sm: 640,   // px
  md: 768,   // px
  lg: 1024,  // px
  xl: 1280,  // px
  '2xl': 1536, // px
} as const;

/**
 * Z-index scale
 * Consistent layering system
 */
export const zIndex = {
  base: 'z-0',
  dropdown: 'z-10',
  sticky: 'z-20',
  fixed: 'z-30',
  modal: 'z-40',
  popover: 'z-50',
  tooltip: 'z-60',
} as const;

/**
 * Common utility class combinations
 * Frequently used patterns for consistency
 */
export const utils = {
  /** Center content horizontally and vertically */
  center: 'flex items-center justify-center',
  /** Center content horizontally */
  centerX: 'flex justify-center',
  /** Center content vertically */
  centerY: 'flex items-center',
  /** Absolute center positioning */
  absoluteCenter: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  /** Screen reader only (accessible but invisible) */
  srOnly: 'sr-only',
  /** Truncate text with ellipsis */
  truncate: 'truncate',
  /** Clamp text to multiple lines */
  lineClamp: (lines: number) => `line-clamp-${lines}`,
} as const;

/**
 * Type exports for TypeScript autocomplete
 */
export type SpacingToken = typeof spacing;
export type TypographyToken = typeof typography;
export type RadiusToken = typeof radius;
export type AnimationToken = typeof animation;
export type ShadowToken = typeof shadow;
export type GridToken = typeof grid;
export type BreakpointToken = typeof breakpoints;
export type ZIndexToken = typeof zIndex;
export type UtilsToken = typeof utils;
