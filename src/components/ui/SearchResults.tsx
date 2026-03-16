import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import type { SearchEntry } from '../../types';

interface SearchResultsProps {
  results: SearchEntry[];
  isOpen: boolean;
  onClose: () => void;
}

export function SearchResults({ results, isOpen, onClose }: SearchResultsProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full start-0 end-0 mt-1 bg-white rounded-xl border border-border shadow-lg z-50 max-h-80 overflow-y-auto">
      {results.length === 0 ? (
        <div className="p-4 text-sm text-text-muted text-center">
          {t('search.noResults')}
        </div>
      ) : (
        <div className="py-1">
          {results.map((entry) => (
            <button
              key={entry.path}
              onClick={() => {
                navigate(entry.path);
                onClose();
              }}
              className="w-full text-start px-4 py-2.5 hover:bg-surface-dark transition-colors flex flex-col gap-0.5"
            >
              <span className="text-sm font-medium text-text">
                {lang === 'ar' ? entry.nameAr : entry.nameDe.charAt(0).toUpperCase() + entry.nameDe.slice(1)}
              </span>
              <span className="text-xs text-text-muted">
                {entry.examId.toUpperCase()} &rsaquo; {entry.partId} &rsaquo; {entry.groupId}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
