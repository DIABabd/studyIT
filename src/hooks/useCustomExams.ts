import { useSyncExternalStore, useCallback } from 'react';
import type { CustomExam } from '../types';
import { getItem, setItem } from '../utils/storage';

const STORAGE_KEY = 'studyit-custom-exams';

function getSnapshot(): CustomExam[] {
  return getItem<CustomExam[]>(STORAGE_KEY, []);
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

export function useCustomExams() {
  const exams = useSyncExternalStore(subscribe, getSnapshot);

  const addExam = useCallback((exam: Omit<CustomExam, 'id' | 'createdAt'>) => {
    const current = getItem<CustomExam[]>(STORAGE_KEY, []);
    const newExam: CustomExam = {
      ...exam,
      id: `custom-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setItem(STORAGE_KEY, [...current, newExam]);
    notify();
    return newExam;
  }, []);

  const removeExam = useCallback((id: string) => {
    const current = getItem<CustomExam[]>(STORAGE_KEY, []);
    setItem(STORAGE_KEY, current.filter((e) => e.id !== id));
    notify();
  }, []);

  return { exams, addExam, removeExam };
}
