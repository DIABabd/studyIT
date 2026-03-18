import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { findExam, findPart } from '../data/exams';
import { builtInExams } from '../data/exams';
import { TopicGroupAccordion } from '../components/topic/TopicGroupAccordion';
import { ProgressRing } from '../components/part/ProgressRing';
import { PriorityBadge } from '../components/ui/PriorityBadge';
import { t as bt } from '../utils/content';
import { useTranslation } from 'react-i18next';
import type { Priority, TopicGroup } from '../types';

const PRIORITY_ORDER: Priority[] = ['very-high', 'high', 'medium', 'low'];

const PRIORITY_COLORS: Record<Priority, string> = {
  'very-high': 'border-red-200 bg-red-50/30',
  'high': 'border-orange-200 bg-orange-50/30',
  'medium': 'border-yellow-200 bg-yellow-50/30',
  'low': 'border-gray-200 bg-gray-50/30',
};

type FilterMode = 'all' | 'focus';

export function PartPage() {
  const { examId, partId } = useParams<{ examId: string; partId: string }>();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const { getCompletionStats } = useProgress();
  const [filterMode, setFilterMode] = useState<FilterMode>('all');

  const exam = findExam(examId || '');
  const part = findPart(examId || '', partId || '');
  if (!exam || !part) return <Navigate to="/" replace />;

  const stats = getCompletionStats(`${examId}.${partId}`, builtInExams);

  // Check if any topic groups have priority set
  const hasPriority = part.topicGroups.some((g) => g.priority);

  // Group topics by priority
  const groupedByPriority = hasPriority
    ? PRIORITY_ORDER.map((priority) => ({
        priority,
        groups: part.topicGroups.filter((g) => g.priority === priority),
      })).filter((p) => p.groups.length > 0)
    : [];

  // Filter for focus mode (only very-high and high)
  const visiblePriorityGroups =
    filterMode === 'focus'
      ? groupedByPriority.filter((p) => p.priority === 'very-high' || p.priority === 'high')
      : groupedByPriority;

  // Get a global index counter for the numbered badges
  let globalIndex = 0;

  function getPriorityStats(groups: TopicGroup[]) {
    let completed = 0;
    let total = 0;
    for (const group of groups) {
      const s = getCompletionStats(`${examId}.${partId}.${group.id}`, builtInExams);
      completed += s.completed;
      total += s.total;
    }
    return { completed, total };
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-text">{bt(part.name, lang)}</h1>
          <p className="text-sm text-text-muted mt-1">
            {t('exam.topicsCompleted', { completed: stats.completed, total: stats.total })}
          </p>
        </div>
        <ProgressRing completed={stats.completed} total={stats.total} size={56} />
      </div>

      {/* Priority Filter Toggle */}
      {hasPriority && (
        <div className="flex items-center gap-2 mb-5">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
              filterMode === 'all'
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-text-muted border-border hover:border-primary/40'
            }`}
          >
            {t('priority.showAll')}
          </button>
          <button
            onClick={() => setFilterMode('focus')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
              filterMode === 'focus'
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-text-muted border-border hover:border-primary/40'
            }`}
          >
            🎯 {t('priority.focusFirst')}
          </button>
        </div>
      )}

      {/* Study Order Info Banner */}
      {hasPriority && (
        <div className="mb-5 p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
          <span className="text-lg">📊</span>
          <div>
            <p className="text-sm font-medium text-text">{t('priority.studyOrder')}</p>
            <p className="text-xs text-text-muted">{t('priority.studyOrderDesc')}</p>
          </div>
        </div>
      )}

      {/* Priority Grouped View */}
      {hasPriority ? (
        <div className="space-y-6">
          {visiblePriorityGroups.map((priorityGroup) => {
            const priorityStats = getPriorityStats(priorityGroup.groups);
            return (
              <div key={priorityGroup.priority}>
                {/* Priority Section Header */}
                <div className={`flex items-center justify-between gap-3 mb-3 px-4 py-2.5 rounded-xl border ${PRIORITY_COLORS[priorityGroup.priority]}`}>
                  <div className="flex items-center gap-2.5">
                    <PriorityBadge priority={priorityGroup.priority} size="md" />
                    <span className="text-xs text-text-muted">
                      ({priorityGroup.groups.length} {t('part.topicGroups')})
                    </span>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    priorityStats.completed === priorityStats.total && priorityStats.total > 0
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-white/80 text-text-muted'
                  }`}>
                    {priorityStats.completed}/{priorityStats.total}
                  </span>
                </div>

                {/* Topic Groups */}
                <div className="space-y-3">
                  {priorityGroup.groups.map((group) => {
                    const currentIndex = globalIndex++;
                    return (
                      <TopicGroupAccordion
                        key={group.id}
                        group={group}
                        examId={exam.id}
                        partId={part.id}
                        index={currentIndex}
                        defaultOpen={currentIndex === 0}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Fallback: No priority, show flat list */
        <div className="space-y-3">
          {part.topicGroups.map((group, index) => (
            <TopicGroupAccordion
              key={group.id}
              group={group}
              examId={exam.id}
              partId={part.id}
              index={index}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
