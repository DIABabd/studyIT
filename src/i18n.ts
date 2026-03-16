import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de/translation.json';
import ar from './locales/ar/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    ar: { translation: ar },
  },
  lng: localStorage.getItem('studyit-lang') || 'de',
  fallbackLng: 'de',
  interpolation: { escapeValue: false },
});

// Set initial dir
const savedLang = localStorage.getItem('studyit-lang') || 'de';
document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = savedLang;

export default i18n;
