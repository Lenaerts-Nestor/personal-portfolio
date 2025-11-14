import { useState, useMemo } from 'react';
import type { WeekEntry } from '../interface/blog';

/**
 * useWeeklyFilter - Blog post filtering logic hook
 *
 * Manages tag-based filtering for weekly blog posts.
 * Extracts unique tags and filters posts based on selected tags.
 *
 * @param weeks - Array of week entries to filter
 * @param initialTags - Initial selected tags (default: [])
 * @returns Filtering state and actions
 *
 * @example
 * const { filteredWeeks, allTags, selectedTags, toggleTag, clearTags } = useWeeklyFilter(weeks);
 *
 * // Render tag filters
 * {allTags.map(tag => (
 *   <button onClick={() => toggleTag(tag)}>
 *     {tag}
 *   </button>
 * ))}
 */
export function useWeeklyFilter(
  weeks: WeekEntry[],
  initialTags: string[] = []
) {
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

  // Extract all unique tags from all weeks
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    weeks.forEach((week) => {
      if (week.tags) {
        week.tags.forEach((tag: string) => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, [weeks]);

  // Filter weeks based on selected tags
  const filteredWeeks = useMemo(() => {
    if (selectedTags.length === 0) {
      return weeks;
    }
    return weeks.filter(
      (week) =>
        week.tags && week.tags.some((tag: string) => selectedTags.includes(tag))
    );
  }, [weeks, selectedTags]);

  // Toggle a tag on/off
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all selected tags
  const clearTags = () => {
    setSelectedTags([]);
  };

  // Check if a tag is selected
  const isTagSelected = (tag: string) => selectedTags.includes(tag);

  // Set tags directly (useful for components that manage full array)
  const setTags = (tags: string[]) => setSelectedTags(tags);

  return {
    filteredWeeks,
    allTags,
    selectedTags,
    toggleTag,
    clearTags,
    isTagSelected,
    setTags,
  };
}
