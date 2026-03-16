import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { t as bt } from '../../utils/content';
import type { Topic } from '../../types';

interface TopicItemProps {
  topic: Topic;
  examId: string;
  partId: string;
  groupId: string;
}

export function TopicItem({ topic, examId, partId, groupId }: TopicItemProps) {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isCompleted } = useProgress();

  const topicPath = `${examId}.${partId}.${groupId}.${topic.id}`;
  const completed = isCompleted(topicPath);
  const url = `/exam/${examId}/part/${partId}/topic/${groupId}--${topic.id}`;

  return (
    <button
      onClick={() => navigate(url)}
      className="w-full flex items-center gap-3 px-4 ps-12 py-2.5 hover:bg-surface-dark transition-colors text-start border-b border-border last:border-b-0"
    >
      <span className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        completed ? 'bg-secondary border-secondary' : 'border-border'
      }`}>
        {completed && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className={`flex-1 text-sm ${completed ? 'text-text-muted' : 'text-text'}`}>
        {bt(topic.name, lang)}
      </span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-muted/40 flex-shrink-0">
        <path d="M5 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
