import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Star, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

export default function WhyChooseUs() {
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('whyChooseUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}