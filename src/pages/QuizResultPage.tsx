import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { QuizReview } from '../components/quiz/QuizReview';
import { useQuizStore } from '../hooks/useQuizStore';
import { getItem, setItem } from '../utils/storage';
import { shuffleQuestions } from '../data/quiz';
import type { QuizSession, QuizHistoryEntry } from '../data/quiz/types';

const SESSION_KEY = 'studyit-quiz-session';

export function QuizResultPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addHistoryEntry } = useQuizStore();
  const [session, setSession] = useState<QuizSession | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [historySaved, setHistorySaved] = useState(false);

  useEffect(() => {
    const saved = getItem<QuizSession | null>(SESSION_KEY, null);
    if (!saved) {
      navigate('/quiz');
      return;
    }
    setSession(saved);
  }, [navigate]);

  useEffect(() => {
    if (session && !historySaved) {
      const duration = Math.round(
        (Date.now() - new Date(session.startedAt).getTime()) / 1000
      );
      const total = session.questions.length;
      const score = session.score;
      const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

      const entry: QuizHistoryEntry = {
        id: `quiz-${Date.now()}`,
        config: session.config,
        score,
        total,
        percentage,
        bestStreak: session.bestStreak,
        completedAt: new Date().toISOString(),
        duration,
      };

      addHistoryEntry(entry);
      setHistorySaved(true);
    }
  }, [session, historySaved, addHistoryEntry]);

  if (!session) return null;

  const total = session.questions.length;
  const score = session.score;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const duration = Math.round(
    (Date.now() - new Date(session.startedAt).getTime()) / 1000
  );
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const wrongQuestions = session.questions.filter((q) => {
    const answer = session.answers.find((a) => a.questionId === q.id);
    return !answer || !answer.isCorrect;
  });

  function getResultEmoji(): string {
    if (percentage >= 90) return '🏆';
    if (percentage >= 70) return '🎉';
    if (percentage >= 50) return '📚';
    return '💪';
  }

  function getResultMessage(): string {
    if (percentage >= 90) return t('quiz.excellent');
    if (percentage >= 70) return t('quiz.good');
    if (percentage >= 50) return t('quiz.okay');
    return t('quiz.needsPractice');
  }

  function retryWrong() {
    if (wrongQuestions.length === 0) return;

    const newSession: QuizSession = {
      config: session!.config,
      questions: shuffleQuestions(wrongQuestions),
      answers: [],
      currentIndex: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      startedAt: new Date().toISOString(),
      isFinished: false,
    };

    setItem(SESSION_KEY, newSession);
    navigate('/quiz/play');
  }

  function retryAll() {
    const newSession: QuizSession = {
      config: session!.config,
      questions: shuffleQuestions(session!.questions),
      answers: [],
      currentIndex: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      startedAt: new Date().toISOString(),
      isFinished: false,
    };

    setItem(SESSION_KEY, newSession);
    navigate('/quiz/play');
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Result Card */}
      <div className="bg-white rounded-2xl border border-border p-8 shadow-sm text-center">
        <div className="text-6xl mb-4">{getResultEmoji()}</div>
        <h1 className="text-2xl font-bold text-text mb-2">{t('quiz.resultTitle')}</h1>
        <p className="text-xl text-text-muted mb-6">{getResultMessage()}</p>

        {/* Score Circle */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke={percentage >= 70 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(percentage / 100) * 327} 327`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-text">{percentage}%</span>
            <span className="text-sm text-text-muted">
              {score}/{total}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-3 rounded-xl bg-surface">
            <p className="text-2xl font-bold text-primary">{score}</p>
            <p className="text-xs text-text-muted">{t('quiz.correct').replace('!', '')}</p>
          </div>
          <div className="p-3 rounded-xl bg-surface">
            <p className="text-2xl font-bold text-amber-500">{session.bestStreak}</p>
            <p className="text-xs text-text-muted">{t('quiz.bestStreak')}</p>
          </div>
          <div className="p-3 rounded-xl bg-surface">
            <p className="text-2xl font-bold text-text">
              {minutes > 0 ? `${minutes}m` : `${seconds}s`}
            </p>
            <p className="text-xs text-text-muted">{t('quiz.timeSpent')}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {wrongQuestions.length > 0 && (
            <button
              onClick={retryWrong}
              className="flex-1 py-3 rounded-xl border-2 border-red-200 text-red-600 font-medium hover:bg-red-50 transition-colors"
            >
              {t('quiz.retryWrong')} ({wrongQuestions.length})
            </button>
          )}
          <button
            onClick={retryAll}
            className="flex-1 py-3 rounded-xl border-2 border-border text-text font-medium hover:bg-surface-dark transition-colors"
          >
            {t('quiz.retryAll')}
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="flex-1 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            {t('quiz.newQuiz')}
          </button>
        </div>
      </div>

      {/* Review Toggle */}
      <div className="text-center">
        <button
          onClick={() => setShowReview(!showReview)}
          className="px-6 py-2.5 rounded-xl border border-border text-text-muted hover:text-text hover:bg-white transition-colors"
        >
          {showReview ? t('quiz.close') : t('quiz.reviewAnswers')} {showReview ? '▲' : '▼'}
        </button>
      </div>

      {/* Review Section */}
      {showReview && (
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <QuizReview questions={session.questions} answers={session.answers} />
        </div>
      )}
    </div>
  );
}
