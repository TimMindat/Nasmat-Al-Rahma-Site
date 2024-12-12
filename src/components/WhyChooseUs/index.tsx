import React from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedSection from '../shared/containers/LocalizedSection';
import FeatureGrid from './components/FeatureGrid';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <LocalizedSection
      title={t('whyChooseUs.title')}
      subtitle={t('whyChooseUs.subtitle')}
      className="py-20 bg-gray-50"
    >
      <FeatureGrid />
    </LocalizedSection>
  );
}