import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../../hooks/useLocalization';
import Text from '../../../components/shared/typography/Text';
import LocalizedHeading from '../../../components/shared/typography/LocalizedHeading';
import LocalizedQuote from '../../../components/shared/LocalizedQuote';

export default function AboutContent() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();

  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <section>
        <LocalizedHeading 
          text={t('about.mission.title')} 
          level={2}
          className="mb-4"
        />
        <Text 
          text={t('about.mission.description')} 
          className="text-gray-600"
        />
      </section>

      <section>
        <LocalizedHeading 
          text={t('about.values.title')} 
          level={2}
          className="mb-4"
        />
        <ValuesList />
      </section>

      <LocalizedQuote 
        text={t('about.quoteText')}
        source={t('about.quoteSource')}
        className="mt-8"
      />
    </motion.div>
  );
}

function ValuesList() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();
  
  // Ensure we have an array of values with proper fallback
  const values = t('about.values.items', { returnObjects: true }) || [];
  const valuesList = Array.isArray(values) ? values : [];

  if (valuesList.length === 0) return null;

  return (
    <ul className="space-y-4">
      {valuesList.map((value, index) => (
        <li 
          key={index} 
          className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <span className={`
            w-2 h-2 bg-gold-600 rounded-full 
            ${isRTL ? 'ml-3' : 'mr-3'}
          `} />
          <Text text={value} />
        </li>
      ))}
    </ul>
  );
}