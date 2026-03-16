import { useTranslation } from 'react-i18next';

interface ProgressBadgeProps {
  completed: boolean;
}

export function ProgressBadge({ completed }: ProgressBadgeProps) {
  const { t } = useTranslation();

  if (completed) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {t('topic.completed')}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center text-xs font-medium text-text-muted bg-surface-dark px-2 py-0.5 rounded-full">
      {t('topic.notCompleted')}
    </span>
  );
}
