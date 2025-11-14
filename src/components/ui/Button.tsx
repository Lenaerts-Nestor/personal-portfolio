import { forwardRef } from 'react';
import { radius, animation } from '@/constants';

/**
 * Button variant types
 * - primary: Solid primary button with gradient
 * - secondary: Outlined secondary button
 * - outline: Outlined button with border
 * - ghost: Transparent button with hover effect
 * - link: Text-only link style button
 * - destructive: Red button for destructive actions
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'destructive';

/**
 * Button size variants
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size variant */
  size?: ButtonSize;
  /** Show loading state */
  loading?: boolean;
  /** Icon to display before text */
  iconLeft?: React.ReactNode;
  /** Icon to display after text */
  iconRight?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Button content */
  children?: React.ReactNode;
}

/**
 * Get variant-specific classes
 */
const getVariantClasses = (variant: ButtonVariant): string => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700',
    secondary:
      'bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
    outline:
      'bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800',
    ghost:
      'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    link: 'bg-transparent text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline',
    destructive:
      'bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg',
  };
  return variants[variant];
};

/**
 * Get size-specific classes
 */
const getSizeClasses = (size: ButtonSize): string => {
  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return sizes[size];
};

/**
 * Button - Enhanced reusable button component
 *
 * A flexible button component with multiple variants, sizes, and states.
 * Supports icons, loading states, and full accessibility with dark mode.
 *
 * @example
 * // Primary button
 * <Button variant="primary">Save Changes</Button>
 *
 * @example
 * // Button with icons
 * <Button variant="secondary" iconRight={<ArrowRight />}>
 *   Continue
 * </Button>
 *
 * @example
 * // Loading state
 * <Button variant="primary" loading disabled>
 *   Saving...
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      iconLeft,
      iconRight,
      className = '',
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);
    const isDisabled = disabled || loading;

    const disabledClasses = isDisabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '';

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center
          font-medium
          ${radius.lg}
          ${variantClasses}
          ${sizeClasses}
          ${animation.transition.all}
          ${disabledClasses}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left icon */}
        {iconLeft && !loading && <span className="mr-2">{iconLeft}</span>}

        {/* Button text */}
        {children}

        {/* Right icon */}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
