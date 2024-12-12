import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../../hooks/useLocalization';

export default function BookNowButton() {
  const { t } = useTranslation();
  const { getFontFamily } = useLocalization();

  return (
    <Link
      to="/book-now"
      className={`
        ${getFontFamily()}
        inline-flex items-center px-4 py-2 
        border border-transparent text-sm font-medium 
        rounded-md text-white bg-gold-600 hover:bg-gold-700
        transition-colors
      `}
    >
      {t('nav.bookNow')}
    </Link>
  );
}