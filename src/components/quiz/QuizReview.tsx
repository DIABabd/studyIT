import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { t as tContent } from '../../utils/content';
import type { QuizQuestion, QuizAnswer } from '../../data/quiz/types';

interface QuizReviewProps {
  questions: QuizQuestion[];
  answers: QuizAnswer[];
}

export function QuizReview({ questions, answers }: QuizReviewProps) {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-text">{t('quiz.reviewAnswers')}</h3>

      {questions.map((question, index) => {
        const answer = answers.find((a) => a.questionId === question.id);
        const isCorrect = answer?.isCorrect ?? false;
        const selectedAnswers = answer?.selectedAnswers ?? [];
        const wasSkipped = !answer || selectedAnswers.length === 0;

        return (
          <div
            key={question.id}
            className={`p-5 rounded-2xl border-2 ${
              wasSkipped
                ? 'border-gray-200 bg-gray-50'
                : isCorrect
                  ? 'border-green-200 bg-green-50/50'
                  : 'border-red-200 bg-red-50/50'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-text-muted">
                #{index + 1}
              </span>
              <span className="text-sm">
                {wasSkipped ? '⏭️' : isCorrect ? '✅' : '❌'}
              </span>
              <DifficultyDot difficulty={question.difficulty} />
            </div>

            <p className="font-medium text-text mb-3 whitespace-pre-line">
              {tContent(question.question, lang)}
            </p>

            {question.type !== 'flashcard' && (
              <div className="space-y-2 mb-3">
                {question.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers.includes(optIdx);
                  const isCorrectOption = question.correctAnswers.includes(optIdx);

                  let style = 'border-border bg-white';
                  if (isCorrectOption) style = 'border-green-300 bg-green-50';
                  if (isSelected && !isCorrectOption) style = 'border-red-300 bg-red-50';

                  return (
                    <div
                      key={optIdx}
                      className={`px-4 py-2.5 rounded-lg border ${style} flex items-center gap-2`}
                    >
                      <span className="text-xs font-bold text-text-muted w-5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 text-sm">{tContent(option, lang)}</span>
                      {isCorrectOption && <span className="text-green-600 text-xs">✓</span>}
                      {isSelected && !isCorrectOption && <span className="text-red-600 text-xs">✗</span>}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="p-3 rounded-lg bg-white/80 border border-border">
              <span className="text-xs font-medium text-text-muted">{t('quiz.explanation')}: </span>
              <span className="text-sm text-text">{tContent(question.explanation, lang)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DifficultyDot({ difficulty }: { difficulty: string }) {
  const color: Record<string, string> = {
    easy: 'text-green-500',
    medium: 'text-amber-500',
    hard: 'text-red-500',
  };
  return <span className={`text-xs ${color[difficulty] || ''}`}>●</span>;
}
