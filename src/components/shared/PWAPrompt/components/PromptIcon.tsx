import React from 'react';
import { Download } from 'lucide-react';

export default function PromptIcon() {
  return (
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
        <Download className="w-6 h-6 text-gold-600" />
      </div>
    </div>
  );
}