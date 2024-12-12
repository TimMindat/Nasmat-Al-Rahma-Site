import React from 'react';
import { useTranslation } from 'react-i18next';
import PromptButtons from './PromptButtons';

interface PromptContentProps {
  onInstall: () => void;
  onRemindLater: () => void;
}

export default function PromptContent({ onInstall, onRemindLater }: PromptContentProps) {
  const { t } = useTranslation();

  return (
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-gray-900">
        {t('pwa.installPrompt.title')}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        {t('pwa.installPrompt.description')}
      </p>
      <PromptButtons 
        onInstall={onInstall}
        onRemindLater={onRemindLater}
      />
    </div>
  );
}