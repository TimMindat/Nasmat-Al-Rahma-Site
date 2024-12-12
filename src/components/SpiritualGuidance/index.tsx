import React from 'react';
import { useTranslation } from 'react-i18next';
import { Book, Users, Heart, Map } from 'lucide-react';
import LocalizedSection from '../shared/containers/LocalizedSection';
import ServiceCard from './components/ServiceCard';

export default function SpiritualGuidance() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Book,
      title: t('spiritualGuidance.services.education.title'),
      description: t('spiritualGuidance.services.education.description')
    },
    {
      icon: Users,
      title: t('spiritualGuidance.services.scholars.title'),
      description: t('spiritualGuidance.services.scholars.description')
    },
    {
      icon: Heart,
      title: t('spiritualGuidance.services.support.title'),
      description: t('spiritualGuidance.services.support.description')
    },
    {
      icon: Map,
      title: t('spiritualGuidance.services.tours.title'),
      description: t('spiritualGuidance.services.tours.description')
    }
  ];

  return (
    <LocalizedSection
      title={t('spiritualGuidance.title')}
      subtitle={t('spiritualGuidance.subtitle')}
      className="py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </LocalizedSection>
  );
}