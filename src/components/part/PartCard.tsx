import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { builtInExams } from '../../data/exams';
import { Card } from '../ui/Card';
import { ProgressRing } from './ProgressRing';
import { t as bt } from '../../utils/content';
import type { ExamPart } from '../../types';

interface PartCardProps {
  part: ExamPart;
  examId: string;
  index: number;
}

export function PartCard({ part, examId, index }: PartCardProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { getCompletionStats } = useProgress();

  const stats = getCompletionStats(`${examId}.${part.id}`, builtInExams);

  return (
    <Card
      hover
      onClick={() => navigate(`/exam/${examId}/part/${part.id}`)}
      className="flex items-center gap-4"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
        {index + 1}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-text truncate">{bt(part.name, lang)}</h3>
        <p className="text-sm text-text-muted mt-0.5">
          {t('exam.topicsCompleted', { completed: stats.completed, total: stats.total })}
        </p>
      </div>
      <ProgressRing completed={stats.completed} total={stats.total} />
    </Card>
  );
}
