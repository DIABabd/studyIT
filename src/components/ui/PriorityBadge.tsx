import { useTranslation } from 'react-i18next';
import type { Priority } from '../../types';

interface PriorityBadgeProps {
  priority: Priority;
  size?: 'sm' | 'md';
}

const PRIORITY_STYLES: Record<Priority, { bg: string; text: string; icon: string }> = {
  'very-high': { bg: 'bg-red-100', text: 'text-red-700', icon: '🔴' },
  'high': { bg: 'bg-orange-100', text: 'text-orange-700', icon: '🟠' },
  'medium': { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: '🟡' },
  'low': { bg: 'bg-gray-100', text: 'text-gray-600', icon: '⚪' },
};

export function PriorityBadge({ priority, size = 'sm' }: PriorityBadgeProps) {
  const { t } = useTranslation();
  const style = PRIORITY_STYLES[priority];

  if (size === 'sm') {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}
      >
        <span className="text-[10px]">{style.icon}</span>
        {t(`priority.${priority}`)}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${style.bg} ${style.text}`}
    >
      <span className="text-xs">{style.icon}</span>
      {t(`priority.${priority}`)}
    </span>
  );
}
