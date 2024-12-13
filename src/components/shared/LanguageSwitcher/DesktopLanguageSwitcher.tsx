import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useLocalization } from '../../../hooks/useLocalization';
import { useLanguageSwitch } from '../../../hooks/useLanguageSwitch';
import { SUPPORTED_LANGUAGES } from '../../../utils/i18n/constants';
import LanguageList from './components/LanguageList';

export default function DesktopLanguageSwitcher() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();
  const { currentLanguage, changeLanguage } = useLanguageSwitch();
  
  const currentLanguageData = SUPPORTED_LANGUAGES[currentLanguage as keyof typeof SUPPORTED_LANGUAGES];

  return (
    <div className="relative group">
      <button 
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 
          min-w-[44px] min-h-[44px]
          ${isRTL ? 'space-x-reverse' : ''}`}
      >
        <Globe className="w-5 h-5" />
        <span>{currentLanguageData?.nativeName}</span>
      </button>
      
      <div className={`absolute ${
        isRTL ? 'right-0' : 'left-0'
      } mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-200 py-1`}
      >
        <LanguageList
          currentLanguage={currentLanguage}
          onLanguageSelect={changeLanguage}
        />
      </div>
    </div>
  );
}