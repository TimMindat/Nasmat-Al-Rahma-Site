import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';

interface LocalizedTextProps {
  text: string;
  className?: string;
}

export default function LocalizedText({ text, className = '' }: LocalizedTextProps) {
  const { isRTL } = useLocalization();

  return (
    <p className={`${isRTL ? 'font-arabic' : ''} ${className}`}>
      {text}
    </p>
  );
}