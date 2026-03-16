import { useSyncExternalStore, useCallback } from 'react';
import type { CustomExam } from '../types';
import { getItem, setItem } from '../utils/storage';

const STORAGE_KEY = 'studyit-custom-exams';

let cachedExams: CustomExam[] = getItem<CustomExam[]>(STORAGE_KEY, []);

function getSnapshot(): CustomExam[] {
  return cachedExams;
}

let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedExams = getItem<CustomExam[]>(STORAGE_KEY, []);
      callback();
    }
  };
  window.addEventListener('storage', handler);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener('storage', handler);
  };
}

function updateAndNotify(newExams: CustomExam[]) {
  cachedExams = newExams;
  setItem(STORAGE_KEY, newExams);
  listeners.forEach((l) => l());
}

export function useCustomExams() {
  const exams = useSyncExternalStore(subscribe, getSnapshot);

  const addExam = useCallback((exam: Omit<CustomExam, 'id' | 'createdAt'>) => {
    const newExam: CustomExam = {
      ...exam,
      id: `custom-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    updateAndNotify([...cachedExams, newExam]);
    return newExam;
  }, []);

  const removeExam = useCallback((id: string) => {
    updateAndNotify(cachedExams.filter((e) => e.id !== id));
  }, []);

  return { exams, addExam, removeExam };
}
