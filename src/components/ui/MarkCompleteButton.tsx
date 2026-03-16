import { useTranslation } from 'react-i18next';

interface MarkCompleteButtonProps {
  completed: boolean;
  onToggle: () => void;
}

export function MarkCompleteButton({ completed, onToggle }: MarkCompleteButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={onToggle}
      className={`w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
        completed
          ? 'bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20'
          : 'bg-primary text-white hover:bg-primary-dark shadow-sm'
      }`}
    >
      {completed ? (
        <>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9L7.5 12.75L14.25 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('topic.markIncomplete')}
        </>
      ) : (
        <>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="6.75" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          {t('topic.markComplete')}
        </>
      )}
    </button>
  );
}
