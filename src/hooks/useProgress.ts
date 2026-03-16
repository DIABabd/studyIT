import { useSyncExternalStore, useCallback } from 'react';
import type { ProgressState, Exam } from '../types';
import { getItem, setItem } from '../utils/storage';

const STORAGE_KEY = 'studyit-progress';

const defaultState: ProgressState = {
  completedTopics: {},
  notes: {},
};

function getSnapshot(): ProgressState {
  return getItem(STORAGE_KEY, defaultState);
}

let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  window.addEventListener('storage', handler);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener('storage', handler);
  };
}

function notify() {
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
      const current = getItem(STORAGE_KEY, defaultState);
      if (current.completedTopics[path]) {
        delete current.completedTopics[path];
      } else {
        current.completedTopics[path] = true;
      }
      setItem(STORAGE_KEY, current);
      notify();
    },
    []
  );

  const getCompletionStats = useCallback(
    (prefix: string, exams: Exam[]) => {
      let total = 0;
      let completed = 0;

      for (const exam of exams) {
        if (!prefix || prefix === exam.id) {
          for (const part of exam.parts) {
            if (!prefix || prefix === exam.id || prefix === `${exam.id}.${part.id}`) {
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
        }
      }

      return { completed, total };
    },
    [state]
  );

  return { state, isCompleted, toggleComplete, getCompletionStats };
}
