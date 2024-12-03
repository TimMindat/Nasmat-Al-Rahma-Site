import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import type { Language } from '../types';

export function useLanguage() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    if (i18n.language !== savedLang) {
      changeLanguage(savedLang as Language);
    }
  }, []);

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    localStorage.setItem('preferred-language', lng);
  };

  return {
    currentLanguage: i18n.language as Language,
    changeLanguage,
    isRTL: i18n.dir() === 'rtl'
  };
}