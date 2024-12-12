import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function PriceHighlight() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <p className="text-2xl text-gold-600 font-semibold">
        {t('hajj2025.priceStart')}
      </p>
    </motion.div>
  );
}