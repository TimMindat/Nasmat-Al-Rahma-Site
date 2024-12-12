import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';

interface LocalizedContentProps {
  children: React.ReactNode;
  className?: string;
  preserveDirection?: boolean;
}

export default function LocalizedContent({ 
  children, 
  className = '',
  preserveDirection = false 
}: LocalizedContentProps) {
  const { isRTL, getTextDirection, getFontFamily } = useLocalization();

  return (
    <div 
      className={`${getFontFamily()} ${className}`}
      dir={preserveDirection ? undefined : getTextDirection()}
    >
      {children}
    </div>
  );
}