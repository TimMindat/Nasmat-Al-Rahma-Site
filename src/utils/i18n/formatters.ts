import { Language } from '../../types';

export const formatNumber = (number: number, language: Language): string => {
  return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : language).format(number);
};

export const formatDate = (date: Date, language: Language): string => {
  return new Intl.DateTimeFormat(language === 'ar' ? 'ar-SA' : language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const formatCurrency = (amount: number, currency: string, language: Language): string => {
  return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : language, {
    style: 'currency',
    currency: currency
  }).format(amount);
};