import React from 'react';
import { X, Filter } from 'lucide-react';
import { TagChipGrid } from './TagChipGrid';

interface TagFilterProps {
  allTags: string[];
  selected: string[];
  onChange: (next: string[]) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({
  allTags,
  selected,
  onChange
}) => {
  // TODO: UX Improvement #2 - Add keyboard shortcuts for filter management
  // - Escape key to clear all filters
  // - Ctrl/Cmd + A to select all tags
  // - Arrow keys to navigate between tags
  
  const handleTagToggle = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter(t => t !== tag));
    } else {
      onChange([...selected, tag]);
    }
  };

  const handleClearAll = () => {
    onChange([]);
  };
  return (
    // Only show on desktop - hidden on mobile where MobileTagFilterSheet is used
    <div className="hidden md:block mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Filter by Tags</h3>
          {selected.length > 0 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {selected.length} active
            </span>
          )}
        </div>
        
        {selected.length > 0 && (
          <button
            onClick={handleClearAll}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-4 h-4" />
            Clear all filters
          </button>
        )}
      </div>      
      {/* TODO: UX Improvement #3 - Add smooth animations for filter changes
           - Staggered animation for tag chips appearing/disappearing
           - Smooth scale/fade effects on selection
           - Animated count updates in the active filter badge */}
      <TagChipGrid
        allTags={allTags}
        selected={selected}
        onTagToggle={handleTagToggle}
      />
      
      {selected.length === 0 && (
        <p className="text-sm text-gray-500 mt-3">
          Click on tags to filter blog posts. Multiple tags can be selected.
        </p>
      )}
    </div>
  );
};
