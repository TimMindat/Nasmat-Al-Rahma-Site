import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PackageCard from '../../components/shared/PackageCard';
import type { Package } from '../../types';

export default function Packages() {
  const { t } = useTranslation();

  const packages: Package[] = [
    {
      id: 'vip-umrah',
      title: t('packages.vipUmrah.title'),
      description: t('packages.vipUmrah.description'),
      features: t('packages.vipUmrah.features', { returnObjects: true }),
      price: '$5,000',
      duration: '10 days',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800'
    },
    {
      id: 'premium-hajj',
      title: t('packages.premiumHajj.title'),
      description: t('packages.premiumHajj.description'),
      features: t('packages.premiumHajj.features', { returnObjects: true }),
      price: '$12,000',
      duration: '14 days',
      image: 'https://images.unsplash.com/photo-1604867317798-4ae4a31d4e54?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-4">{t('packages.title')}</h1>
          <p className="text-xl text-gray-600">{t('packages.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
}