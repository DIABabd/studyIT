import { ap1 } from './ap1';
import { ap2 } from './ap2';
import type { Exam, ExamPart, TopicGroup, Topic } from '../types';

export const builtInExams: Exam[] = [ap1, ap2];

export function findExam(examId: string): Exam | undefined {
  return builtInExams.find((e) => e.id === examId);
}

export function findPart(examId: string, partId: string): ExamPart | undefined {
  const exam = findExam(examId);
  return exam?.parts.find((p) => p.id === partId);
}

export function findTopicByCompoundId(
  examId: string,
  partId: string,
  compoundTopicId: string
): { group: TopicGroup; topic: Topic } | undefined {
  const part = findPart(examId, partId);
  if (!part) return undefined;

  const [groupId, topicId] = compoundTopicId.split('--');
  const group = part.topicGroups.find((g) => g.id === groupId);
  if (!group) return undefined;

  const topic = group.topics.find((t) => t.id === topicId);
  if (!topic) return undefined;

  return { group, topic };
}
