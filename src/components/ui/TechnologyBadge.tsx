import { forwardRef } from 'react';
import type { IconType } from 'react-icons';

export interface TechnologyBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Technology name to display */
  tech: string;
  /** Icon component from react-icons */
  icon?: IconType;
  /** Icon color class (e.g., 'text-blue-600') */
  iconColor?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TechnologyBadge - Reusable technology badge component for project summaries
 *
 * A consistent badge component for displaying technologies with icons.
 * Designed to maintain uniform styling across all project summaries.
 *
 * @example
 * // With icon
 * <TechnologyBadge tech="React" icon={SiReact} iconColor="text-sky-500" />
 *
 * @example
 * // Without icon
 * <TechnologyBadge tech="TypeScript" />
 */
export const TechnologyBadge = forwardRef<HTMLSpanElement, TechnologyBadgeProps>(
  ({ tech, icon: Icon, iconColor = '', className = '', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg ${className}`}
        {...props}
      >
        {Icon && <Icon className={`h-5 w-5 ${iconColor}`} />}
        {tech}
      </span>
    );
  }
);

TechnologyBadge.displayName = 'TechnologyBadge';
