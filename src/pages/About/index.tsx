import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../hooks/useLocalization';
import LocalizedSection from '../../components/shared/containers/LocalizedSection';
import AboutImage from './components/AboutImage';
import AboutContent from './components/AboutContent';

export default function About() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocalizedSection
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          className="mb-12"
        >
          <div className={`
            grid grid-cols-1 md:grid-cols-2 gap-8 items-center
            ${isRTL ? 'md:flex-row-reverse' : ''}
          `}>
            <AboutImage />
            <AboutContent />
          </div>
        </LocalizedSection>
      </div>
    </div>
  );
}