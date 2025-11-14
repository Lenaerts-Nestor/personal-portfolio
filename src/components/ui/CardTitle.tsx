import { forwardRef } from 'react';
import { typography } from '@/constants';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Title size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Render as specific heading level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
  /** Title content */
  children: React.ReactNode;
}

/**
 * Get size-specific typography classes
 */
const getSizeClasses = (size: 'sm' | 'md' | 'lg'): string => {
  const sizes = {
    sm: typography.heading.h4,  // text-xl md:text-2xl
    md: typography.heading.h3,  // text-2xl md:text-3xl
    lg: typography.heading.h2,  // text-3xl md:text-4xl
  };
  return sizes[size];
};

/**
 * CardTitle - Title component for Card headers
 *
 * Provides consistent typography for card titles with size variants.
 * Automatically handles dark mode text colors.
 *
 * @example
 * <CardTitle>My Project</CardTitle>
 *
 * @example
 * // Large title with h2 semantic
 * <CardTitle size="lg" as="h2">Featured Project</CardTitle>
 */
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ size = 'md', as: Component = 'h3', className = '', children, ...props }, ref) => {
    const sizeClasses = getSizeClasses(size);

    return (
      <Component
        ref={ref}
        className={`
          ${sizeClasses}
          text-gray-900 dark:text-gray-100
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardTitle.displayName = 'CardTitle';
