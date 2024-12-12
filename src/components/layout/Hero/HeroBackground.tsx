import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroBackground() {
  const { t } = useTranslation();

  return (
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop"
        alt={t('hero.imageAlt')}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
    </div>
  );
}