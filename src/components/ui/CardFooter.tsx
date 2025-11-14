import { forwardRef } from 'react';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
  /** Footer content */
  children: React.ReactNode;
}

/**
 * CardFooter - Footer section for Card component
 *
 * Provides consistent spacing for card footer content.
 * Typically contains action buttons, links, or metadata.
 *
 * @example
 * <CardFooter>
 *   <button>View Details</button>
 * </CardFooter>
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center pt-4 ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
