import { useTranslation } from 'react-i18next';
import type { QuizMode } from '../../data/quiz/types';

interface QuizModeSelectorProps {
  value: QuizMode;
  onChange: (mode: QuizMode) => void;
}

const modes: { key: QuizMode; icon: string }[] = [
  { key: 'standard', icon: '📝' },
  { key: 'learning', icon: '📖' },
  { key: 'challenge', icon: '⚡' },
  { key: 'drill', icon: '🎯' },
];

export function QuizModeSelector({ value, onChange }: QuizModeSelectorProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {modes.map((mode) => (
        <button
          key={mode.key}
          onClick={() => onChange(mode.key)}
          className={`p-4 rounded-xl border-2 text-start transition-all duration-200 ${
            value === mode.key
              ? 'border-primary bg-primary/5 shadow-sm'
              : 'border-border hover:border-primary/30 hover:bg-surface-dark'
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{mode.icon}</span>
            <span className="font-semibold text-text">
              {t(`quiz.${mode.key}`)}
            </span>
          </div>
          <p className="text-sm text-text-muted">
            {t(`quiz.${mode.key}Desc`)}
          </p>
        </button>
      ))}
    </div>
  );
}
