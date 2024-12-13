import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useLocalization } from '../../../hooks/useLocalization';
import { SUPPORTED_LANGUAGES } from '../../../utils/i18n/constants';
import type { Language } from '../../../types';

export default function DesktopLanguageSwitcher() {
  const { t } = useTranslation();
  const { currentLanguage, isRTL } = useLocalization();

  const handleLanguageChange = (code: Language) => {
    // Language change is handled by the useLocalization hook
  };

  return (
    <div className="relative group">
      <button 
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 
          min-w-[44px] min-h-[44px]
          ${isRTL ? 'space-x-reverse' : ''}`}
      >
        <Globe className="w-5 h-5" />
        <span>{SUPPORTED_LANGUAGES[currentLanguage as keyof typeof SUPPORTED_LANGUAGES]?.nativeName}</span>
      </button>
      
      <div className={`absolute ${
        isRTL ? 'right-0' : 'left-0'
      } mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-200`}
      >
        <div className="py-1">
          {Object.values(SUPPORTED_LANGUAGES).map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code as Language)}
              className={`block w-full text-left px-4 py-2 text-sm text-gray-700 
                hover:bg-gray-100 min-h-[44px]
                ${currentLanguage === language.code ? 'bg-gray-50' : ''}`}
            >
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-gray-500 text-xs ml-2">({language.name})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}