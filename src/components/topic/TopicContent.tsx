import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { t as bt } from '../../utils/content';
import type { TopicContent as TopicContentType, MediaBlock, ExamQuestion } from '../../types';
import { examQuestionsByTopicId } from '../../data/ap2/part1-planen/exam-questions';

interface TopicContentProps {
  content: TopicContentType;
  topicId?: string;
}

function ExamQuestionCard({ question }: { question: ExamQuestion }) {
  const { t } = useTranslation();
  const [showScenario, setShowScenario] = useState(false);

  return (
    <article className="bg-white rounded-lg border border-purple-200 p-4">
      <header className="flex flex-wrap items-center gap-2 mb-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-xs font-semibold">
          {question.examLabel}
        </span>
        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
          {t('topic.aufgabe')} {question.number}
        </span>
        {question.points != null && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-xs font-medium">
            {question.points} {t('topic.points')}
          </span>
        )}
      </header>
      <p className="text-sm text-text leading-relaxed whitespace-pre-wrap">
        {question.text}
      </p>
      {question.scenario && (
        <div className="mt-2">
          <button
            type="button"
            onClick={() => setShowScenario((v) => !v)}
            className="text-xs text-purple-700 hover:text-purple-900 underline underline-offset-2"
          >
            {showScenario ? t('topic.hideScenario') : t('topic.showScenario')}
          </button>
          {showScenario && (
            <p className="mt-2 text-xs text-text-muted leading-relaxed italic bg-surface rounded-md p-2 border border-border">
              {question.scenario}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

function MediaBlockRenderer({ block }: { block: MediaBlock }) {
  const { lang } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  switch (block.type) {
    case 'image':
      return (
        <div className="my-3">
          <img
            src={block.url}
            alt={block.caption ? bt(block.caption, lang) : ''}
            className={`rounded-lg border border-border cursor-pointer transition-all ${
              expanded ? 'max-w-full' : 'max-w-[500px] max-h-[300px] object-contain'
            }`}
            onClick={() => setExpanded(!expanded)}
          />
          {block.caption && (
            <p className="text-xs text-text-muted mt-1 italic">{bt(block.caption, lang)}</p>
          )}
        </div>
      );
    case 'pdf':
      return (
        <div className="my-3">
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface border border-border hover:border-primary/30 transition-colors"
          >
            <span className="text-lg">📄</span>
            <span className="text-sm font-medium text-primary">{bt(block.label, lang)}</span>
          </a>
        </div>
      );
    case 'text':
      return (
        <div className="my-3 bg-surface rounded-lg p-3 text-text text-sm leading-relaxed border-s-3 border-accent/30">
          {bt(block.content, lang)}
        </div>
      );
    case 'code':
      return (
        <div className="my-3">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-3 py-1.5 bg-gray-800">
              <span className="text-xs text-gray-400">{block.language}</span>
            </div>
            <pre className="p-3 overflow-x-auto text-sm text-gray-100 leading-relaxed">
              <code>{block.code}</code>
            </pre>
          </div>
          {block.caption && (
            <p className="text-xs text-text-muted mt-1 italic">{bt(block.caption, lang)}</p>
          )}
        </div>
      );
  }
}

export function TopicContent({ content, topicId }: TopicContentProps) {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const examQuestions: ExamQuestion[] =
    (topicId && examQuestionsByTopicId[topicId]) || content.examQuestions || [];

  return (
    <div className="space-y-6">
      {/* Definition */}
      <section className="bg-white rounded-xl border border-border p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-base">
            📖
          </span>
          {t('topic.definition')}
        </h3>
        <p className="text-text leading-relaxed">{bt(content.definition, lang)}</p>
      </section>

      {/* Key Points */}
      {content.keyPoints.length > 0 && (
        <section className="bg-white rounded-xl border border-border p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-base">
              💡
            </span>
            {t('topic.keyPoints')}
          </h3>
          <ul className="space-y-2">
            {content.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-text">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="leading-relaxed">{bt(point, lang)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Examples */}
      {content.examples.length > 0 && (
        <section className="bg-white rounded-xl border border-border p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-base">
              📝
            </span>
            {t('topic.examples')}
          </h3>
          <div className="space-y-3">
            {content.examples.map((example, i) => (
              <div key={i} className="bg-surface rounded-lg p-3 text-text text-sm leading-relaxed border-s-3 border-secondary/30">
                {bt(example, lang)}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Media blocks (images, PDFs, text, code) */}
      {content.media && content.media.length > 0 && (
        <section className="bg-white rounded-xl border border-border p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text mb-3 uppercase tracking-wide">
            <span className="w-8 h-8 rounded-lg bg-surface-dark flex items-center justify-center text-base">
              📂
            </span>
            {t('topic.media')}
          </h3>
          {content.media.map((block, i) => (
            <MediaBlockRenderer key={i} block={block} />
          ))}
        </section>
      )}

      {/* Exam Relevance */}
      <section className="bg-white rounded-xl border border-border p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-600 mb-3 uppercase tracking-wide">
          <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-base">
            🎯
          </span>
          {t('topic.examRelevance')}
        </h3>
        <p className="text-text leading-relaxed">{bt(content.examRelevance, lang)}</p>
      </section>

      {/* Prüfungsfragen (exam questions from past IHK Abschlussprüfungen) */}
      {examQuestions.length > 0 && (
        <section className="bg-white rounded-xl border border-purple-200 p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-purple-700 mb-1 uppercase tracking-wide">
            <span className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-base">
              📚
            </span>
            {t('topic.examQuestions')}
          </h3>
          <p className="text-xs text-text-muted mb-4 ms-10">
            {t('topic.examQuestionsCount', { count: examQuestions.length })}
          </p>
          <div className="space-y-3">
            {examQuestions.map((q, i) => (
              <ExamQuestionCard key={`${q.examLabel}-${q.number}-${i}`} question={q} />
            ))}
          </div>
        </section>
      )}

      {/* Summary */}
      <section className="bg-primary/5 rounded-xl border border-primary/20 p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-base">
            📌
          </span>
          {t('topic.summary')}
        </h3>
        <p className="text-text font-medium leading-relaxed">{bt(content.summary, lang)}</p>
      </section>
    </div>
  );
}
