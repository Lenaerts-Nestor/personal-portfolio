import type React from 'react';
import { useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { WeeklyModalProps } from '../../interface/blog';


export const WeeklyModal: React.FC<WeeklyModalProps> = ({
  weeksArr,
  openIdx,
  closeModal,
  goTo,
  t,
  animating,
  contentRef,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleOverlayClick,
  handleContentScroll,
}) => {
  useEffect(() => {
    if (openIdx !== null) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, Number.parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [openIdx]);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goTo(-1);
      if (e.key === 'ArrowRight') goTo(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIdx, animating, closeModal, goTo]);

  if (openIdx === null || !weeksArr[openIdx]) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
      onClick={handleOverlayClick}
    >
      <div
        className='relative w-[95vw] max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden'
        style={{ maxHeight: '85vh' }}
      >
        <div className='relative p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50'>
          <button
            className='absolute right-4 top-4 text-red-500 hover:text-red-600 transition-colors'
            onClick={closeModal}
            aria-label={t('blog.dailyUpdates.close')}
          >
            <X className='w-6 h-6 stroke-[2.5]' />
          </button>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-full bg-purple-100 text-purple-600'>
              <Calendar className='w-5 h-5' />
            </div>
            <div>
              <h2 className='text-2xl font-bold text-purple-700'>
                {weeksArr[openIdx].title}
              </h2>
              <div className='text-indigo-600 font-medium text-sm'>
                {weeksArr[openIdx].days && weeksArr[openIdx].days.length > 0
                  ? weeksArr[openIdx].days.map((d: any) => d.date).join(', ')
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div
          className='relative overflow-hidden'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {animating && (
            <div className='loading-dots-container'>
              <div className='loading-dot'></div>
              <div className='loading-dot'></div>
              <div className='loading-dot'></div>
            </div>
          )}

          <div className='relative overflow-hidden'>
            <div
              ref={contentRef}
              onScroll={handleContentScroll}
              className={`p-6 overflow-y-auto transition-opacity duration-300 ease-in-out ${
                animating ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                maxHeight: '60vh',
              }}
            >
              <div className='prose prose-purple max-w-none text-gray-700'>
                <p className='leading-relaxed'>{weeksArr[openIdx].overview}</p>
                <ul className='mt-4'>
                  {weeksArr[openIdx].days &&
                    weeksArr[openIdx].days.map((day: any, i: number) => (
                      <li key={i} className='mb-2'>
                        <span className='font-semibold'>{day.date}:</span>{' '}
                        {day.content}
                      </li>
                    ))}
                </ul>
              </div>
              <div className='scroll-indicator-container'>
                <div
                  className='scroll-indicator opacity-0 transition-opacity duration-300 flex justify-center mt-4'
                  ref={(el) => {
                    if (el) {
                      const content = contentRef.current;
                      if (content) {
                        setTimeout(() => {
                          if (content.scrollHeight > content.clientHeight) {
                            el.classList.remove('opacity-0');
                            el.classList.add('opacity-100');
                          }
                        }, 100);
                      }
                    }
                  }}
                >
                  <div className='flex flex-col items-center'>
                    <div className='w-10 h-1.5 bg-purple-300 rounded-full animate-pulse mb-1'></div>
                    <span className='text-xs text-purple-400'>
                      Scroll for more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-100 p-4 flex justify-between items-center bg-gray-50'>
          <button
            className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
              openIdx > 0
                ? 'text-purple-600 hover:bg-purple-100 hover:scale-105'
                : 'text-gray-300 cursor-not-allowed'
            }`}
            onClick={() => goTo(-1)}
            disabled={openIdx === 0 || animating}
          >
            <ChevronLeft className='w-4 h-4' />
            <span className='text-sm font-medium'>
              {t('navigation.previous') || 'Vorige'}
            </span>
          </button>
          <div className='text-sm text-gray-500 flex items-center'>
            <div className='flex space-x-1'>
              {weeksArr.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === openIdx ? 'bg-purple-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
              openIdx < weeksArr.length - 1
                ? 'text-purple-600 hover:bg-purple-100 hover:scale-105'
                : 'text-gray-300 cursor-not-allowed'
            }`}
            onClick={() => goTo(1)}
            disabled={openIdx === weeksArr.length - 1 || animating}
          >
            <span className='text-sm font-medium'>
              {t('navigation.next') || 'Volgende'}
            </span>
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
};
