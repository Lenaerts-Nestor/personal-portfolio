import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'; // Use the consolidated CSS file
import App from './App.tsx';
import { I18nProvider } from './components/shared/i18nContext';
import { BrowserRouter } from 'react-router-dom';

const Root = () => (
  <React.StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </React.StrictMode>
);

createRoot(document.getElementById('root')!).render(<Root />);
