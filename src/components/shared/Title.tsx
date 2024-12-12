import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function Title({ title, subtitle, className = '', centered = true }: TitleProps) {
  const { isRTL } = useLanguage();

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl ${isRTL ? 'font-arabic' : 'font-serif'} text-gray-900 mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}