import { useMemo, useState, useCallback } from 'react';
import { buildSearchIndex, searchTopics } from '../utils/search';
import { builtInExams } from '../data/exams';
import type { SearchEntry } from '../types';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const index = useMemo(() => buildSearchIndex(builtInExams), []);

  const results: SearchEntry[] = useMemo(
    () => searchTopics(index, query),
    [index, query]
  );

  const search = useCallback((q: string) => {
    setQuery(q);
    setIsOpen(q.length > 0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  return { query, results, isOpen, search, close };
}
