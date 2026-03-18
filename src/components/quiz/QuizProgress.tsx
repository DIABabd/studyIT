import { useTranslation } from 'react-i18next';

interface QuizProgressProps {
  current: number;
  total: number;
  score: number;
  streak: number;
  showStreak?: boolean;
}

export function QuizProgress({ current, total, score, streak, showStreak = true }: QuizProgressProps) {
  const { t } = useTranslation();
  const progress = total > 0 ? ((current) / total) * 100 : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-text-muted">
          {t('quiz.question')} {current + 1} {t('quiz.of')} {total}
        </span>
        <div className="flex items-center gap-4">
          <span className="font-medium text-primary">
            {t('quiz.score')}: {score}
          </span>
          {showStreak && streak > 0 && (
            <span className="font-medium text-amber-500">
              🔥 {streak}
            </span>
          )}
        </div>
      </div>
      <div className="w-full h-2 bg-surface-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
