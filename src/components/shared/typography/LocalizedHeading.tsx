import React from 'react';
import { useLocalization } from '../../../hooks/useLocalization';

interface LocalizedHeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  centered?: boolean;
}

export default function LocalizedHeading({ 
  text, 
  level = 2, 
  className = '',
  centered = true 
}: LocalizedHeadingProps) {
  const { getFontFamily, getTextDirection } = useLocalization();
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  }[level];

  return (
    <Tag 
      className={`
        ${getFontFamily()}
        ${baseStyles}
        ${centered ? 'text-center' : ''}
        ${className}
      `}
      dir={getTextDirection()}
    >
      {text}
    </Tag>
  );
}