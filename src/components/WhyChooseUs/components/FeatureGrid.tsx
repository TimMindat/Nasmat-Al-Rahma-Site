import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Star, Users, Clock } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeatureGrid() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('whyChooseUs.features.licensed.title'),
      description: t('whyChooseUs.features.licensed.description')
    },
    {
      icon: Star,
      title: t('whyChooseUs.features.premium.title'),
      description: t('whyChooseUs.features.premium.description')
    },
    {
      icon: Users,
      title: t('whyChooseUs.features.expert.title'),
      description: t('whyChooseUs.features.expert.description')
    },
    {
      icon: Clock,
      title: t('whyChooseUs.features.support.title'),
      description: t('whyChooseUs.features.support.description')
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