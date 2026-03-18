import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { t as tContent } from '../../utils/content';
import { QuizFeedback } from './QuizFeedback';
import { useQuizStore } from '../../hooks/useQuizStore';
import type { QuizQuestion } from '../../data/quiz/types';
import type { QuizMode } from '../../data/quiz/types';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (selectedAnswers: number[], isCorrect: boolean) => void;
  showFeedback: boolean;
  mode: QuizMode;
  answered: boolean;
  selectedAnswers: number[];
}

export function QuizCard({
  question,
  onAnswer,
  showFeedback,
  mode,
  answered,
  selectedAnswers,
}: QuizCardProps) {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { isFavorite, toggleFavorite } = useQuizStore();
  const [flipped, setFlipped] = useState(false);
  const [localSelected, setLocalSelected] = useState<number[]>(selectedAnswers);

  const isFlashcard = question.type === 'flashcard';
  const isFav = isFavorite(question.id);

  function handleOptionClick(index: number) {
    if (answered && mode !== 'learning') return;
    if (answered) return;

    const newSelected = [index];
    setLocalSelected(newSelected);

    const isCorrect = arraysEqual(newSelected, question.correctAnswers);
    onAnswer(newSelected, isCorrect);
  }

  function handleReveal() {
    if (!answered) {
      onAnswer([], false);
    }
  }

  if (isFlashcard) {
    return (
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <DifficultyBadge difficulty={question.difficulty} />
            <span className="text-xs text-text-muted px-2 py-0.5 bg-surface-dark rounded-full">
              {t('quiz.flashcard')}
            </span>
          </div>
          <button
            onClick={() => toggleFavorite(question.id)}
            className="text-lg hover:scale-110 transition-transform"
          >
            {isFav ? '⭐' : '☆'}
          </button>
        </div>

        <div
          onClick={() => setFlipped(!flipped)}
          className="min-h-[200px] flex items-center justify-center p-8 rounded-2xl border-2 border-border bg-white cursor-pointer hover:shadow-md transition-all duration-300 select-none"
        >
          <p className="text-lg text-center font-medium text-text">
            {flipped
              ? tContent(question.explanation, lang)
              : tContent(question.question, lang)}
          </p>
        </div>

        <button
          onClick={() => setFlipped(!flipped)}
          className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
        >
          {t('quiz.flipCard')}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <DifficultyBadge difficulty={question.difficulty} />
          <span className="text-xs text-text-muted px-2 py-0.5 bg-surface-dark rounded-full">
            {question.type === 'true-false' ? t('quiz.trueFalse') : t('quiz.multipleChoice')}
          </span>
        </div>
        <button
          onClick={() => toggleFavorite(question.id)}
          className="text-lg hover:scale-110 transition-transform flex-shrink-0"
        >
          {isFav ? '⭐' : '☆'}
        </button>
      </div>

      <h3 className="text-lg font-semibold text-text leading-relaxed whitespace-pre-line">
        {tContent(question.question, lang)}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = localSelected.includes(index);
          const isCorrectOption = question.correctAnswers.includes(index);
          const showResult = answered && showFeedback;

          let optionStyle = 'border-border hover:border-primary/50 hover:bg-primary/5';
          if (isSelected && !showResult) {
            optionStyle = 'border-primary bg-primary/10';
          }
          if (showResult && isCorrectOption) {
            optionStyle = 'border-green-400 bg-green-50';
          }
          if (showResult && isSelected && !isCorrectOption) {
            optionStyle = 'border-red-400 bg-red-50';
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={answered}
              className={`w-full p-4 rounded-xl border-2 text-start transition-all duration-200 ${optionStyle} ${
                answered ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                    isSelected
                      ? showResult
                        ? isCorrectOption
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'bg-primary border-primary text-white'
                      : showResult && isCorrectOption
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-border text-text-muted'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-text flex-1">{tContent(option, lang)}</span>
              </div>
            </button>
          );
        })}
      </div>

      {mode === 'learning' && !answered && (
        <button
          onClick={handleReveal}
          className="w-full py-2.5 rounded-xl border-2 border-dashed border-text-muted/30 text-text-muted hover:border-primary/50 hover:text-primary transition-colors"
        >
          {t('quiz.revealAnswer')}
        </button>
      )}

      {showFeedback && answered && (
        <QuizFeedback
          isCorrect={arraysEqual(localSelected, question.correctAnswers)}
          explanation={question.explanation}
          show={true}
        />
      )}
    </div>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-amber-100 text-amber-700',
    hard: 'bg-red-100 text-red-700',
  };
  const labels: Record<string, string> = {
    easy: '●',
    medium: '●●',
    hard: '●●●',
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors[difficulty] || ''}`}>
      {labels[difficulty] || difficulty}
    </span>
  );
}

function arraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  const sorted1 = [...a].sort();
  const sorted2 = [...b].sort();
  return sorted1.every((val, idx) => val === sorted2[idx]);
}
