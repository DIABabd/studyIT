import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { t as tContent } from '../../utils/content';
import type { QuizConfig, QuizDifficulty, QuizQuestionType } from '../../data/quiz/types';
import { QuizModeSelector } from './QuizModeSelector';
import { allQuizQuestions, getAvailableTopicGroups, getAvailableTopics } from '../../data/quiz';
import { findExam } from '../../data/exams';

interface QuizFilterPanelProps {
  config: QuizConfig;
  onChange: (config: QuizConfig) => void;
  favoriteCount: number;
  wrongCount: number;
}

const PARTS = [
  { id: 'part1', key: 'quiz.part1' },
  { id: 'part2', key: 'quiz.part2' },
  { id: 'part3', key: 'quiz.part3' },
];

const DIFFICULTIES: QuizDifficulty[] = ['easy', 'medium', 'hard', 'mixed'];
const QUESTION_TYPES: { value: QuizQuestionType; key: string }[] = [
  { value: 'multiple-choice', key: 'quiz.multipleChoice' },
  { value: 'true-false', key: 'quiz.trueFalse' },
  { value: 'flashcard', key: 'quiz.flashcard' },
  { value: 'mixed', key: 'quiz.mixed' },
];
const COUNTS = [10, 20, 30, 50, 0];

// Build a lookup map for topic group and topic names from exam data
// Keys use "partId:groupId" to avoid collisions between parts
function buildNameLookup(lang: string) {
  const exam = findExam('ap2');
  if (!exam) return { groupNames: new Map<string, string>(), topicNames: new Map<string, string>() };

  const groupNames = new Map<string, string>();
  const topicNames = new Map<string, string>();

  for (const part of exam.parts) {
    for (const group of part.topicGroups) {
      groupNames.set(`${part.id}:${group.id}`, tContent(group.name, lang));
      for (const topic of group.topics) {
        topicNames.set(`${part.id}:${group.id}:${topic.id}`, tContent(topic.name, lang));
      }
    }
  }

  return { groupNames, topicNames };
}

