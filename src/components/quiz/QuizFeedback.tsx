import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { t as tContent } from '../../utils/content';
import type { BilingualText } from '../../types';

interface QuizFeedbackProps {
  isCorrect: boolean;
  explanation: BilingualText;
  show: boolean;
}

export function QuizFeedback({ isCorrect, explanation, show }: QuizFeedbackProps) {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  if (!show) return null;

  return (
    <div
      className={`mt-4 p-4 rounded-xl border-2 transition-all duration-300 ${
        isCorrect
          ? 'bg-green-50 border-green-200 text-green-800'
          : 'bg-red-50 border-red-200 text-red-800'
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{isCorrect ? '✅' : '❌'}</span>
        <span className="font-bold text-lg">
          {isCorrect ? t('quiz.correct') : t('quiz.incorrect')}
        </span>
      </div>
      <div>
        <span className="font-medium">{t('quiz.explanation')}: </span>
        <span>{tContent(explanation, lang)}</span>
      </div>
    </div>
  );
}
