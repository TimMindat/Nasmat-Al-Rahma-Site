import React from 'react';
import { useLocalization } from '../../../hooks/useLocalization';

interface TextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Text({ 
  text, 
  className = '', 
  as: Component = 'p' 
}: TextProps) {
  const { getFontFamily, getTextDirection } = useLocalization();

  return (
    <Component 
      className={`${getFontFamily()} ${className}`}
      dir={getTextDirection()}
    >
      {text}
    </Component>
  );
}