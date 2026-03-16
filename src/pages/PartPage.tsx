import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { findExam, findPart } from '../data/exams';
import { builtInExams } from '../data/exams';
import { TopicGroupAccordion } from '../components/topic/TopicGroupAccordion';
import { ProgressRing } from '../components/part/ProgressRing';
import { t as bt } from '../utils/content';
import { useTranslation } from 'react-i18next';

export function PartPage() {
  const { examId, partId } = useParams<{ examId: string; partId: string }>();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const { getCompletionStats } = useProgress();

  const exam = findExam(examId || '');
  const part = findPart(examId || '', partId || '');
  if (!exam || !part) return <Navigate to="/" replace />;

  const stats = getCompletionStats(`${examId}.${partId}`, builtInExams);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-text">{bt(part.name, lang)}</h1>
          <p className="text-sm text-text-muted mt-1">
            {t('exam.topicsCompleted', { completed: stats.completed, total: stats.total })}
          </p>
        </div>
        <ProgressRing completed={stats.completed} total={stats.total} size={56} />
      </div>

      <div className="space-y-3">
        {part.topicGroups.map((group, index) => (
          <TopicGroupAccordion
            key={group.id}
            group={group}
            examId={exam.id}
            partId={part.id}
            index={index}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
