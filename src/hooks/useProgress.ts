import { useSyncExternalStore, useCallback } from 'react';
import type { ProgressState, Exam } from '../types';
import { getItem, setItem } from '../utils/storage';

const STORAGE_KEY = 'studyit-progress';

const defaultState: ProgressState = {
  completedTopics: {},
  notes: {},
};

let cachedState: ProgressState = getItem(STORAGE_KEY, defaultState);

function getSnapshot(): ProgressState {
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

function updateAndNotify(newState: ProgressState) {
  cachedState = newState;
  setItem(STORAGE_KEY, newState);
  listeners.forEach((l) => l());
}

export function useProgress() {
  const state = useSyncExternalStore(subscribe, getSnapshot);

  const isCompleted = useCallback(
    (path: string) => state.completedTopics[path] === true,
    [state]
  );

  const toggleComplete = useCallback(
    (path: string) => {
      const next = { ...cachedState, completedTopics: { ...cachedState.completedTopics } };
      if (next.completedTopics[path]) {
        delete next.completedTopics[path];
      } else {
        next.completedTopics[path] = true;
      }
      updateAndNotify(next);
    },
    []
  );

  const getCompletionStats = useCallback(
    (prefix: string, exams: Exam[]) => {
      let total = 0;
      let completed = 0;

      for (const exam of exams) {
        for (const part of exam.parts) {
          for (const group of part.topicGroups) {
            for (const topic of group.topics) {
              const key = `${exam.id}.${part.id}.${group.id}.${topic.id}`;
              if (key.startsWith(prefix)) {
                total++;
                if (state.completedTopics[key]) completed++;
              }
            }
          }
        }
      }

      return { completed, total };
    },
    [state]
  );

  return { state, isCompleted, toggleComplete, getCompletionStats };
}
