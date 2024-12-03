import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="space-y-4">
            <p className={`text-xl ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>
              {t('testimonials.comingSoon')}
            </p>
            <p className="text-gray-600 italic">Coming Soon - Real Pilgrim Experiences</p>
            <p className="text-gray-600 font-arabic text-right">قريباً - تجارب حقيقية للحجاج</p>
            <p className="text-gray-600">Demnächst - Echte Pilger-Erfahrungen</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}