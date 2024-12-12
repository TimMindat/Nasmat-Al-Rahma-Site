import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Star, Users, Clock } from 'lucide-react';
import PackageCard from '../../components/shared/PackageCard';
import LocalizedSection from '../../components/shared/containers/LocalizedSection';
import { HAJJ_START_DATE, HAJJ_END_DATE } from '../../features/hajj2025/constants';
import type { Package } from '../../types';

export default function Packages() {
  const { t } = useTranslation();

  const packages: Package[] = [
    {
      id: 'hajj-2025',
      title: t('hajj2025.title'),
      description: t('hajj2025.subtitle'),
      features: [
        t('hajj2025.features.accommodation.description'),
        t('hajj2025.features.flights.description'),
        t('hajj2025.features.transport.description'),
        t('hajj2025.features.dates.description')
      ],
      price: '€7,000',
      duration: '30 days',
      image: 'https://images.unsplash.com/photo-1604867317798-4ae4a31d4e54?auto=format&fit=crop&w=800'
    },
    {
      id: 'vip-umrah',
      title: t('packages.vipUmrah.title'),
      description: t('packages.vipUmrah.description'),
      features: t('packages.vipUmrah.features', { returnObjects: true }),
      price: '€5,000',
      duration: '10 days',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800'
    }
  ];

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
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocalizedSection
          title={t('packages.title')}
          subtitle={t('packages.subtitle')}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PackageCard
                  package={pkg}
                  buttonText={t('packages.bookNow')}
                />
              </motion.div>
            ))}
          </div>
        </LocalizedSection>

        <LocalizedSection
          title={t('whyChooseUs.title')}
          subtitle={t('whyChooseUs.subtitle')}
          className="bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </LocalizedSection>
      </div>
    </div>
  );
}