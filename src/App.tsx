import { AppRoutes } from './routes';
import './style.css'; // Use the consolidated CSS file
import { Navbar } from './components/shared/navbar/navbar';

// Define the navbar props
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
      {/* Add padding-top to prevent content from being hidden behind the fixed navbar */}
      <div className='pt-[64px]'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
