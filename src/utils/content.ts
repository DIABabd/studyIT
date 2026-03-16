import type { BilingualText } from '../types';

export function t(text: BilingualText, lang: string): string {
  return lang === 'ar' ? text.ar : text.de;
}
