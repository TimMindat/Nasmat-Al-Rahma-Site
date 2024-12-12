import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../../hooks/useLocalization';

export default function HeroButtons() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();

  return (
    <div className={`
      flex flex-col sm:flex-row justify-center 
      space-y-4 sm:space-y-0 
      ${isRTL ? 'sm:space-x-reverse' : ''} 
      sm:space-x-4
    `}>
      <Link to="/packages">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-auto px-8 py-3 
            bg-gold-600 text-white rounded-lg 
            text-lg font-medium hover:bg-gold-700 
            transition-colors"
        >
          {t('hero.explorePackages')}
        </motion.button>
      </Link>

      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-auto px-8 py-3 
            bg-transparent border-2 border-white 
            text-white rounded-lg text-lg font-medium 
            hover:bg-white hover:text-gray-900 
            transition-colors"
        >
          {t('hero.contactUs')}
        </motion.button>
      </Link>
    </div>
  );
}