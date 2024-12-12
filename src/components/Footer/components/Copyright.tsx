import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../../shared/typography/Text';

export default function Copyright() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Text
      text={`© ${currentYear} ${t('footer.copyright')}`}
      className="text-lg text-center"
    />
  );
}