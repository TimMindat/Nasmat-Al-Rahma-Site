import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import PageTitle from '../components/shared/PageTitle';

export default function About() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const values = t('about.values.items', { returnObjects: true }) as string[];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle 
          title={t('about.title')} 
          subtitle={t('about.subtitle')} 
        />

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_Kaaba_during_Hajj.jpg/1920px-The_Kaaba_during_Hajj.jpg"
              alt={t('about.title')}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`space-y-6 ${isRTL ? 'text-right font-arabic' : ''}`}
          >
            <h2 className={`text-2xl ${isRTL ? 'font-arabic' : 'font-serif'} text-gray-900`}>
              {t('about.mission.title')}
            </h2>
            <p className="text-gray-600">{t('about.mission.description')}</p>
            <h2 className={`text-2xl ${isRTL ? 'font-arabic' : 'font-serif'} text-gray-900`}>
              {t('about.values.title')}
            </h2>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`w-2 h-2 bg-gold-600 rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-gold-50 rounded-lg">
              <p className={`text-center text-gold-800 italic ${isRTL ? 'font-arabic' : ''}`}>
                {t('about.quoteText')}
                <br />
                <span className="text-sm mt-2 block">- {t('about.quoteSource')}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}