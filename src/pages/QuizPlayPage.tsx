import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { QuizCard } from '../components/quiz/QuizCard';
import { QuizProgress } from '../components/quiz/QuizProgress';
import { QuizTimer } from '../components/quiz/QuizTimer';
import { useQuizStore } from '../hooks/useQuizStore';
import { getItem, setItem } from '../utils/storage';
import type { QuizSession, QuizAnswer } from '../data/quiz/types';

const SESSION_KEY = 'studyit-quiz-session';

export function QuizPlayPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addWrongQuestion, removeWrongQuestion } = useQuizStore();
  const [session, setSession] = useState<QuizSession | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  useEffect(() => {
    const saved = getItem<QuizSession | null>(SESSION_KEY, null);
    if (!saved || saved.isFinished) {
      navigate('/quiz');
      return;
    }
    setSession(saved);
    // Determine if current question is already answered
    if (saved.answers.find((a) => a.questionId === saved.questions[saved.currentIndex]?.id)) {
      setAnswered(true);
    }
  }, [navigate]);

  const saveSession = useCallback((updated: QuizSession) => {
    setSession(updated);
    setItem(SESSION_KEY, updated);
  }, []);

  if (!session) return null;

  const currentQuestion = session.questions[session.currentIndex];
  const isLastQuestion = session.currentIndex === session.questions.length - 1;
  const mode = session.config.mode;
  const showFeedbackImmediately = mode === 'learning' || mode === 'standard';
  const currentAnswer = session.answers.find((a) => a.questionId === currentQuestion?.id);

  function handleAnswer(selectedAnswers: number[], isCorrect: boolean) {
    if (answered) return;
    setAnswered(true);

    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);

    const answer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswers,
      isCorrect,
      timeSpent,
    };

    const newStreak = isCorrect ? session!.streak + 1 : 0;
    const newBestStreak = Math.max(session!.bestStreak, newStreak);

    // Track wrong questions
    if (isCorrect) {
      removeWrongQuestion(currentQuestion.id);
    } else {
      addWrongQuestion(currentQuestion.id);
    }

    const updated: QuizSession = {
      ...session!,
      answers: [...session!.answers, answer],
      score: session!.score + (isCorrect ? 1 : 0),
      streak: newStreak,
      bestStreak: newBestStreak,
    };

    saveSession(updated);

    // In challenge mode, auto-advance after brief delay
    if (mode === 'challenge') {
      setTimeout(() => goNext(updated), 800);
    }
  }

  function goNext(currentSession?: QuizSession) {
    const s = currentSession || session!;
    if (s.currentIndex >= s.questions.length - 1) {
      finishQuiz(s);
      return;
    }

    const updated: QuizSession = {
      ...s,
      currentIndex: s.currentIndex + 1,
    };
    saveSession(updated);
    setAnswered(false);
    setQuestionStartTime(Date.now());
  }

  function goPrev() {
    if (session!.currentIndex <= 0) return;
    const updated: QuizSession = {
      ...session!,
      currentIndex: session!.currentIndex - 1,
    };
    saveSession(updated);
    const prevAnswer = updated.answers.find(
      (a) => a.questionId === updated.questions[updated.currentIndex]?.id
    );
    setAnswered(!!prevAnswer);
    setQuestionStartTime(Date.now());
  }

  function finishQuiz(currentSession?: QuizSession) {
    const s = currentSession || session!;
    const updated: QuizSession = { ...s, isFinished: true };
    saveSession(updated);
    navigate('/quiz/result');
  }

  function handleFinishClick() {
    const unanswered = session!.questions.length - session!.answers.length;
    if (unanswered > 0) {
      setShowConfirmFinish(true);
    } else {
      finishQuiz();
    }
  }

  if (!currentQuestion) {
    finishQuiz();
    return null;
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => navigate('/quiz')}
          className="text-sm text-text-muted hover:text-text transition-colors"
        >
          ← {t('quiz.backToQuiz')}
        </button>
        {session.config.showTimer && (
          <QuizTimer isRunning={!session.isFinished} />
        )}
      </div>

      {/* Progress */}
      <QuizProgress
        current={session.currentIndex}
        total={session.questions.length}
        score={session.score}
        streak={session.streak}
        showStreak={mode === 'challenge'}
      />

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
          showFeedback={showFeedbackImmediately}
          mode={mode}
          answered={answered}
          selectedAnswers={currentAnswer?.selectedAnswers ?? []}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={goPrev}
          disabled={session.currentIndex === 0}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
            session.currentIndex === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-text-muted hover:text-text hover:bg-surface-dark'
          }`}
        >
          ← {t('quiz.previous')}
        </button>

        <div className="flex gap-3">
          {!isLastQuestion && (
            <button
              onClick={() => goNext()}
              disabled={!answered && mode !== 'learning'}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                !answered && mode !== 'learning'
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}
            >
              {t('quiz.next')} →
            </button>
          )}

          {(isLastQuestion || session.answers.length >= session.questions.length) && (
            <button
              onClick={handleFinishClick}
              className="px-5 py-2.5 rounded-xl font-bold bg-secondary text-white hover:opacity-90 transition-all duration-200"
            >
              {t('quiz.finish')} ✓
            </button>
          )}
        </div>
      </div>

      {/* Confirm Finish Modal */}
      {showConfirmFinish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-bold text-text mb-2">{t('quiz.confirmFinish')}</h3>
            <p className="text-text-muted mb-6">
              {t('quiz.confirmFinishDesc', {
                remaining: session.questions.length - session.answers.length,
              })}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="flex-1 py-2.5 rounded-xl border border-border text-text hover:bg-surface-dark transition-colors"
              >
                {t('quiz.no')}
              </button>
              <button
                onClick={() => finishQuiz()}
                className="flex-1 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                {t('quiz.yes')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
