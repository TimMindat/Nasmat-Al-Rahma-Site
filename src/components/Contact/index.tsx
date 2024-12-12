import React from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedSection from '../shared/containers/LocalizedSection';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <LocalizedSection
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      className="py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </LocalizedSection>
  );
}