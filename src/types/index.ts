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

export type Priority = 'very-high' | 'high' | 'medium' | 'low';

export interface TopicGroup {
  id: string;
  name: BilingualText;
  description: BilingualText;
  topics: Topic[];
  priority?: Priority;
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
  media?: MediaBlock[];
  examQuestions?: ExamQuestion[];
}

export interface ExamQuestion {
  examLabel: string;
  number: string;
  points?: number;
  text: string;
  scenario?: string;
}

export type MediaBlock =
  | { type: 'image'; url: string; caption?: BilingualText }
  | { type: 'pdf'; url: string; label: BilingualText }
  | { type: 'text'; content: BilingualText }
  | { type: 'code'; language: string; code: string; caption?: BilingualText };

export interface UserAttachment {
  id: string;
  topicPath: string;
  type: 'note' | 'image' | 'pdf';
  content: string;       // text for notes, base64 data URL for images/PDFs
  fileName?: string;     // original file name for images/PDFs
  createdAt: string;
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
