import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import type { Language } from '../types';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'de', name: 'Deutsch' }
  ];

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100">
        <Globe className="w-5 h-5" />
        <span>{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}