import { forwardRef } from 'react';
import { radius, animation } from '@/constants';

/**
 * Badge variant types
 * - primary: Primary brand color (indigo)
 * - secondary: Secondary gray color
 * - accent: Accent/highlight color
 * - success: Green for success states
 * - warning: Orange for warning states
 * - error: Red for error states
 * - info: Blue for info states
 * - outline: Outlined badge with border
 */
export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'outline';

/**
 * Badge size variants
 */
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Size variant */
  size?: BadgeSize;
  /** Make badge interactive (clickable) */
  interactive?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Badge content */
  children: React.ReactNode;
}

/**
 * Get variant-specific color classes
 */
const getVariantClasses = (variant: BadgeVariant): string => {
  const variants: Record<BadgeVariant, string> = {
    primary:
      'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200',
    secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
    accent:
      'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
    success:
      'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
    warning:
      'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
    error: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
    info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
    outline:
      'bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300',
  };
  return variants[variant];
};

/**
 * Get size-specific classes
 */
const getSizeClasses = (size: BadgeSize): string => {
  const sizes: Record<BadgeSize, string> = {
    sm: 'text-xs leading-normal font-medium px-2 py-0.5',
    md: 'text-sm leading-normal font-medium px-2.5 py-1',
    lg: 'text-base leading-normal font-medium px-3 py-1.5',
  };
  return sizes[size];
};

/**
 * Badge - Reusable badge/tag component
 *
 * A flexible badge component for labels, tags, and status indicators.
 * Supports multiple variants, sizes, and interactive states with dark mode.
 *
 * @example
 * // Basic badge
 * <Badge variant="primary">New</Badge>
 *
 * @example
 * // Interactive tag badge
 * <Badge variant="info" size="sm" interactive onClick={() => console.log('clicked')}>
 *   React
 * </Badge>
 *
 * @example
 * // Status indicator
 * <Badge variant="success">Active</Badge>
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'secondary',
      size = 'sm',
      interactive = false,
      className = '',
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);
    const interactiveClasses = interactive
      ? `cursor-pointer hover:opacity-80 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${animation.transition.opacity}`
      : '';

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (interactive && onClick) {
        e.stopPropagation(); // Prevent parent element clicks
        onClick(e);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (interactive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        e.stopPropagation();
        // Trigger onClick if exists
        if (onClick) {
          onClick(e as unknown as React.MouseEvent<HTMLSpanElement>);
        }
      }
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center justify-center
          font-medium
          ${radius.base}
          ${variantClasses}
          ${sizeClasses}
          ${interactiveClasses}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={interactive ? handleKeyDown : undefined}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
