import type { Exam, SearchEntry } from '../types';

export function buildSearchIndex(exams: Exam[]): SearchEntry[] {
  const entries: SearchEntry[] = [];
  for (const exam of exams) {
    for (const part of exam.parts) {
      for (const group of part.topicGroups) {
        for (const topic of group.topics) {
          entries.push({
            topicId: topic.id,
            examId: exam.id,
            partId: part.id,
            groupId: group.id,
            nameDe: topic.name.de.toLowerCase(),
            nameAr: topic.name.ar,
            path: `/exam/${exam.id}/part/${part.id}/topic/${group.id}--${topic.id}`,
          });
        }
      }
    }
  }
  return entries;
}

export function searchTopics(index: SearchEntry[], query: string): SearchEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return index
    .filter(
      (e) =>
        e.nameDe.includes(q) ||
        e.nameAr.includes(q) ||
        e.groupId.includes(q)
    )
    .slice(0, 12);
}
