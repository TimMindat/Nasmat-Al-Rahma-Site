import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../types';

export default function LanguageSelector() {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, isRTL } = useLanguage();

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' }
  ];

  return (
    <div className="relative group">
      <button 
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${
          isRTL ? 'space-x-reverse' : ''
        }`}
      >
        <Globe className="w-5 h-5" />
        <span>{languages.find(lang => lang.code === currentLanguage)?.nativeName}</span>
      </button>
      <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                currentLanguage === language.code ? 'bg-gray-50' : ''
              }`}
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