import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PackageCard from './shared/PackageCard';
import type { Package } from '../types';

export default function FeaturedPackages() {
  const { t } = useTranslation();

  const packages: Package[] = [
    {
      id: 'vip-umrah',
      title: t('packages.vipUmrah.title'),
      description: t('packages.vipUmrah.description'),
      features: t('packages.vipUmrah.features', { returnObjects: true }) as string[],
      price: '€5,000',
      duration: '10 days',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif text-center mb-12">{t('packages.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                buttonText={t('packages.bookNow')}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}