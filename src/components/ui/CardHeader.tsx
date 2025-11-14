import { forwardRef } from 'react';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
  /** Header content */
  children: React.ReactNode;
}

/**
 * CardHeader - Header section for Card component
 *
 * Provides consistent spacing and layout for card headers.
 * Typically contains CardTitle and optional action buttons or badges.
 *
 * @example
 * <CardHeader>
 *   <CardTitle>Project Title</CardTitle>
 *   <span className="text-sm">Badge</span>
 * </CardHeader>
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col space-y-1.5 ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';
