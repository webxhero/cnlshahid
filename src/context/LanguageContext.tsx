import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'bn' || saved === 'en') return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      if (language === 'bn') {
        document.body.classList.add('lang-bn');
      } else {
        document.body.classList.remove('lang-bn');
      }
      localStorage.setItem('portfolio-lang', language);
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: TRANSLATIONS[language] || TRANSLATIONS.en,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
