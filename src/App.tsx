import { AppRoutes } from './routes';
import './style.css';
import { Navbar } from './components/shared/navbar/navbar';
import { SOCIAL_PLATFORMS } from './constants';

const navbarProps = {
  defaultLanguage: 'en',
  socials: [
    { platform: SOCIAL_PLATFORMS.GITHUB, url: 'https://github.com/Lenaerts-Nestor' },
    {
      platform: SOCIAL_PLATFORMS.LINKEDIN,
      url: 'https://www.linkedin.com/in/nestor-lenaerts/',
    },
  ],
};

function App() {
  return (
    <div className='min-h-screen min-w-screen'>
      <Navbar menuItems={[]} {...navbarProps} />
      <div className='pt-[64px]'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
