// filepath: c:\Users\dewil\Documents\personal-portfolio\personal-project\src\components\shared\sections\main.intro.tsx

export const IntroSection = () => {
  return (
    <section className='py-16 sm:py-24'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6'>
          Welkom bij mijn WPL-portfolio
        </h1>
        <p className='mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10'>
          Dit portfolio documenteert mijn stageverloop als onderdeel van het
          graduaat Programmeren aan de AP Hogeschool. Hier deel ik mijn
          ervaringen, leermomenten en groei tijdens het werkplekleren.
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          <button className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity w-full sm:w-auto'>
            Lees blogberichten <span aria-hidden='true'>→</span>
          </button>
          <button className='border-indigo-600 text-indigo-600 hover:bg-indigo-600/10 dark:border-indigo-500 dark:text-indigo-500 dark:hover:bg-indigo-500/10 w-full sm:w-auto'>
            Over mij
          </button>
        </div>
      </div>
    </section>
  );
};
