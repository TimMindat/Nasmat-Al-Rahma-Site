import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CloseButtonProps {
  onDismiss: () => void;
}

export default function CloseButton({ onDismiss }: CloseButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={onDismiss}
      className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
      aria-label={t('pwa.close')}
    >
      <X className="w-5 h-5" />
    </button>
  );
}