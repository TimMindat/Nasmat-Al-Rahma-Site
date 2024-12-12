import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import FormInput from '../shared/FormInput';

export default function ContactForm() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${isRTL ? 'text-right font-arabic' : ''}`}>
      <FormInput
        id="name"
        label={t('contact.form.name')}
        required
      />
      <FormInput
        id="email"
        label={t('contact.form.email')}
        type="email"
        required
      />
      <FormInput
        id="message"
        label={t('contact.form.message')}
        type="textarea"
        required
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gold-600 text-white rounded hover:bg-gold-700 transition-colors"
      >
        {t('contact.form.submit')}
      </button>
    </form>
  );
}