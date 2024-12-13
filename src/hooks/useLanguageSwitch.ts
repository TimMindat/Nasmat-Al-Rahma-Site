import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '../types';

export function useLanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(async (language: Language) => {
    try {
      await i18n.changeLanguage(language);
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      localStorage.setItem('preferred-language', language);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  }, [i18n]);

  return {
    changeLanguage,
    currentLanguage: i18n.language as Language
  };
}