import type { QuizQuestion } from './types';
import { part1Questions } from './part1-planen';
import { part2Questions } from './part2-algorithmen';
import { part3Questions } from './part3-wiso';

export const allQuizQuestions: QuizQuestion[] = [
  ...part1Questions,
  ...part2Questions,
  ...part3Questions,
];

export function filterQuestions(
  questions: QuizQuestion[],
  filters: {
    parts?: string[];
    topicGroups?: string[];
    topics?: string[];
    difficulty?: 'easy' | 'medium' | 'hard' | 'mixed';
    questionType?: 'multiple-choice' | 'true-false' | 'flashcard' | 'mixed';
    favoriteIds?: string[];
    wrongIds?: string[];
    favoritesOnly?: boolean;
    wrongOnly?: boolean;
  }
): QuizQuestion[] {
  let filtered = [...questions];

  if (filters.parts && filters.parts.length > 0) {
    filtered = filtered.filter((q) => filters.parts!.includes(q.part));
  }

  if (filters.topicGroups && filters.topicGroups.length > 0) {
    filtered = filtered.filter((q) => filters.topicGroups!.includes(q.topicGroup));
  }

  if (filters.topics && filters.topics.length > 0) {
    filtered = filtered.filter((q) => filters.topics!.includes(q.topic));
  }

  if (filters.difficulty && filters.difficulty !== 'mixed') {
    filtered = filtered.filter((q) => q.difficulty === filters.difficulty);
  }

  if (filters.questionType && filters.questionType !== 'mixed') {
    filtered = filtered.filter((q) => q.type === filters.questionType);
  }

  if (filters.favoritesOnly && filters.favoriteIds) {
    filtered = filtered.filter((q) => filters.favoriteIds!.includes(q.id));
  }

  if (filters.wrongOnly && filters.wrongIds) {
    filtered = filtered.filter((q) => filters.wrongIds!.includes(q.id));
  }

  return filtered;
}

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getAvailableTopicGroups(
  questions: QuizQuestion[],
  parts: string[]
): { id: string; part: string; count: number }[] {
  const filtered = parts.length > 0
    ? questions.filter((q) => parts.includes(q.part))
    : questions;

  const groups = new Map<string, { part: string; count: number }>();
  for (const q of filtered) {
    const key = `${q.part}:${q.topicGroup}`;
    const existing = groups.get(key);
    if (existing) {
      existing.count++;
    } else {
      groups.set(key, { part: q.part, count: 1 });
    }
  }

  return Array.from(groups.entries()).map(([key, val]) => ({
    id: key.split(':')[1],
    part: val.part,
    count: val.count,
  }));
}

export function getAvailableTopics(
  questions: QuizQuestion[],
  parts: string[],
  topicGroups: string[]
): { id: string; topicGroup: string; count: number }[] {
  let filtered = questions;
  if (parts.length > 0) {
    filtered = filtered.filter((q) => parts.includes(q.part));
  }
  if (topicGroups.length > 0) {
    filtered = filtered.filter((q) => topicGroups.includes(q.topicGroup));
  }

  const topics = new Map<string, { topicGroup: string; count: number }>();
  for (const q of filtered) {
    const key = `${q.topicGroup}:${q.topic}`;
    const existing = topics.get(key);
    if (existing) {
      existing.count++;
    } else {
      topics.set(key, { topicGroup: q.topicGroup, count: 1 });
    }
  }

  return Array.from(topics.entries()).map(([key, val]) => ({
    id: key.split(':')[1],
    topicGroup: val.topicGroup,
    count: val.count,
  }));
}

export { type QuizQuestion } from './types';
export { type QuizConfig, type QuizSession, type QuizAnswer, type QuizMode, type QuizDifficulty, type QuizQuestionType, type QuizHistoryEntry, type QuizPersistentState, DEFAULT_QUIZ_CONFIG } from './types';
