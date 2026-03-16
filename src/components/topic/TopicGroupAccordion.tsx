import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { builtInExams } from '../../data/exams';
import { TopicItem } from './TopicItem';
import { t as bt } from '../../utils/content';
import type { TopicGroup } from '../../types';

interface TopicGroupAccordionProps {
  group: TopicGroup;
  examId: string;
  partId: string;
  index: number;
  defaultOpen?: boolean;
}

export function TopicGroupAccordion({ group, examId, partId, index, defaultOpen = false }: TopicGroupAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { lang } = useLanguage();
  const { getCompletionStats } = useProgress();

  const prefix = `${examId}.${partId}.${group.id}`;
  const stats = getCompletionStats(prefix, builtInExams);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-dark transition-colors text-start"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-text-muted transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`}
        >
          <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
          {index + 1}
        </span>
        <span className="flex-1 font-medium text-sm text-text truncate">
          {bt(group.name, lang)}
        </span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${
          stats.completed === stats.total && stats.total > 0
            ? 'bg-secondary/10 text-secondary'
            : 'bg-surface-dark text-text-muted'
        }`}>
          {stats.completed}/{stats.total}
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-border">
          {group.topics.map((topic) => (
            <TopicItem
              key={topic.id}
              topic={topic}
              examId={examId}
              partId={partId}
              groupId={group.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
