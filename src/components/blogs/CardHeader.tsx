import React from 'react';
import { Calendar } from 'lucide-react';
import { TagBadge } from '../shared/tag-badge';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  variant?: 'card' | 'modal';
  className?: string;
}

/**
 * Shared header component for both WeeklyCard and WeeklyModal
 * Uses flexbox layout to prevent tag overlap with title/icon
 */
export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  tags = [],
  variant = 'card',
  className = ''
}) => {
  const isModal = variant === 'modal';
  
  return (
    <div className={`border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50 ${className}`}>
      {/* Flexbox container ensures no overlap between title and tags */}
      <div className="flex items-start justify-between gap-3 p-4">
        {/* Left side: Icon + Title */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="flex-shrink-0 p-2 rounded-full bg-purple-100 text-purple-600">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">            <h3 
              className={`font-bold text-purple-700 ${
                isModal ? 'text-2xl' : 'text-lg'
              } truncate`}
              role="heading"
              aria-level={3}
            >
              {title}
            </h3>
            {subtitle && (
              <div className={`text-indigo-600 font-medium ${
                isModal ? 'text-sm mb-2' : 'text-sm'
              }`}>
                {subtitle}
              </div>
            )}
          </div>
        </div>        {/* Right side: Tags - flexbox ensures they don't overlap */}
        {tags.length > 0 && !isModal && (
          <div className="flex flex-wrap gap-1 justify-end max-w-[50%]">
            {tags.map((tag: string, tagIdx: number) => (
              <TagBadge 
                key={`header-${tagIdx}`} 
                tag={tag}
                className="shadow-sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal-specific tags section below title */}
      {isModal && tags.length > 0 && (
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag: string, tagIdx: number) => (
              <TagBadge 
                key={`modal-tags-${tagIdx}`} 
                tag={tag}
                className="shadow-sm"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
