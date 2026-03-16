import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { findExam } from '../data/exams';
import { PartCard } from '../components/part/PartCard';
import { t as bt } from '../utils/content';

export function ExamPage() {
  const { examId } = useParams<{ examId: string }>();
  const { lang } = useLanguage();

  const exam = findExam(examId || '');
  if (!exam) return <Navigate to="/" replace />;

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{exam.icon}</span>
          <h1 className="text-2xl font-bold text-text">{bt(exam.name, lang)}</h1>
        </div>
        <p className="text-text-muted">{bt(exam.description, lang)}</p>
      </div>

      <div className="space-y-3">
        {exam.parts.map((part, index) => (
          <PartCard key={part.id} part={part} examId={exam.id} index={index} />
        ))}
      </div>

      {exam.parts.length === 0 && (
        <div className="text-center py-12 text-text-muted">
          <span className="text-4xl block mb-3">🚧</span>
          <p>Inhalte werden bald hinzugefügt</p>
        </div>
      )}
    </div>
  );
}
