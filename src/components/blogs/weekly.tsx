'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Example data structure for weeks (replace with your real data)
const weeks = [
  {
    title: 'Week 1',
    dates: '5 - 9 Mei',
    summary:
      'Deze week heb ik me gefocust op het leren van de AmoDrive coding architectuur, het begrijpen van de projectstructuur en het verbeteren van mijn coderstijl, met de hulp van mijn seniors.',
    details:
      "Deze week heb ik mijn weekenden goed besteed aan zelfstudie over React Query en de implementatie ervan in AmoTrack. Daarnaast heb ik onderzoek gedaan naar testscenario's en mogelijke optimalisaties voor zowel AmoDrive als AmoTrack. Binnen AmoTrack zelf heb ik oude code opgeschoond, role checks voor de sidebar geïmplementeerd en ben ik verder gegaan met de login-functionaliteit en het toepassen van React Query voor individueel ingelogde gebruikers. Ook heb ik de creatie van timesheets geüpdatet op basis van feedback, de project-details box gestyled en de rollen verder verfijnd. Een week vol technische vooruitgang!",
  },
  // ...add more weeks here
];

export const WeeklyBlog = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | 'none'>('none');

  const openModal = (idx: number) => {
    setOpenIdx(idx);
    setAnimating(true);
    setDirection('none');
    setTimeout(() => setAnimating(false), 300);
  };

  const closeModal = () => {
    setAnimating(true);
    setTimeout(() => {
      setOpenIdx(null);
      setAnimating(false);
    }, 300);
  };

  const goTo = (dir: -1 | 1) => {
    if (openIdx === null) return;
    const next = openIdx + dir;
    if (next >= 0 && next < weeks.length) {
      setAnimating(true);
      setDirection(dir === 1 ? 'next' : 'prev');
      setTimeout(() => {
        setOpenIdx(next);
        setAnimating(false);
      }, 300);
    }
  };

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  // Keyboard close
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goTo(-1);
      if (e.key === 'ArrowRight') goTo(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIdx]);

  return (
    <section className='py-16 min-h-[60vh]'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4'>
            Mijn Stage Reis
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4 rounded-full'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Volg mijn avonturen en lessen tijdens mijn stage bij het bedrijf
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {weeks.map((week, idx) => (
            <div
              key={week.title}
              className='rounded-xl border border-purple-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group'
              onClick={() => openModal(idx)}
            >
              <div className='border-b border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50 p-4 flex items-center gap-2'>
                <div className='p-2 rounded-full bg-purple-100 text-purple-600'>
                  <Calendar className='w-5 h-5' />
                </div>
                <h3 className='text-lg font-bold text-purple-700'>
                  {week.title}
                </h3>
              </div>
              <div className='p-5'>
                <div className='text-indigo-600 font-medium text-sm mb-2'>
                  {week.dates}
                </div>
                <div className='text-gray-700 text-sm line-clamp-3 mb-3'>
                  {week.summary}
                </div>
                <div className='flex items-center text-purple-600 font-medium text-sm mt-auto group-hover:text-indigo-600 transition-colors'>
                  <span>Lees meer</span>
                  <ChevronRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openIdx !== null && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300'
          onClick={handleOverlayClick}
          style={{ opacity: animating ? 0 : 1 }}
        >
          <div
            className={`relative w-[95vw] max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            } ${
              direction === 'next'
                ? animating
                  ? 'translate-x-10'
                  : 'translate-x-0'
                : direction === 'prev'
                ? animating
                  ? '-translate-x-10'
                  : 'translate-x-0'
                : ''
            }`}
            style={{ maxHeight: '85vh' }}
          >
            {/* Header */}
            <div className='relative p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50'>
              <button
                className='absolute right-4 top-4 text-gray-400 hover:text-purple-600 transition-colors'
                onClick={closeModal}
                aria-label='Sluiten'
              >
                <X className='w-5 h-5' />
              </button>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-full bg-purple-100 text-purple-600'>
                  <Calendar className='w-5 h-5' />
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-purple-700'>
                    {weeks[openIdx].title}
                  </h2>
                  <div className='text-indigo-600 font-medium text-sm'>
                    {weeks[openIdx].dates}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className='p-6 overflow-y-auto'>
              <div className='prose prose-purple max-w-none text-gray-700'>
                <p className='leading-relaxed'>{weeks[openIdx].details}</p>
              </div>
            </div>

            {/* Footer with navigation */}
            <div className='border-t border-gray-100 p-4 flex justify-between items-center bg-gray-50'>
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                  openIdx > 0
                    ? 'text-purple-600 hover:bg-purple-50'
                    : 'text-gray-300 cursor-not-allowed'
                }`}
                onClick={() => goTo(-1)}
                disabled={openIdx === 0}
              >
                <ChevronLeft className='w-4 h-4' />
                <span className='text-sm font-medium'>Vorige</span>
              </button>

              <div className='text-sm text-gray-500'>
                {openIdx + 1} / {weeks.length}
              </div>

              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                  openIdx < weeks.length - 1
                    ? 'text-purple-600 hover:bg-purple-50'
                    : 'text-gray-300 cursor-not-allowed'
                }`}
                onClick={() => goTo(1)}
                disabled={openIdx === weeks.length - 1}
              >
                <span className='text-sm font-medium'>Volgende</span>
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
