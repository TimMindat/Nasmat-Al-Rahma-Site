import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CountdownTimer from './components/CountdownTimer';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import PriceHighlight from './components/PriceHighlight';

export default function Hajj2025() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            {t('hajj2025.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('hajj2025.subtitle')}
          </p>
        </motion.div>

        <PriceHighlight />
        
        <div className="space-y-16">
          <CountdownTimer />
          <Features />
          <CallToAction />
        </div>
      </div>
    </section>
  );
}