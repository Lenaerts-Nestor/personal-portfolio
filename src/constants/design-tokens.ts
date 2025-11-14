export const spacing = {
  section: {
    mobile: "py-12",
    desktop: "md:py-20",
    responsive: "py-12 md:py-20",
  },
  card: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  },
  gap: {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
  container: {
    maxWidth: "max-w-7xl",
    padding: "px-4 md:px-6 lg:px-8",
    full: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
  },
} as const;

export const typography = {
  heading: {
    h1: "text-4xl md:text-5xl font-bold tracking-tight leading-tight",
    h2: "text-3xl md:text-4xl font-bold tracking-tight leading-tight",
    h3: "text-xl md:text-2xl font-semibold leading-snug",
    h4: "text-lg md:text-xl font-medium leading-snug",
    h5: "text-base font-medium leading-normal",
  },
  body: {
    lg: "text-lg leading-relaxed font-normal",
    base: "text-base leading-relaxed font-normal",
    sm: "text-sm leading-normal font-normal",
    xs: "text-xs leading-normal font-normal",
  },
  label: {
    lg: "text-base leading-normal font-medium",
    base: "text-sm leading-normal font-medium",
    sm: "text-xs leading-normal font-medium",
  },
  weight: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
  leading: {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  },
  tracking: {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
  },
  utils: {
    truncate: "truncate",
    lineClamp2: "line-clamp-2",
    lineClamp3: "line-clamp-3",
    lineClamp4: "line-clamp-4",
    balance: "text-balance",
    wrap: "text-wrap",
    nowrap: "text-nowrap",
  },
} as const;

export const radius = {
  base: "rounded-[0.625rem]",
  sm: "rounded-[0.375rem]",
  md: "rounded-[0.5rem]",
  lg: "rounded-[0.625rem]",
  xl: "rounded-[0.875rem]",
  full: "rounded-full",
} as const;

export const animation = {
  duration: {
    fast: "duration-150",
    normal: "duration-200",
    medium: "duration-300",
    slow: "duration-500",
  },
  easing: {
    default: "ease-in-out",
    in: "ease-in",
    out: "ease-out",
    smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
  transition: {
    all: "transition-all duration-300",
    colors: "transition-colors duration-200",
    transform: "transition-transform duration-300",
    opacity: "transition-opacity duration-300",
  },
  hover: {
    lift: "hover:shadow-xl hover:-translate-y-2",
    scale: "hover:scale-105",
    brighten: "hover:brightness-110",
  },
} as const;

export const shadow = {
  sm: "shadow-sm",
  base: "shadow",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  none: "shadow-none",
} as const;

export const grid = {
  cards: {
    default: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    twoCol: "grid grid-cols-1 md:grid-cols-2",
    fourCol: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  },
  gap: {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  },
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const zIndex = {
  base: "z-0",
  dropdown: "z-10",
  sticky: "z-20",
  fixed: "z-30",
  modal: "z-40",
  popover: "z-50",
  tooltip: "z-60",
} as const;

export const utils = {
  center: "flex items-center justify-center",
  centerX: "flex justify-center",
  centerY: "flex items-center",
  absoluteCenter: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  srOnly: "sr-only",
  truncate: "truncate",
  lineClamp: (lines: number) => `line-clamp-${lines}`,
} as const;

export type SpacingToken = typeof spacing;
export type TypographyToken = typeof typography;
export type RadiusToken = typeof radius;
export type AnimationToken = typeof animation;
export type ShadowToken = typeof shadow;
export type GridToken = typeof grid;
export type BreakpointToken = typeof breakpoints;
export type ZIndexToken = typeof zIndex;
export type UtilsToken = typeof utils;
