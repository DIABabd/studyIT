import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { QuizFilterPanel } from '../components/quiz/QuizFilterPanel';
import { useQuizStore } from '../hooks/useQuizStore';
import { allQuizQuestions, filterQuestions, shuffleQuestions } from '../data/quiz';
import { DEFAULT_QUIZ_CONFIG } from '../data/quiz/types';
import type { QuizConfig } from '../data/quiz/types';
import { setItem } from '../utils/storage';

const SESSION_KEY = 'studyit-quiz-session';

export function QuizPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useQuizStore();
  const [config, setConfig] = useState<QuizConfig>(DEFAULT_QUIZ_CONFIG);

  const filtered = filterQuestions(allQuizQuestions, {
    parts: config.parts,
    topicGroups: config.topicGroups,
    topics: config.topics,
    difficulty: config.difficulty,
    questionType: config.questionType,
    favoriteIds: state.favorites,
    wrongIds: state.wrongQuestions,
    favoritesOnly: config.filterFavoritesOnly,
    wrongOnly: config.filterWrongOnly,
  });

  const availableCount = filtered.length;

  function startQuiz() {
    if (availableCount === 0) return;

    let questions = shuffleQuestions(filtered);
    if (config.questionCount > 0 && config.questionCount < questions.length) {
      questions = questions.slice(0, config.questionCount);
    }

    const session = {
      config,
      questions,
      answers: [],
      currentIndex: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      startedAt: new Date().toISOString(),
      isFinished: false,
    };

    setItem(SESSION_KEY, session);
    navigate('/quiz/play');
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text mb-2">🧠 {t('quiz.title')}</h1>
        <p className="text-text-muted">{t('quiz.subtitle')}</p>
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
        <QuizFilterPanel
          config={config}
          onChange={setConfig}
          favoriteCount={state.favorites.length}
          wrongCount={state.wrongQuestions.length}
        />
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted">
            {availableCount > 0
              ? t('quiz.questionsAvailable', { count: availableCount })
              : t('quiz.noQuestions')}
          </p>
          <button
            onClick={startQuiz}
            disabled={availableCount === 0}
            className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200 ${
              availableCount > 0
                ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {t('quiz.startQuiz')} →
          </button>
        </div>
      </div>

      {/* History Section */}
      {state.history.length > 0 && (
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <h2 className="text-lg font-bold text-text mb-4">{t('quiz.history')}</h2>
          <div className="space-y-3">
            {state.history.slice(0, 10).map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between p-3 rounded-xl bg-surface"
              >
                <div>
                  <p className="text-sm font-medium text-text">
                    {entry.score}/{entry.total} ({entry.percentage}%)
                  </p>
                  <p className="text-xs text-text-muted">
                    {new Date(entry.completedAt).toLocaleDateString()} · {t('quiz.bestStreak')}: {entry.bestStreak}
                  </p>
                </div>
                <div className="text-2xl">
                  {entry.percentage >= 90 ? '🏆' : entry.percentage >= 70 ? '👍' : entry.percentage >= 50 ? '📚' : '💪'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
