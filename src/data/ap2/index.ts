import type { Exam } from '../../types';
import { part1Planen } from './part1-planen';
import { part2Algorithmen } from './part2-algorithmen';
import { part3Wiso } from './part3-wiso';

export const ap2: Exam = {
  id: 'ap2',
  name: {
    de: 'AP2 – Abschlussprüfung Teil 2',
    ar: 'AP2 – الامتحان النهائي الجزء 2',
  },
  description: {
    de: 'Teil 2 der gestreckten Abschlussprüfung (FIAE)',
    ar: 'الجزء الثاني من الامتحان النهائي الممتد',
  },
  icon: '📗',
  parts: [part1Planen, part2Algorithmen, part3Wiso],
};
