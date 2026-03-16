import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { findExam, findPart, findTopicByCompoundId } from '../../data/exams';
import { t as bt } from '../../utils/content';

export function Breadcrumb() {
  const { examId, partId, topicId } = useParams();
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const crumbs: Array<{ label: string; to?: string }> = [
    { label: t('common.home'), to: '/' },
  ];

  if (examId) {
    const exam = findExam(examId);
    if (exam) {
      crumbs.push({ label: bt(exam.name, lang), to: `/exam/${examId}` });
    }
  }

  if (examId && partId) {
    const part = findPart(examId, partId);
    if (part) {
      crumbs.push({ label: bt(part.name, lang), to: `/exam/${examId}/part/${partId}` });
    }
  }

  if (examId && partId && topicId) {
    const result = findTopicByCompoundId(examId, partId, topicId);
    if (result) {
      crumbs.push({ label: bt(result.topic.name, lang) });
    }
  }

  return (
    <nav className="flex items-center gap-1.5 text-sm text-text-muted overflow-x-auto whitespace-nowrap py-1">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-text-muted/40 flex-shrink-0 rtl:rotate-180">
              <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {crumb.to ? (
            <Link to={crumb.to} className="hover:text-primary transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-text font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
