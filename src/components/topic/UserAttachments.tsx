import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAttachments } from '../../hooks/useAttachments';
import type { UserAttachment } from '../../types';

interface UserAttachmentsProps {
  topicPath: string;
}

export function UserAttachments({ topicPath }: UserAttachmentsProps) {
  const { t } = useTranslation();
  const { attachments, addNote, addFile, remove, updateNote } = useAttachments(topicPath);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddNote = () => {
    if (!noteText.trim()) return;
    addNote(noteText.trim());
    setNoteText('');
    setShowNoteInput(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    for (const file of Array.from(files)) {
      if (file.size > 5 * 1024 * 1024) {
        alert(t('attachments.tooLarge'));
        continue;
      }
      await addFile(file);
    }
    e.target.value = '';
  };

  const startEdit = (att: UserAttachment) => {
    setEditingId(att.id);
    setEditText(att.content);
  };

  const saveEdit = () => {
    if (editingId && editText.trim()) {
      updateNote(editingId, editText.trim());
    }
    setEditingId(null);
    setEditText('');
  };

  return (
    <section className="bg-white rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-text uppercase tracking-wide">
          <span className="w-8 h-8 rounded-lg bg-surface-dark flex items-center justify-center text-base">
            📎
          </span>
          {t('attachments.title')}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowNoteInput(!showNoteInput)}
            className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-surface-dark transition-colors text-text-muted hover:text-text flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 3v8M3 7h8" strokeLinecap="round" />
            </svg>
            {t('attachments.addNote')}
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-surface-dark transition-colors text-text-muted hover:text-text flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 9V3M4 6l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 10v1.5A1.5 1.5 0 003.5 13h7a1.5 1.5 0 001.5-1.5V10" strokeLinecap="round" />
            </svg>
            {t('attachments.addFile')}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,application/pdf"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Note input */}
      {showNoteInput && (
        <div className="mb-4 space-y-2">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder={t('attachments.notePlaceholder')}
            className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 resize-y min-h-[80px]"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => { setShowNoteInput(false); setNoteText(''); }}
              className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-surface-dark transition-colors"
            >
              {t('modal.cancel')}
            </button>
            <button
              onClick={handleAddNote}
              className="text-xs px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              {t('attachments.save')}
            </button>
          </div>
        </div>
      )}

      {/* Attachments list */}
      {attachments.length === 0 && !showNoteInput && (
        <p className="text-sm text-text-muted text-center py-4">
          {t('attachments.empty')}
        </p>
      )}

      <div className="space-y-3">
        {attachments.map((att) => (
          <AttachmentItem
            key={att.id}
            attachment={att}
            isEditing={editingId === att.id}
            editText={editText}
            onEditTextChange={setEditText}
            onStartEdit={() => startEdit(att)}
            onSaveEdit={saveEdit}
            onCancelEdit={() => setEditingId(null)}
            onRemove={() => remove(att.id)}
          />
        ))}
      </div>
    </section>
  );
}

interface AttachmentItemProps {
  attachment: UserAttachment;
  isEditing: boolean;
  editText: string;
  onEditTextChange: (text: string) => void;
  onStartEdit: () => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onRemove: () => void;
}

function AttachmentItem({
  attachment,
  isEditing,
  editText,
  onEditTextChange,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onRemove,
}: AttachmentItemProps) {
  const { t } = useTranslation();
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="border border-border rounded-lg p-3 group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          {/* Note */}
          {attachment.type === 'note' && (
            <>
              {isEditing ? (
                <div className="space-y-2">
                  <textarea
                    value={editText}
                    onChange={(e) => onEditTextChange(e.target.value)}
                    className="w-full px-2 py-1.5 text-sm rounded-lg border border-border focus:outline-none focus:border-primary resize-y min-h-[60px]"
                  />
                  <div className="flex gap-2">
                    <button onClick={onSaveEdit} className="text-xs px-2 py-1 rounded bg-primary text-white hover:bg-primary-dark">
                      {t('attachments.save')}
                    </button>
                    <button onClick={onCancelEdit} className="text-xs px-2 py-1 rounded border border-border hover:bg-surface-dark">
                      {t('modal.cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <div onClick={onStartEdit} className="cursor-pointer">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs text-accent font-medium">📝 {t('attachments.noteLabel')}</span>
                    <span className="text-xs text-text-muted">
                      {new Date(attachment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-text whitespace-pre-wrap">{attachment.content}</p>
                </div>
              )}
            </>
          )}

          {/* Image */}
          {attachment.type === 'image' && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-xs text-secondary font-medium">🖼️ {attachment.fileName}</span>
                <span className="text-xs text-text-muted">
                  {new Date(attachment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <img
                src={attachment.content}
                alt={attachment.fileName || 'Attachment'}
                className={`rounded-lg border border-border cursor-pointer transition-all ${
                  showFull ? 'max-w-full' : 'max-w-[300px] max-h-[200px] object-cover'
                }`}
                onClick={() => setShowFull(!showFull)}
              />
            </div>
          )}

          {/* PDF */}
          {attachment.type === 'pdf' && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-xs text-orange-600 font-medium">📄 {attachment.fileName}</span>
                <span className="text-xs text-text-muted">
                  {new Date(attachment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <a
                href={attachment.content}
                download={attachment.fileName}
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 3v6M4 7l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 10v1.5A1.5 1.5 0 003.5 13h7a1.5 1.5 0 001.5-1.5V10" strokeLinecap="round" />
                </svg>
                {t('attachments.downloadPdf')}
              </a>
              {showFull && (
                <iframe
                  src={attachment.content}
                  className="w-full h-[500px] mt-2 rounded-lg border border-border"
                  title={attachment.fileName}
                />
              )}
              <button
                onClick={() => setShowFull(!showFull)}
                className="text-xs text-text-muted hover:text-primary mt-1 block"
              >
                {showFull ? t('attachments.hidePdf') : t('attachments.showPdf')}
              </button>
            </div>
          )}
        </div>

        {/* Delete button */}
        <button
          onClick={onRemove}
          className="flex-shrink-0 p-1 rounded hover:bg-red-50 text-text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
          title={t('attachments.remove')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l6 6M10 4l-6 6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
