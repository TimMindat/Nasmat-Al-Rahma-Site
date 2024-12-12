import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  reversed?: boolean;
}

export default function ContentSection({ children, className = '', reversed = false }: ContentSectionProps) {
  const { isRTL } = useLanguage();

  const direction = reversed ? 'flex-row-reverse' : 'flex-row';
  const rtlDirection = isRTL ? (reversed ? 'flex-row' : 'flex-row-reverse') : direction;

  return (
    <div className={`flex flex-col md:${rtlDirection} gap-8 ${className}`}>
      {children}
    </div>
  );
}