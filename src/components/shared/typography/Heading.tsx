import React from 'react';
import { useLocalization } from '../../../hooks/useLocalization';

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function Heading({ text, level = 2, className = '' }: HeadingProps) {
  const { getFontFamily } = useLocalization();
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base'
  }[level];

  return (
    <Tag className={`${getFontFamily()} ${baseStyles} ${className}`}>
      {text}
    </Tag>
  );
}