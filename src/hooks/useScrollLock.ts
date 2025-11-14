import { useEffect } from 'react';

/**
 * useScrollLock - Lock body scroll when modal is open
 *
 * Prevents body scrolling when a modal or overlay is open.
 * Automatically restores scroll when component unmounts or isLocked becomes false.
 *
 * @param isLocked - Whether to lock scroll
 *
 * @example
 * function Modal({ isOpen }) {
 *   useScrollLock(isOpen);
 *
 *   if (!isOpen) return null;
 *   return <div>Modal content</div>;
 * }
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      // Save current scroll position
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Lock scroll
      document.body.style.overflow = 'hidden';

      // Prevent layout shift by adding padding for scrollbar width
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      // Restore scroll
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
}
