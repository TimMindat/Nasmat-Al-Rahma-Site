import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLocalization } from '../../../../hooks/useLocalization';
import LanguageList from './LanguageList';
import type { Language } from '../../../../types';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, isRTL } = useLocalization();

  const handleLanguageSelect = (code: Language) => {
    // Language change logic will be handled by the useLanguage hook
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      <button 
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${
          isRTL ? 'space-x-reverse' : ''
        }`}
      >
        <Globe className="w-5 h-5" />
        <span>{currentLanguage.nativeName}</span>
      </button>
      
      <div 
        className={`absolute ${
          isRTL ? 'right-0' : 'left-0'
        } mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}
      >
        <LanguageList onLanguageSelect={handleLanguageSelect} />
      </div>
    </div>
  );
}