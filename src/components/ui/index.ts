/**
 * UI Components Barrel Export
 * Centralized exports for all reusable UI components
 *
 * Usage:
 * import { Card, CardHeader, CardTitle, CardContent, CardFooter, Badge, Button } from '@/components/ui';
 */

// Card components
export { Card } from './Card';
export type { CardProps, CardVariant, CardPadding } from './Card';

export { CardHeader } from './CardHeader';
export type { CardHeaderProps } from './CardHeader';

export { CardContent } from './CardContent';
export type { CardContentProps } from './CardContent';

export { CardFooter } from './CardFooter';
export type { CardFooterProps } from './CardFooter';

export { CardTitle } from './CardTitle';
export type { CardTitleProps } from './CardTitle';

// Badge component
export { Badge } from './Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge';

// Button component
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// Layout components
export { Container } from './Container';
export type { ContainerProps } from './Container';

export { Section } from './Section';
export type { SectionProps } from './Section';
