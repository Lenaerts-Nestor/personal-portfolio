import { forwardRef } from 'react';
import { spacing } from '@/constants';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max width variant */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Enable responsive padding */
  padding?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Container content */
  children: React.ReactNode;
}

/**
 * Get max-width classes
 */
const getMaxWidthClasses = (
  maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
): string => {
  const maxWidths: Record<string, string> = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    '2xl': 'max-w-[1600px]',
    full: 'max-w-full',
  };
  return maxWidths[maxWidth];
};

/**
 * Container - Responsive layout container
 *
 * A centered container with responsive max-width and optional padding.
 * Provides consistent layout boundaries for page content.
 *
 * @example
 * // Default container (max-w-7xl)
 * <Container>
 *   <h1>Page Content</h1>
 * </Container>
 *
 * @example
 * // Smaller container with padding
 * <Container maxWidth="md" padding>
 *   <p>Centered content with responsive padding</p>
 * </Container>
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { maxWidth = 'lg', padding = true, className = '', children, ...props },
    ref
  ) => {
    const maxWidthClasses = getMaxWidthClasses(maxWidth);
    const paddingClasses = padding ? spacing.container.padding : '';

    return (
      <div
        ref={ref}
        className={`
          mx-auto
          ${maxWidthClasses}
          ${paddingClasses}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
