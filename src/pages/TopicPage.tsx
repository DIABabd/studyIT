import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { findTopicByCompoundId } from '../data/exams';
import { TopicContent } from '../components/topic/TopicContent';
import { MarkCompleteButton } from '../components/ui/MarkCompleteButton';
import { t as bt } from '../utils/content';
import { useTranslation } from 'react-i18next';

export function TopicPage() {
  const { examId, partId, topicId } = useParams<{
    examId: string;
    partId: string;
    topicId: string;
  }>();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isCompleted, toggleComplete } = useProgress();

  const result = findTopicByCompoundId(examId || '', partId || '', topicId || '');
  if (!result) return <Navigate to="/" replace />;

  const { group, topic } = result;
  const topicPath = `${examId}.${partId}.${group.id}.${topic.id}`;
  const completed = isCompleted(topicPath);

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors mb-3"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="rtl:rotate-180">
            <path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('common.back')}
        </button>
        <h1 className="text-2xl font-bold text-text">{bt(topic.name, lang)}</h1>
        <p className="text-sm text-text-muted mt-1">{bt(group.name, lang)}</p>
      </div>

      <TopicContent content={topic.content} />

      <div className="mt-8 pb-8">
        <MarkCompleteButton completed={completed} onToggle={() => toggleComplete(topicPath)} />
      </div>
    </div>
  );
}
