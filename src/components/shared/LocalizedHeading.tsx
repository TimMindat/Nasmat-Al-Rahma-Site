import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';

interface LocalizedHeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function LocalizedHeading({ text, level = 2, className = '' }: LocalizedHeadingProps) {
  const { isRTL } = useLocalization();
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag 
      className={`
        ${isRTL ? 'font-arabic' : 'font-serif'}
        ${level === 1 ? 'text-4xl' : ''}
        ${level === 2 ? 'text-3xl' : ''}
        ${level === 3 ? 'text-2xl' : ''}
        ${level === 4 ? 'text-xl' : ''}
        ${level === 5 ? 'text-lg' : ''}
        ${level === 6 ? 'text-base' : ''}
        ${className}
      `}
    >
      {text}
    </Tag>
  );
}