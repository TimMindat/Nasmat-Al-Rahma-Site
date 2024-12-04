import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '../types';

export function useLanguage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    if (i18n.language !== savedLang) {
      changeLanguage(savedLang as Language);
    }
  }, [i18n]);

  const changeLanguage = useCallback((lng: Language) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    localStorage.setItem('preferred-language', lng);
  }, [i18n]);

  return {
    currentLanguage: i18n.language as Language,
    changeLanguage,
    isRTL: i18n.dir() === 'rtl'
  };
}