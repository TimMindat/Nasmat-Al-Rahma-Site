import React from 'react';
import { useLocalization } from '../../../../hooks/useLocalization';
import LanguageButton from './LanguageButton';
import { SUPPORTED_LANGUAGES } from '../../../../utils/i18n/constants';
import type { Language } from '../../../../types';

interface LanguageListProps {
  onLanguageSelect: (code: Language) => void;
}

export default function LanguageList({ onLanguageSelect }: LanguageListProps) {
  const { currentLanguage } = useLocalization();
  
  return (
    <div className="py-1">
      {Object.values(SUPPORTED_LANGUAGES).map((language) => (
        <LanguageButton
          key={language.code}
          code={language.code as Language}
          name={language.name}
          nativeName={language.nativeName}
          isActive={currentLanguage.code === language.code}
          onClick={onLanguageSelect}
        />
      ))}
    </div>
  );
}