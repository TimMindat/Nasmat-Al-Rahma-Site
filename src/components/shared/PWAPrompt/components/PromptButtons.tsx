import React from 'react';
import { Clock } from 'lucide-react';

interface PromptButtonsProps {
  onInstall: () => void;
  onRemindLater: () => void;
}

export default function PromptButtons({ onInstall, onRemindLater }: PromptButtonsProps) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row gap-2">
      <button
        onClick={onInstall}
        className="flex-1 px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
      >
        Install App
      </button>
      <button
        onClick={onRemindLater}
        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
      >
        <Clock className="w-4 h-4" />
        Remind Later
      </button>
    </div>
  );
}