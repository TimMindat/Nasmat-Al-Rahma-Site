import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../utils/i18n/constants';
import { formatNumber, formatDate, formatCurrency } from '../utils/i18n/formatters';
import type { Language } from '../types';

export function useLocalization() {
  const { t, i18n } = useTranslation();
  
  const currentLanguage = SUPPORTED_LANGUAGES[i18n.language as keyof typeof SUPPORTED_LANGUAGES] 
    || SUPPORTED_LANGUAGES[DEFAULT_LANGUAGE];

  const isRTL = currentLanguage.direction === 'rtl';
  
  const formatLocalNumber = (num: number) => formatNumber(num, i18n.language as Language);
  
  const formatLocalDate = (date: Date) => formatDate(date, i18n.language as Language);
  
  const formatLocalCurrency = (amount: number, currency: string) => 
    formatCurrency(amount, currency, i18n.language as Language);

  const getTextDirection = () => isRTL ? 'rtl' : 'ltr';
  
  const getFontFamily = () => isRTL ? 'font-arabic' : 'font-sans';

  return {
    t,
    currentLanguage,
    isRTL,
    formatLocalNumber,
    formatLocalDate,
    formatLocalCurrency,
    getTextDirection,
    getFontFamily
  };
}