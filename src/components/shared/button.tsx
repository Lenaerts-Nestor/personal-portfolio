import { type FC } from 'react';
import {
  baseClasses,
  sizeClasses,
  variantClasses,
} from '../../style/customButton.style';
import type { ButtonProps } from '../../interface/customButton';

export const CustomButton: FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  iconRight,
}) => {
  return (
    <button
      type='button'
      className={[
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
      {iconRight && <span className='ml-2'>{iconRight}</span>}
    </button>
  );
};
