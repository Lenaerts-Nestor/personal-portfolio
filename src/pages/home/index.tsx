import { Navbar } from '../../components/shared/navbar/navbar';
import { IntroSection } from '../../components/shared/sections/main.intro';

export const Home = () => {
  const menuItems = [
    { path: '/Home', label: 'Home' },
    { path: '/About', label: 'Over mij' },
    { path: '/Blog', label: 'Blog' },
  ];

  const handleLanguageChange = (language: string) => {
    console.log(`Language changed to: ${language}`);
  };

  return (
    <>
      <Navbar
        menuItems={menuItems}
        defaultLanguage='en'
        onLanguageChange={handleLanguageChange}
        socials={[
          { platform: 'github', url: 'https://github.com/yourusername' },
          { platform: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
        ]}
      />
      <IntroSection />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-2xl font-bold'>Welcome to the Home Page</h1>
        <p className='mt-4 text-lg'>This is a simple example of a home page.</p>
      </div>
    </>
  );
};
