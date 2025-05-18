import { CustomButton } from '../../shared/button';
import { useI18n } from '../../shared/i18nContext'; // Import the useI18n hook

export const IntroSection = () => {
  const { t } = useI18n(); // Get the t function from the hook

  return (
    <section className='py-16 sm:py-24'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6'>
          {t('home.welcome')}
        </h1>
        <p className='mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10'>
          {t('home.description')}
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          <CustomButton text={t('home.blogButton')} variant='primary' />
          <CustomButton text={t('home.aboutButton')} variant='secondary' />
        </div>
      </div>
    </section>
  );
};
