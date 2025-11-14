import { forwardRef } from 'react';
import { spacing } from '@/constants';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background variant */
  background?: 'default' | 'muted' | 'accent' | 'transparent';
  /** Apply responsive padding */
  padding?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Section content */
  children: React.ReactNode;
  /** Render as specific HTML element */
  as?: 'section' | 'div' | 'article' | 'main';
}

/**
 * Get background classes
 */
const getBackgroundClasses = (
  background: 'default' | 'muted' | 'accent' | 'transparent'
): string => {
  const backgrounds: Record<string, string> = {
    default: 'bg-white dark:bg-gray-900',
    muted: 'bg-gray-50 dark:bg-gray-800',
    accent: 'bg-indigo-50 dark:bg-indigo-900/10',
    transparent: 'bg-transparent',
  };
  return backgrounds[background];
};

/**
 * Section - Semantic section wrapper component
 *
 * A semantic HTML section with consistent spacing and background variants.
 * Provides structure for page sections with responsive padding.
 *
 * @example
 * // Basic section
 * <Section>
 *   <h2>Section Title</h2>
 *   <p>Section content</p>
 * </Section>
 *
 * @example
 * // Section with muted background
 * <Section background="muted" padding>
 *   <Container>
 *     <h2>Featured Section</h2>
 *   </Container>
 * </Section>
 *
 * @example
 * // Main content area
 * <Section as="main" background="transparent">
 *   <Container>Content</Container>
 * </Section>
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      background = 'transparent',
      padding = true,
      className = '',
      children,
      as: Component = 'section',
      ...props
    },
    ref
  ) => {
    const backgroundClasses = getBackgroundClasses(background);
    const paddingClasses = padding ? spacing.section.responsive : '';

    return (
      <Component
        ref={ref as any}
        className={`
          ${backgroundClasses}
          ${paddingClasses}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';
