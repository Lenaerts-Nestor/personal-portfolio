import { forwardRef } from 'react';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

/**
 * CardContent - Main content section for Card component
 *
 * Provides consistent spacing for card body content.
 * Use for paragraphs, lists, or any main card content.
 *
 * @example
 * <CardContent>
 *   <p>This is the main content of the card.</p>
 * </CardContent>
 */
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`pt-0 ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';
