import React from 'react';
import { SUPPORTED_LANGUAGES } from '../../../../utils/i18n/constants';
import LanguageButton from './LanguageButton';
import type { Language } from '../../../../types';

interface LanguageListProps {
  currentLanguage: Language;
  onLanguageSelect: (code: Language) => void;
  className?: string;
}

export default function LanguageList({
  currentLanguage,
  onLanguageSelect,
  className = ''
}: LanguageListProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Object.values(SUPPORTED_LANGUAGES).map((language) => (
        <LanguageButton
          key={language.code}
          code={language.code as Language}
          name={language.name}
          nativeName={language.nativeName}
          isActive={currentLanguage === language.code}
          onClick={onLanguageSelect}
        />
      ))}
    </div>
  );
}