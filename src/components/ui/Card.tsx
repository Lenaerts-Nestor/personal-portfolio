import { forwardRef } from 'react';
import { radius, shadow, animation } from '@/constants';

/**
 * Card variant types
 * - default: Standard white/dark card with border
 * - elevated: Card with prominent shadow, no border
 * - outlined: Card with strong border emphasis
 * - featured: Highlighted card (e.g., for featured content)
 * - ghost: Transparent background with subtle hover effect
 */
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'featured' | 'ghost';

/**
 * Card padding size variants
 */
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant;
  /** Internal padding size */
  padding?: CardPadding;
  /** Enable hover lift effect */
  hoverable?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Card content */
  children: React.ReactNode;
}

/**
 * Get variant-specific classes
 */
const getVariantClasses = (variant: CardVariant): string => {
  const variants: Record<CardVariant, string> = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    elevated: `bg-white dark:bg-gray-800 ${shadow.lg}`,
    outlined: 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600',
    featured: 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800',
    ghost: 'bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50',
  };
  return variants[variant];
};

/**
 * Get padding classes
 */
const getPaddingClasses = (padding: CardPadding): string => {
  const paddings: Record<CardPadding, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  return paddings[padding];
};

/**
 * Card - Base reusable card component
 *
 * A flexible container component with multiple visual variants and padding options.
 * Supports hover effects, custom styling, and dark mode.
 *
 * @example
 * // Default card
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Project Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>Description here</CardContent>
 * </Card>
 *
 * @example
 * // Featured card with hover effect
 * <Card variant="featured" hoverable>
 *   Content
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hoverable = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses = getVariantClasses(variant);
    const paddingClasses = getPaddingClasses(padding);
    const hoverClasses = hoverable
      ? `${animation.transition.all} hover:shadow-md hover:-translate-y-1 cursor-pointer`
      : '';

    return (
      <div
        ref={ref}
        className={`
          ${radius.lg}
          ${variantClasses}
          ${paddingClasses}
          ${hoverClasses}
          overflow-hidden
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
