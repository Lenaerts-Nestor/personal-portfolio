import type React from 'react';
import { useState, useRef, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { useI18n } from '../shared/i18nContext';
import { WeeklyModal } from './weeklyModal';
import { CardHeader } from './CardHeader';
import { TagFilter } from './TagFilter';

export const WeeklyBlog = () => {
  const { t } = useI18n();
  const weeksObj = t('blog.dailyUpdates');
  const weekKeys =
    weeksObj && typeof weeksObj === 'object'
      ? Object.keys(weeksObj).filter((k) => k.startsWith('week'))
      : [];
  const weeksArr = weekKeys.map((key) => (weeksObj as any)[key]);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from all weeks
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    weeksArr.forEach(week => {
      if (week.tags) {
        week.tags.forEach((tag: string) => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, [weeksArr]);

  // Filter weeks based on selected tags
  const filteredWeeks = useMemo(() => {
    if (selectedTags.length === 0) {
      return weeksArr;
    }
    return weeksArr.filter(week => 
      week.tags && week.tags.some((tag: string) => selectedTags.includes(tag))
    );
  }, [weeksArr, selectedTags]);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const minSwipeDistance = 50;
  const openModal = (week: any) => {
    // Find the original index in the full weeksArr
    const originalIdx = weeksArr.findIndex(w => w.title === week.title);
    setOpenIdx(originalIdx);
  };

  const closeModal = () => {
    setOpenIdx(null);
  };

  const goTo = (dir: -1 | 1) => {
    if (openIdx === null || animating) return;
    const next = openIdx + dir;
    if (next >= 0 && next < weeksArr.length) {
      setAnimating(true);
      setOpenIdx(next);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || openIdx === null || animating) return;

    const currentX = e.touches[0].clientX;
    const diff = touchStartX.current - currentX;

    if (contentRef.current && Math.abs(diff) < 150) {
      contentRef.current.style.transform = `translateX(${-diff}px)`;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || openIdx === null || animating) {
      return;
    }

    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (contentRef.current) {
      contentRef.current.style.transform = '';
    }

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0 && openIdx < weeksArr.length - 1) {
        goTo(1);
      } else if (diff < 0 && openIdx > 0) {
        goTo(-1);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const handleContentScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollIndicator = target.querySelector(
      '.scroll-indicator-container .scroll-indicator'
    );
    if (scrollIndicator) {
      if (target.scrollTop > 20) {
        scrollIndicator.classList.add('opacity-0');
      } else if (target.scrollHeight > target.clientHeight) {
        scrollIndicator.classList.remove('opacity-0');
      }
    }
  };

  return (
    <section className='py-16 min-h-[60vh] overflow-x-hidden'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4'>
            {t('blog.title')}
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4 rounded-full'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            {t('blog.description')}
          </p>        </div>

        {/* Tag Filter Component */}
        <TagFilter
          allTags={allTags}
          selected={selectedTags}
          onChange={setSelectedTags}
        />        {/* TODO: UX Improvement #2 - Add keyboard shortcuts for filter management 
             - Escape key to clear all filters
             - Ctrl/Cmd + A to select all tags  
             - Arrow keys to navigate between tags */}
        
        {/* TODO: UX Improvement #3 - Add smooth animations for filter changes
             - Fade out/in effect when posts are filtered
             - Staggered animation for tag chips
             - Smooth count updates in the active filter badge */}

        {filteredWeeks.length === 0 && selectedTags.length > 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No posts found
              </h3>
              <p className="text-gray-600 mb-4">
                No blog posts match your current filter selection.
              </p>
              <button
                onClick={() => setSelectedTags([])}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {filteredWeeks.map((week, idx) => (              <div
                key={week.title || idx}
                className='rounded-xl border border-purple-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group'
                onClick={() => openModal(week)}
              >
                {/* Using CardHeader component to prevent tag overlap */}
                <CardHeader
                  title={week.title || `Week ${idx + 1}`}
                  subtitle={week.days && week.days.length > 0
                    ? week.days.map((d: any) => d.date).join(', ')
                    : ''}
                  tags={week.tags || []}
                  variant="card"
                />
                
                <div className='p-5'>
                  <div className='text-gray-700 text-sm line-clamp-3 mb-3'>
                    {week.overview}
                  </div>
                  <div className='flex items-center text-purple-600 font-medium text-sm mt-auto group-hover:text-indigo-600 transition-colors'>
                    <span>{t('blog.readMore')}</span>
                    <ChevronRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <WeeklyModal
        weeksArr={weeksArr}
        openIdx={openIdx}
        closeModal={closeModal}
        goTo={goTo}
        t={t}
        animating={animating}
        setAnimating={setAnimating}
        contentRef={contentRef}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        handleOverlayClick={handleOverlayClick}
        handleContentScroll={handleContentScroll}
      />
    </section>
  );
};
