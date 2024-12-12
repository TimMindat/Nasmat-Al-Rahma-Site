import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import Text from './typography/Text';

interface QuoteProps {
  text: string;
  source?: string;
  className?: string;
}

export default function LocalizedQuote({ text, source, className = '' }: QuoteProps) {
  const { getFontFamily } = useLocalization();

  return (
    <div className={`p-6 bg-gold-50 rounded-lg ${className}`}>
      <Text 
        text={text}
        className={`
          text-center text-gold-800 italic 
          ${getFontFamily()}
        `}
      />
      {source && (
        <Text 
          text={source}
          className="text-sm mt-2 block text-center"
        />
      )}
    </div>
  );
}