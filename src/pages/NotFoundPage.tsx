import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="text-center py-20">
      <span className="text-6xl block mb-4">🔍</span>
      <h1 className="text-2xl font-bold text-text mb-2">{t('common.notFound')}</h1>
      <p className="text-text-muted mb-6">{t('common.notFoundDesc')}</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm"
      >
        {t('common.goHome')}
      </Link>
    </div>
  );
}
