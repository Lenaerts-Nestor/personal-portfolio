import { AppRoutes } from './routes';
import './style.css';
import { Navbar } from './components/shared/navbar/navbar';

const navbarProps = {
  defaultLanguage: 'en',
  socials: [
    { platform: 'github', url: 'https://github.com/Lenaerts-Nestor' },
    {
      platform: 'linkedin',
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
