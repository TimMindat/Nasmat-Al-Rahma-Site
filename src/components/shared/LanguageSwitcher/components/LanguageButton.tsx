import React from 'react';
import type { Language } from '../../../../types';

interface LanguageButtonProps {
  code: Language;
  name: string;
  nativeName: string;
  isActive: boolean;
  onClick: (code: Language) => void;
  className?: string;
}

export default function LanguageButton({
  code,
  name,
  nativeName,
  isActive,
  onClick,
  className = ''
}: LanguageButtonProps) {
  return (
    <button
      onClick={() => onClick(code)}
      className={`
        w-full p-4 text-left rounded-lg flex items-center justify-between
        min-h-[44px] transition-colors
        ${isActive ? 'bg-gold-50 text-gold-600' : 'hover:bg-gray-50'}
        ${className}
      `}
    >
      <span className="font-medium">{nativeName}</span>
      <span className="text-sm text-gray-500">({name})</span>
    </button>
  );
}