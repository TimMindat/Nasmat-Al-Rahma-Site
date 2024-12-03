import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export default function ContactInfo() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className="space-y-8">
      <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
        <Mail className="w-6 h-6 text-gold-600 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">{t('contact.form.email')}</h3>
          <p className="text-gray-600">{t('contact.info.email')}</p>
        </div>
      </div>
      <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
        <Phone className="w-6 h-6 text-gold-600 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">{t('contact.form.phone')}</h3>
          <p className="text-gray-600">{t('contact.info.phone')}</p>
        </div>
      </div>
      <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
        <MapPin className="w-6 h-6 text-gold-600 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">{t('contact.form.address')}</h3>
          <p className="text-gray-600">{t('contact.info.address')}</p>
        </div>
      </div>
    </div>
  );
}