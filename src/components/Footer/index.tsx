import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../hooks/useLocalization';
import Text from '../shared/typography/Text';

export default function Footer() {
  const { t } = useTranslation();
  const { getFontFamily } = useLocalization();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center space-y-4 ${getFontFamily()}`}>
          <Text 
            text={`© ${currentYear} ${t('footer.copyright')}`}
            className="text-lg text-center"
          />
          <Text 
            text={t('footer.developedBy')}
            className="text-sm text-gray-400"
          />
        </div>
      </div>
    </footer>
  );
}