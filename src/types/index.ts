export interface BilingualText {
  de: string;
  ar: string;
}

export interface Exam {
  id: string;
  name: BilingualText;
  description: BilingualText;
  icon: string;
  parts: ExamPart[];
  isPlaceholder?: boolean;
  isCustom?: boolean;
}

export interface ExamPart {
  id: string;
  name: BilingualText;
  description: BilingualText;
  topicGroups: TopicGroup[];
}

export interface TopicGroup {
  id: string;
  name: BilingualText;
  description: BilingualText;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: BilingualText;
  content: TopicContent;
}

export interface TopicContent {
  definition: BilingualText;
  keyPoints: BilingualText[];
  examples: BilingualText[];
  examRelevance: BilingualText;
  summary: BilingualText;
}

export interface ProgressState {
  completedTopics: Record<string, boolean>;
  notes: Record<string, string>;
  lastVisited?: string;
}

export interface CustomExam {
  id: string;
  name: BilingualText;
  description: BilingualText;
  icon: string;
  createdAt: string;
}

export interface SearchEntry {
  topicId: string;
  examId: string;
  partId: string;
  groupId: string;
  nameDe: string;
  nameAr: string;
  path: string;
}
