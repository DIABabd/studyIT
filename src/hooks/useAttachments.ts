import { useSyncExternalStore, useCallback } from 'react';
import type { UserAttachment } from '../types';
import { getItem, setItem } from '../utils/storage';

const STORAGE_KEY = 'studyit-attachments';

let cached: UserAttachment[] = getItem<UserAttachment[]>(STORAGE_KEY, []);

function getSnapshot(): UserAttachment[] {
  return cached;
}

let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cached = getItem<UserAttachment[]>(STORAGE_KEY, []);
      callback();
    }
  };
  window.addEventListener('storage', handler);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener('storage', handler);
  };
}

function updateAndNotify(next: UserAttachment[]) {
  cached = next;
  setItem(STORAGE_KEY, next);
  listeners.forEach((l) => l());
}

export function useAttachments(topicPath: string) {
  const all = useSyncExternalStore(subscribe, getSnapshot);
  const attachments = all.filter((a) => a.topicPath === topicPath);

  const addNote = useCallback(
    (text: string) => {
      const attachment: UserAttachment = {
        id: `att-${Date.now()}`,
        topicPath,
        type: 'note',
        content: text,
        createdAt: new Date().toISOString(),
      };
      updateAndNotify([...cached, attachment]);
    },
    [topicPath]
  );

  const addFile = useCallback(
    (file: File) => {
      return new Promise<void>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          const type: 'image' | 'pdf' = file.type === 'application/pdf' ? 'pdf' : 'image';
          const attachment: UserAttachment = {
            id: `att-${Date.now()}`,
            topicPath,
            type,
            content: dataUrl,
            fileName: file.name,
            createdAt: new Date().toISOString(),
          };
          updateAndNotify([...cached, attachment]);
          resolve();
        };
        reader.readAsDataURL(file);
      });
    },
    [topicPath]
  );

  const remove = useCallback((id: string) => {
    updateAndNotify(cached.filter((a) => a.id !== id));
  }, []);

  const updateNote = useCallback((id: string, text: string) => {
    updateAndNotify(
      cached.map((a) => (a.id === id ? { ...a, content: text } : a))
    );
  }, []);

  return { attachments, addNote, addFile, remove, updateNote };
}
