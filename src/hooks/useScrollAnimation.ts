import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'slide-left' | 'slide-right' | 'stagger';
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    animationType = 'slide-left'
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial class based on animation type
    const initialClass = animationType === 'slide-right' 
      ? 'section-slide-in-right' 
      : animationType === 'stagger'
      ? 'section-stagger'
      : 'section-slide-in';
    
    element.classList.add(initialClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, animationType]);

  return elementRef;
};
