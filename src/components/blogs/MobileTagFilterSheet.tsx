import React, { useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Filter } from 'lucide-react';
import { TagChipGrid } from './TagChipGrid';

interface MobileTagFilterSheetProps {
  allTags: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MobileTagFilterSheet: React.FC<MobileTagFilterSheetProps> = ({
  allTags,
  selected,
  onChange,
  isOpen,
  onOpenChange
}) => {
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

  // Handle ESC key to close sheet
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpenChange]);

  return (
    <>
      {/* Fixed filter button - only visible on mobile */}
      <button
        onClick={() => onOpenChange(true)}
        className="fixed bottom-4 right-4 z-40 md:hidden inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-white shadow-lg hover:bg-violet-700 transition-colors"
        aria-label="Open tag filters"
      >
        <Filter className="w-5 h-5" />
        <span className="font-medium">Filter</span>
        {selected.length > 0 && (
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-violet-800 rounded-full">
            {selected.length}
          </span>
        )}
      </button>

      {/* Bottom sheet dialog */}
      <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          {/* Backdrop */}
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 md:hidden" />
          
          {/* Sheet content */}
          <Dialog.Content
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-slate-800 rounded-t-3xl shadow-2xl"
            style={{ height: '75vh' }}
            aria-describedby="filter-description"
          >
            {/* Header with close button and clear all */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-purple-600" />
                <Dialog.Title className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Filter by Tags
                </Dialog.Title>
                {selected.length > 0 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    {selected.length} active
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                {selected.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 px-3 py-1.5 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    aria-label="Clear all selected filters"
                  >
                    Clear all
                  </button>
                )}
                
                <Dialog.Close asChild>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close filter panel"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </Dialog.Close>
              </div>
            </div>

            {/* Scrollable content area */}
            <div className="p-4 overflow-y-auto" style={{ height: 'calc(75vh - 80px)' }}>
              <p id="filter-description" className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Select tags to filter blog posts. Multiple tags can be selected.
              </p>
              
              <TagChipGrid
                allTags={allTags}
                selected={selected}
                onTagToggle={handleTagToggle}
              />
              
              {/* Extra padding at bottom for comfortable scrolling */}
              <div className="h-4" />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
