import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { t as bt } from '../../utils/content';
import type { TopicContent as TopicContentType, MediaBlock } from '../../types';

interface TopicContentProps {
  content: TopicContentType;
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

export function TopicContent({ content }: TopicContentProps) {
  const { t } = useTranslation();
  const { lang } = useLanguage();

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
