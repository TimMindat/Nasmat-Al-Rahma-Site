import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import DesktopLanguageSwitcher from './DesktopLanguageSwitcher';
import MobileLanguageSwitcher from './MobileLanguageSwitcher';

export default function LanguageSwitcher() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return isMobile ? <MobileLanguageSwitcher /> : <DesktopLanguageSwitcher />;
}