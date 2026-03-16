import { useTranslation } from 'react-i18next';

interface AddExamCardProps {
  onClick: () => void;
}

export function AddExamCard({ onClick }: AddExamCardProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-3 min-h-[200px] rounded-2xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-full bg-surface-dark group-hover:bg-primary/10 flex items-center justify-center transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted group-hover:text-primary transition-colors">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-sm font-medium text-text-muted group-hover:text-primary transition-colors">
        {t('home.addExam')}
      </span>
    </button>
  );
}
