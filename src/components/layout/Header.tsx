import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../ui/LanguageToggle';
import { SearchBar } from '../ui/SearchBar';
import { SearchResults } from '../ui/SearchResults';
import { useSearch } from '../../hooks/useSearch';

export function Header() {
  const { t } = useTranslation();
  const { query, results, isOpen, search, close } = useSearch();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl font-bold text-primary">📘</span>
          <span className="text-lg font-bold text-text hidden sm:inline">
            {t('app.title')}
          </span>
        </Link>

        <div className="flex-1 max-w-sm relative ms-auto">
          <SearchBar value={query} onChange={search} />
          <SearchResults results={results} isOpen={isOpen} onClose={close} />
        </div>

        <LanguageToggle />
      </div>
    </header>
  );
}
