import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium rounded-lg border border-border hover:bg-surface-dark transition-colors text-text-muted hover:text-text"
    >
      {t('lang.toggle')}
    </button>
  );
}
