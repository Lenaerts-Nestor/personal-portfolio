import { CustomButton } from '../button';

export const IntroSection = () => {
  return (
    <section className='py-16 sm:py-24'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6'>
          Welkom bij mijn WPL-portfolio
        </h1>
        <p className='mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10'>
          Dit portfolio documenteert mijn stageverloop als onderdeel van het
          graduaat Programmeren aan de AP Hogeschool. Hier deel ik mijn
          ervaringen, leermomenten en groei tijdens het werkplekleren.
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          <CustomButton text='Lees blogberichten' variant='primary' />
          <CustomButton text='Over mij' variant='secondary' />
        </div>
      </div>
    </section>
  );
};
