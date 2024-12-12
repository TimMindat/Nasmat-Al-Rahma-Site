import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

export default function CountdownTimer() {
  const { t } = useTranslation();
  const timeLeft = useCountdown();

  const timeUnits = [
    { value: timeLeft.days, label: t('hajj2025.countdown.days') },
    { value: timeLeft.hours, label: t('hajj2025.countdown.hours') },
    { value: timeLeft.minutes, label: t('hajj2025.countdown.minutes') },
    { value: timeLeft.seconds, label: t('hajj2025.countdown.seconds') }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <h3 className="text-xl font-serif text-center mb-6">
        {t('hajj2025.countdown.title')}
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {timeUnits.map(({ value, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-gold-600 mb-2">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}