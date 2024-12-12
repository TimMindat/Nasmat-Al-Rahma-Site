import React from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedSection from '../shared/containers/LocalizedSection';
import Text from '../shared/typography/Text';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <LocalizedSection
      title={t('testimonials.title')}
      className="py-20 bg-white"
    >
      <div className="space-y-4">
        <Text 
          text={t('testimonials.comingSoon')} 
          className="text-xl text-center"
        />
      </div>
    </LocalizedSection>
  );
}