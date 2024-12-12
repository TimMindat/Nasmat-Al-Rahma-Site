import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hotel, Plane, Bus, Calendar } from 'lucide-react';
import FeatureCard from './FeatureCard';
import type { Feature } from '../types';

export default function Features() {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: Hotel,
      title: t('hajj2025.features.accommodation.title'),
      description: t('hajj2025.features.accommodation.description')
    },
    {
      icon: Plane,
      title: t('hajj2025.features.flights.title'),
      description: t('hajj2025.features.flights.description')
    },
    {
      icon: Bus,
      title: t('hajj2025.features.transport.title'),
      description: t('hajj2025.features.transport.description')
    },
    {
      icon: Calendar,
      title: t('hajj2025.features.dates.title'),
      description: t('hajj2025.features.dates.description')
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}