import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLocalization } from '../../../hooks/useLocalization';
import Text from '../../shared/typography/Text';

export default function ContactInfo() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();

  const contactItems = [
    {
      icon: Mail,
      title: t('contact.form.email'),
      content: t('contact.info.email')
    },
    {
      icon: Phone,
      title: t('contact.form.phone'),
      content: t('contact.info.phone')
    },
    {
      icon: MapPin,
      title: t('contact.form.address'),
      content: t('contact.info.address')
    }
  ];

  return (
    <div className="space-y-8">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}
        >
          <item.icon className="w-6 h-6 text-gold-600 flex-shrink-0" />
          <div>
            <Text text={item.title} className="font-semibold" />
            <Text text={item.content} className="text-gray-600" />
          </div>
        </div>
      ))}
    </div>
  );
}