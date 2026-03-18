import type { BilingualText } from '../../types';

export interface QuizQuestion {
  id: string;
  exam: 'ap2';
  part: 'part1' | 'part2' | 'part3';
  topicGroup: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple-choice' | 'true-false' | 'flashcard';
  question: BilingualText;
  options: BilingualText[];
  correctAnswers: number[];
  explanation: BilingualText;
  tags?: string[];
}

export type QuizMode = 'standard' | 'learning' | 'challenge' | 'drill';

export type QuizDifficulty = 'easy' | 'medium' | 'hard' | 'mixed';

export type QuizQuestionType = 'multiple-choice' | 'true-false' | 'flashcard' | 'mixed';

export interface QuizConfig {
  exam: 'ap2';
  parts: string[];
  topicGroups: string[];
  topics: string[];
  difficulty: QuizDifficulty;
  questionType: QuizQuestionType;
  questionCount: number;
  mode: QuizMode;
  showTimer: boolean;
  filterFavoritesOnly: boolean;
  filterWrongOnly: boolean;
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswers: number[];
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizSession {
  config: QuizConfig;
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  currentIndex: number;
  score: number;
  streak: number;
  bestStreak: number;
  startedAt: string;
  isFinished: boolean;
}

export interface QuizHistoryEntry {
  id: string;
  config: QuizConfig;
  score: number;
  total: number;
  percentage: number;
  bestStreak: number;
  completedAt: string;
  duration: number;
}

export interface QuizPersistentState {
  favorites: string[];
  wrongQuestions: string[];
  history: QuizHistoryEntry[];
}

export const DEFAULT_QUIZ_CONFIG: QuizConfig = {
  exam: 'ap2',
  parts: [],
  topicGroups: [],
  topics: [],
  difficulty: 'mixed',
  questionType: 'mixed',
  questionCount: 20,
  mode: 'standard',
  showTimer: false,
  filterFavoritesOnly: false,
  filterWrongOnly: false,
};
