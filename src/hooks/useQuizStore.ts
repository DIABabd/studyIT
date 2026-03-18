import { useSyncExternalStore, useCallback } from 'react';
import type { QuizPersistentState, QuizHistoryEntry } from '../data/quiz/types';
import { getItem, setItem } from '../utils/storage';

const STORAGE_KEY = 'studyit-quiz-state';

const defaultState: QuizPersistentState = {
  favorites: [],
  wrongQuestions: [],
  history: [],
};

let cachedState: QuizPersistentState = getItem(STORAGE_KEY, defaultState);

function getSnapshot(): QuizPersistentState {
  return cachedState;
}

let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedState = getItem(STORAGE_KEY, defaultState);
      callback();
    }
  };
  window.addEventListener('storage', handler);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener('storage', handler);
  };
}

function updateAndNotify(newState: QuizPersistentState) {
  cachedState = newState;
  setItem(STORAGE_KEY, newState);
  listeners.forEach((l) => l());
}

export function useQuizStore() {
  const state = useSyncExternalStore(subscribe, getSnapshot);

  const toggleFavorite = useCallback((questionId: string) => {
    const next = { ...cachedState };
    if (next.favorites.includes(questionId)) {
      next.favorites = next.favorites.filter((id) => id !== questionId);
    } else {
      next.favorites = [...next.favorites, questionId];
    }
    updateAndNotify(next);
  }, []);

  const isFavorite = useCallback(
    (questionId: string) => state.favorites.includes(questionId),
    [state]
  );

  const addWrongQuestion = useCallback((questionId: string) => {
    const next = { ...cachedState };
    if (!next.wrongQuestions.includes(questionId)) {
      next.wrongQuestions = [...next.wrongQuestions, questionId];
    }
    updateAndNotify(next);
  }, []);

  const removeWrongQuestion = useCallback((questionId: string) => {
    const next = { ...cachedState };
    next.wrongQuestions = next.wrongQuestions.filter((id) => id !== questionId);
    updateAndNotify(next);
  }, []);

  const isWrong = useCallback(
    (questionId: string) => state.wrongQuestions.includes(questionId),
    [state]
  );

  const addHistoryEntry = useCallback((entry: QuizHistoryEntry) => {
    const next = { ...cachedState };
    next.history = [entry, ...next.history].slice(0, 50);
    updateAndNotify(next);
  }, []);

  const clearHistory = useCallback(() => {
    const next = { ...cachedState, history: [] };
    updateAndNotify(next);
  }, []);

  return {
    state,
    toggleFavorite,
    isFavorite,
    addWrongQuestion,
    removeWrongQuestion,
    isWrong,
    addHistoryEntry,
    clearHistory,
  };
}
