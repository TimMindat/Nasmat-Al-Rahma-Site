import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../../../hooks/useLocalization';
import HeroButtons from './HeroButtons';
import { slideUp } from '../../../utils/animations/variants';

export default function HeroContent() {
  const { t } = useTranslation();
  const { getFontFamily } = useLocalization();

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      className="text-center w-full"
    >
      <h1 className={`
        ${getFontFamily()} 
        text-4xl sm:text-5xl md:text-6xl 
        text-white mb-4
      `}>
        {t('hero.title')}
      </h1>
      
      <p className={`
        ${getFontFamily()}
        text-xl sm:text-2xl text-white mb-4 
        max-w-3xl mx-auto
      `}>
        {t('hero.subtitle')}
      </p>
      
      <p className={`
        ${getFontFamily()}
        text-lg text-gold-200 mb-12 
        max-w-2xl mx-auto italic
      `}>
        {t('hero.bismillah')}
      </p>

      <HeroButtons />
    </motion.div>
  );
}