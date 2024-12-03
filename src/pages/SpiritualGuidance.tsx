import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Book, Users, Heart, Map } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import PageTitle from '../components/shared/PageTitle';

export default function SpiritualGuidance() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

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
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle 
          title={t('spiritualGuidance.title')} 
          subtitle={t('spiritualGuidance.subtitle')} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-6 rounded-lg shadow-lg ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className={`w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4 ${isRTL ? 'mr-0 ml-auto' : 'ml-0'}`}>
                <service.icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}