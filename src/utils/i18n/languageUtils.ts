import { Language } from '../../types';

export const getLanguageDirection = (language: Language): 'rtl' | 'ltr' => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

export const getLanguageFontFamily = (language: Language): string => {
  return language === 'ar' ? 'font-arabic' : 'font-sans';
};

export const getSupportedLanguages = () => [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' }
] as const;