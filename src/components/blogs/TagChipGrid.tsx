import React from 'react';
import { TagBadge } from '../shared/tag-badge';

interface TagChipGridProps {
  allTags: string[];
  selected: string[];
  onTagToggle: (tag: string) => void;
  className?: string;
}

export const TagChipGrid: React.FC<TagChipGridProps> = ({
  allTags,
  selected,
  onTagToggle,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {allTags.map((tag) => {
        const isSelected = selected.includes(tag);
        return (
          <TagBadge
            key={tag}
            tag={tag}
            onClick={onTagToggle}
            className={`transition-all duration-200 ${
              isSelected 
                ? 'ring-2 ring-purple-400 ring-offset-1 shadow-md scale-105' 
                : 'hover:shadow-sm hover:scale-102'
            }`}
          />
        );
      })}
    </div>
  );
};
