import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '../types';

export function useLanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(async (language: Language) => {
    try {
      // Change language in i18next
      await i18n.changeLanguage(language);
      
      // Update HTML attributes
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      
      // Save preference
      localStorage.setItem('preferred-language', language);
      
      // Force re-render of RTL/LTR sensitive components
      window.dispatchEvent(new Event('languagechange'));
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  }, [i18n]);

  return {
    currentLanguage: i18n.language as Language,
    changeLanguage
  };
}