'use client';

import type React from 'react';

interface CustomButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
}) => {
  const baseClasses =
    'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg',
    secondary:
      'bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {text}
      {icon && <span className='ml-2'>{icon}</span>}
    </button>
  );
};
