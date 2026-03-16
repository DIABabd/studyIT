import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { builtInExams } from '../../data/exams';
import { Card } from '../ui/Card';
import { ProgressRing } from '../part/ProgressRing';
import { t as bt } from '../../utils/content';
import type { Exam } from '../../types';

interface ExamCardProps {
  exam: Exam;
}

export function ExamCard({ exam }: ExamCardProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { getCompletionStats } = useProgress();

  const stats = getCompletionStats(exam.id, builtInExams);

  return (
    <Card
      hover
      onClick={() => navigate(`/exam/${exam.id}`)}
      className="flex flex-col items-center text-center gap-3 min-h-[200px] justify-center"
    >
      <span className="text-4xl">{exam.icon}</span>
      <div>
        <h3 className="text-lg font-bold text-text">{bt(exam.name, lang)}</h3>
        <p className="text-sm text-text-muted mt-1">{bt(exam.description, lang)}</p>
      </div>
      {!exam.isPlaceholder && stats.total > 0 && (
        <div className="flex flex-col items-center gap-1">
          <ProgressRing completed={stats.completed} total={stats.total} size={40} />
          <span className="text-xs text-text-muted">
            {t('home.progress', { completed: stats.completed, total: stats.total })}
          </span>
        </div>
      )}
      {exam.isPlaceholder && (
        <span className="text-xs text-text-muted italic">{t('home.placeholder')}</span>
      )}
    </Card>
  );
}
