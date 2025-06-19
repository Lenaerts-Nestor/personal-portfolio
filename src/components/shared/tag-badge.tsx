import React from 'react';
import { getTagBadgeClasses } from '../../utils/tag-colors';

interface TagBadgeProps {
  tag: string;
  className?: string;
  onClick?: (tag: string) => void;
}

export const TagBadge: React.FC<TagBadgeProps> = ({ 
  tag, 
  className = '', 
  onClick 
}) => {
  const badgeClasses = getTagBadgeClasses(tag);
  const isInteractive = Boolean(onClick);
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking on tag
    if (onClick) {
      onClick(tag);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      if (onClick) {
        onClick(tag);
      }
    }
  };
  
  return (
    <span 
      className={`${badgeClasses} ${className} ${
        isInteractive ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
      }`}
      aria-label={`tag ${tag}`}
      role={isInteractive ? "button" : "badge"}
      tabIndex={isInteractive ? 0 : -1}
      onClick={isInteractive ? handleClick : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
    >
      {tag}
    </span>
  );
};
