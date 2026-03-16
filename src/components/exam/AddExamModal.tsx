import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '../ui/Modal';

interface AddExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: { name: { de: string; ar: string }; description: { de: string; ar: string }; icon: string }) => void;
}

export function AddExamModal({ isOpen, onClose, onAdd }: AddExamModalProps) {
  const { t } = useTranslation();
  const [nameDe, setNameDe] = useState('');
  const [nameAr, setNameAr] = useState('');
  const [descDe, setDescDe] = useState('');
  const [descAr, setDescAr] = useState('');
  const [icon, setIcon] = useState('📚');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameDe.trim()) return;
    onAdd({
      name: { de: nameDe, ar: nameAr || nameDe },
      description: { de: descDe, ar: descAr || descDe },
      icon,
    });
    setNameDe('');
    setNameAr('');
    setDescDe('');
    setDescAr('');
    setIcon('📚');
    onClose();
  };

  const inputClass = 'w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('modal.addExam')}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1">{t('modal.examIcon')}</label>
          <input value={icon} onChange={(e) => setIcon(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1">{t('modal.examNameDe')}</label>
          <input value={nameDe} onChange={(e) => setNameDe(e.target.value)} className={inputClass} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1">{t('modal.examNameAr')}</label>
          <input value={nameAr} onChange={(e) => setNameAr(e.target.value)} className={inputClass} dir="rtl" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1">{t('modal.examDescDe')}</label>
          <input value={descDe} onChange={(e) => setDescDe(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1">{t('modal.examDescAr')}</label>
          <input value={descAr} onChange={(e) => setDescAr(e.target.value)} className={inputClass} dir="rtl" />
        </div>
        <div className="flex gap-3 pt-2">
          <button type="button" onClick={onClose} className="flex-1 py-2 text-sm font-medium rounded-lg border border-border hover:bg-surface-dark transition-colors">
            {t('modal.cancel')}
          </button>
          <button type="submit" className="flex-1 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors">
            {t('modal.create')}
          </button>
        </div>
      </form>
    </Modal>
  );
}
