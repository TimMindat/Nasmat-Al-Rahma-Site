import React from 'react';
import PromptButtons from './PromptButtons';

interface PromptContentProps {
  onInstall: () => void;
  onRemindLater: () => void;
}

export default function PromptContent({ onInstall, onRemindLater }: PromptContentProps) {
  return (
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-gray-900">
        Install Our App
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Install our app for a better experience and quick access to our services
      </p>
      <PromptButtons 
        onInstall={onInstall}
        onRemindLater={onRemindLater}
      />
    </div>
  );
}