import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../hooks/useLocalization';
import Text from './typography/Text';

export default function LocalizedFooter() {
  const { t } = useTranslation();
  const { isRTL, getFontFamily } = useLocalization();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          flex flex-col items-center space-y-4 
          ${isRTL ? 'text-right' : 'text-left'}
          ${getFontFamily()}
        `}>
          <div className="text-center">
            <Text 
              text={`© ${currentYear} ${t('footer.copyright')}`}
              className="text-lg"
            />
            <Text 
              text={t('footer.developedBy')}
              className="text-sm text-gray-400 mt-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}