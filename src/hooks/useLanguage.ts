import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export function useLanguage() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'de' | 'ar';
  const isRtl = lang === 'ar';

  const toggleLanguage = useCallback(() => {
    const newLang = lang === 'de' ? 'ar' : 'de';
    i18n.changeLanguage(newLang);
    localStorage.setItem('studyit-lang', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  }, [lang, i18n]);

  return { lang, isRtl, toggleLanguage };
}
