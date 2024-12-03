import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import type { Package } from '../../types';

export default function Packages() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

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
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <ul className={`space-y-2 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gold-600 font-semibold">{pkg.price}</span>
                  <span className="text-sm text-gray-500">{pkg.duration}</span>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gold-600 text-white rounded hover:bg-gold-700 transition-colors">
                  {t('packages.bookNow')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}