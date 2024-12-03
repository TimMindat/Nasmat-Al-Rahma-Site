import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1537444532052-2afbf337c310?auto=format&fit=crop&q=80"
          alt={t('hero.imageAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-4 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-gold-200 mb-12 max-w-2xl mx-auto italic">
            {t('hero.bismillah')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-8 py-3 bg-gold-600 text-white rounded-lg text-lg font-medium hover:bg-gold-700 transition-colors"
              >
                {t('hero.explorePackages')}
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                {t('hero.contactUs')}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}