import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { I18nProvider } from './components/shared/i18nContext';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/shared/navbar/navbar';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/Blog', label: 'Blog' },
];

const Root = () => (
  <React.StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <Navbar menuItems={menuItems} />
        <App />
      </BrowserRouter>
    </I18nProvider>
  </React.StrictMode>
);

createRoot(document.getElementById('root')!).render(<Root />);
