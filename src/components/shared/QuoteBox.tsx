import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface QuoteBoxProps {
  text: string;
  source?: string;
}

export default function QuoteBox({ text, source }: QuoteBoxProps) {
  const { isRTL } = useLanguage();

  return (
    <div className="mt-8 p-6 bg-gold-50 rounded-lg">
      <p className={`text-center text-gold-800 italic ${isRTL ? 'font-arabic' : ''}`}>
        {text}
        {source && <span className="text-sm mt-2 block">- {source}</span>}
      </p>
    </div>
  );
}