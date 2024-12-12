import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../../hooks/useLocalization';

export default function AboutImage() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();

  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src="https://images.unsplash.com/photo-1604867317798-4ae4a31d4e54?auto=format&fit=crop&w=800"
        alt={t('about.title')}
        className="rounded-lg shadow-lg w-full h-auto"
      />
    </motion.div>
  );
}