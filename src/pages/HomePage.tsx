import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExamCard } from '../components/exam/ExamCard';
import { AddExamCard } from '../components/exam/AddExamCard';
import { AddExamModal } from '../components/exam/AddExamModal';
import { builtInExams } from '../data/exams';
import { useCustomExams } from '../hooks/useCustomExams';
import type { Exam } from '../types';

export function HomePage() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { exams: customExams, addExam } = useCustomExams();

  const customExamCards: Exam[] = customExams.map((ce) => ({
    id: ce.id,
    name: ce.name,
    description: ce.description,
    icon: ce.icon,
    parts: [],
    isCustom: true,
    isPlaceholder: true,
  }));

  const allExams = [...builtInExams, ...customExamCards];

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-text">{t('home.title')}</h1>
        <p className="text-text-muted mt-2">{t('home.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allExams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
        <AddExamCard onClick={() => setShowModal(true)} />
      </div>

      <AddExamModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAdd={addExam}
      />
    </div>
  );
}
