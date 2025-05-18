import './App.css';
import { AppRoutes } from './routes';
import { Navbar } from './components/shared/navbar/navbar';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/About', label: 'About' },
  { path: '/Blog', label: 'Blog' },
];

function App() {
  return (
    <div className='min-h-screen min-w-screen '>
      <Navbar menuItems={menuItems} />
      <AppRoutes />
    </div>
  );
}

export default App;