export function QuizFilterPanel({ config, onChange, favoriteCount, wrongCount }: QuizFilterPanelProps) {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const { groupNames, topicNames } = buildNameLookup(lang);

  const topicGroups = getAvailableTopicGroups(allQuizQuestions, config.parts);
  const topics = getAvailableTopics(allQuizQuestions, config.parts, config.topicGroups);

  function update(partial: Partial<QuizConfig>) {
    onChange({ ...config, ...partial });
  }

  function togglePart(partId: string) {
    const parts = config.parts.includes(partId)
      ? config.parts.filter((p) => p !== partId)
      : [...config.parts, partId];
    update({ parts, topicGroups: [], topics: [] });
  }

  function toggleTopicGroup(groupId: string) {
    const groups = config.topicGroups.includes(groupId)
      ? config.topicGroups.filter((g) => g !== groupId)
      : [...config.topicGroups, groupId];
    update({ topicGroups: groups, topics: [] });
  }

  function toggleTopic(topicId: string) {
    const selected = config.topics.includes(topicId)
      ? config.topics.filter((t) => t !== topicId)
      : [...config.topics, topicId];
    update({ topics: selected });
  }

  function getGroupLabel(groupId: string, partId: string, count: number): string {
    const name = groupNames.get(`${partId}:${groupId}`);
    return name ? `${name} (${count})` : `${groupId} (${count})`;
  }

  function getTopicLabel(topicId: string, topicGroup: string, count: number): string {
    // Try all parts to find the topic name
    for (const partId of ['part1', 'part2', 'part3']) {
      const name = topicNames.get(`${partId}:${topicGroup}:${topicId}`);
      if (name) return `${name} (${count})`;
    }
    return `${formatTopicId(topicId)} (${count})`;
  }

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
      <Section title={t('quiz.mode')}>
        <QuizModeSelector value={config.mode} onChange={(mode) => update({ mode })} />
      </Section>

      {/* Exam Part */}
      <Section title={t('quiz.examPart')}>
        <div className="flex flex-wrap gap-2">
          {PARTS.map((part) => (
            <ToggleChip
              key={part.id}
              label={t(part.key)}
              active={config.parts.includes(part.id)}
              onClick={() => togglePart(part.id)}
            />
          ))}
        </div>
      </Section>

      {/* Topic Groups */}
      {topicGroups.length > 0 && (
        <Section title={t('quiz.topicGroup')}>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {topicGroups.map((group) => (
              <ToggleChip
                key={`${group.part}-${group.id}`}
                label={getGroupLabel(group.id, group.part, group.count)}
                active={config.topicGroups.includes(group.id)}
                onClick={() => toggleTopicGroup(group.id)}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Topics */}
      {topics.length > 0 && config.topicGroups.length > 0 && (
        <Section title={t('quiz.topics')}>
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => update({ topics: topics.map((t) => t.id) })}
              className="text-xs text-primary hover:underline"
            >
              {t('quiz.selectAll')}
            </button>
            <span className="text-text-muted text-xs">|</span>
            <button
              onClick={() => update({ topics: [] })}
              className="text-xs text-primary hover:underline"
            >
              {t('quiz.deselectAll')}
            </button>
          </div>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {topics.map((topic) => (
              <ToggleChip
                key={`${topic.topicGroup}-${topic.id}`}
                label={getTopicLabel(topic.id, topic.topicGroup, topic.count)}
                active={config.topics.includes(topic.id)}
                onClick={() => toggleTopic(topic.id)}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Difficulty */}
      <Section title={t('quiz.difficulty')}>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((diff) => (
            <ToggleChip
              key={diff}
              label={t(`quiz.${diff}`)}
              active={config.difficulty === diff}
              onClick={() => update({ difficulty: diff })}
            />
          ))}
        </div>
      </Section>

      {/* Question Type */}
      <Section title={t('quiz.questionType')}>
        <div className="flex flex-wrap gap-2">
          {QUESTION_TYPES.map((qt) => (
            <ToggleChip
              key={qt.value}
              label={t(qt.key)}
              active={config.questionType === qt.value}
              onClick={() => update({ questionType: qt.value })}
            />
          ))}
        </div>
      </Section>

      {/* Question Count */}
      <Section title={t('quiz.questionCount')}>
        <div className="flex flex-wrap gap-2">
          {COUNTS.map((count) => (
            <ToggleChip
              key={count}
              label={count === 0 ? t('quiz.allAvailable') : String(count)}
              active={config.questionCount === count}
              onClick={() => update({ questionCount: count })}
            />
          ))}
        </div>
      </Section>

      {/* Special Filters */}
      <Section title={t('quiz.filters')}>
        <div className="flex flex-wrap gap-2">
          <ToggleChip
            label={`${t('quiz.favoritesOnly')} (${favoriteCount})`}
            active={config.filterFavoritesOnly}
            onClick={() => update({ filterFavoritesOnly: !config.filterFavoritesOnly })}
          />
          <ToggleChip
            label={`${t('quiz.wrongOnly')} (${wrongCount})`}
            active={config.filterWrongOnly}
            onClick={() => update({ filterWrongOnly: !config.filterWrongOnly })}
          />
        </div>
      </Section>

      {/* Timer Toggle */}
      {config.mode === 'challenge' && (
        <Section title={t('quiz.timer')}>
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => update({ showTimer: !config.showTimer })}
              className={`w-11 h-6 rounded-full transition-colors duration-200 relative cursor-pointer ${
                config.showTimer ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  config.showTimer ? 'translate-x-5 rtl:-translate-x-5' : 'translate-x-0.5 rtl:-translate-x-0.5'
                }`}
              />
            </div>
            <span className="text-sm text-text">{t('quiz.timer')}</span>
          </label>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ToggleChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
        active
          ? 'bg-primary text-white border-primary shadow-sm'
          : 'bg-white text-text-muted border-border hover:border-primary/40 hover:text-text'
      }`}
    >
      {label}
    </button>
  );
}

function formatTopicId(id: string): string {
  return id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
