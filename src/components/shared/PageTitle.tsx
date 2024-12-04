import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  const { isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 ${isRTL ? 'font-arabic' : ''}`}
    >
      <h1 className={`text-4xl ${isRTL ? 'font-arabic' : 'font-serif'} text-gray-900 mb-4`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-xl text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}