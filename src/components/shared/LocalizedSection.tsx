import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import LocalizedHeading from './LocalizedHeading';
import LocalizedText from './LocalizedText';

interface LocalizedSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function LocalizedSection({ 
  title, 
  subtitle, 
  children, 
  className = '',
  headingLevel = 2
}: LocalizedSectionProps) {
  const { isRTL } = useLocalization();

  return (
    <section className={`${className}`}>
      <div className={`text-center mb-8 ${isRTL ? 'font-arabic' : ''}`}>
        <LocalizedHeading 
          text={title} 
          level={headingLevel} 
          className="mb-2"
        />
        {subtitle && (
          <LocalizedText 
            text={subtitle} 
            className="text-xl text-gray-600"
          />
        )}
      </div>
      <div className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </section>
  );
}