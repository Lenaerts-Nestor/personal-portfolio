import React from 'react';
import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'nl';

interface I18nContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any; // Allow t to return any type (string, object, etc)
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

// Vite-specific way to load multiple modules
const translationsModules = import.meta.glob('../../i18n/*.json');

function getNested(obj: any, path: string) {
  return path
    .split('.')
    .reduce(
      (acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined),
      obj
    );
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<any>({});

  // Load translations dynamically
  React.useEffect(() => {
    const loadTranslations = async () => {
      const path = `../../i18n/${language}.json`;
      if (translationsModules[path]) {
        const mod = (await translationsModules[path]()) as any;
        setTranslations(mod.default || mod);
      } else {
        console.error(`Translation file not found: ${path}`);
        setTranslations({}); // Set to empty or default if not found
      }
    };
    loadTranslations();
  }, [language]);

  const t = (key: string) => {
    const value = getNested(translations, key);
    return value !== undefined ? value : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
