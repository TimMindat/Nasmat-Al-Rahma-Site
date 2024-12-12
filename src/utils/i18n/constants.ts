export const SUPPORTED_LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    numberFormat: 'en-US',
    fontFamily: 'font-sans'
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    numberFormat: 'ar-SA',
    fontFamily: 'font-arabic'
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    numberFormat: 'de-DE',
    fontFamily: 'font-sans'
  }
} as const;

export const DEFAULT_LANGUAGE = 'en';

export const TRANSLATION_NAMESPACES = {
  COMMON: 'common',
  NAVIGATION: 'navigation',
  HOME: 'home',
  PACKAGES: 'packages',
  ABOUT: 'about',
  CONTACT: 'contact'
} as const;