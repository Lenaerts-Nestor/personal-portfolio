import { forwardRef } from 'react';
import { radius } from '@/constants';

/**
 * Skeleton variant types
 * - text: For text content (single line)
 * - paragraph: Multiple text lines with varying widths
 * - circular: For avatar/icon placeholders
 * - rectangular: For image/card placeholders
 */
export type SkeletonVariant = 'text' | 'paragraph' | 'circular' | 'rectangular';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: SkeletonVariant;
  /** Width of skeleton (e.g., 'w-full', 'w-32') */
  width?: string;
  /** Height of skeleton (e.g., 'h-4', 'h-32') */
  height?: string;
  /** Number of lines for paragraph variant */
  lines?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Get variant-specific base classes
 */
const getVariantClasses = (variant: SkeletonVariant): string => {
  const variants: Record<SkeletonVariant, string> = {
    text: 'h-4',
    paragraph: 'space-y-2',
    circular: 'rounded-full',
    rectangular: 'h-48',
  };
  return variants[variant];
};

/**
 * Skeleton - Loading placeholder component
 *
 * A flexible skeleton loader for displaying placeholder content during data loading.
 * Supports multiple variants for text, images, and custom shapes with smooth animations.
 *
 * @example
 * // Text skeleton
 * <Skeleton variant="text" width="w-32" />
 *
 * @example
 * // Paragraph skeleton
 * <Skeleton variant="paragraph" lines={3} />
 *
 * @example
 * // Image skeleton
 * <Skeleton variant="rectangular" width="w-full" height="h-64" />
 *
 * @example
 * // Avatar skeleton
 * <Skeleton variant="circular" width="w-12" height="h-12" />
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width = 'w-full',
      height,
      lines = 3,
      className = '',
      ...props
    },
    ref
  ) => {
    const variantClasses = getVariantClasses(variant);
    const heightClass = height || variantClasses.split(' ').find(c => c.startsWith('h-')) || 'h-4';

    // Base skeleton classes with shimmer animation
    const baseClasses = `
      bg-gray-200 dark:bg-gray-700
      animate-pulse
      ${variant === 'circular' ? 'rounded-full' : radius.md}
    `.trim().replace(/\s+/g, ' ');

    // Paragraph variant - multiple lines
    if (variant === 'paragraph') {
      return (
        <div ref={ref} className={`space-y-2 ${className}`} {...props}>
          {Array.from({ length: lines }).map((_, index) => {
            // Last line is shorter (80% width)
            const lineWidth = index === lines - 1 ? 'w-[80%]' : 'w-full';
            return (
              <div
                key={index}
                className={`${baseClasses} h-4 ${lineWidth}`}
              />
            );
          })}
        </div>
      );
    }

    // Single skeleton element
    return (
      <div
        ref={ref}
        className={`
          ${baseClasses}
          ${width}
          ${heightClass}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

/**
 * CardSkeleton - Pre-composed card loading skeleton
 *
 * A ready-to-use skeleton for card layouts with image, title, and description.
 *
 * @example
 * <CardSkeleton />
 */
export const CardSkeleton = () => (
  <div className={`${radius.lg} border border-gray-200 dark:border-gray-700 p-6 space-y-4`}>
    {/* Image skeleton */}
    <Skeleton variant="rectangular" height="h-48" />

    {/* Title skeleton */}
    <Skeleton variant="text" width="w-3/4" height="h-6" />

    {/* Description skeleton */}
    <Skeleton variant="paragraph" lines={2} />

    {/* Badge skeletons */}
    <div className="flex gap-2">
      <Skeleton variant="text" width="w-16" height="h-6" />
      <Skeleton variant="text" width="w-20" height="h-6" />
      <Skeleton variant="text" width="w-14" height="h-6" />
    </div>
  </div>
);

CardSkeleton.displayName = 'CardSkeleton';
