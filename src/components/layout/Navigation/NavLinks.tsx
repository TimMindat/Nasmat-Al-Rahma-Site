import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import { useLocalization } from '../../../hooks/useLocalization';

export default function NavLinks() {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();

  const links = [
    { to: '/packages', label: t('nav.packages') },
    { to: '/spiritual-guidance', label: t('nav.spiritualGuidance') },
    { to: '/ziyarat', label: t('nav.ziyarat') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') }
  ];

  return (
    <div className={`hidden sm:flex sm:space-x-8 items-center ${isRTL ? 'space-x-reverse' : ''}`}>
      {links.map(({ to, label }) => (
        <NavLink key={to} to={to} label={label} />
      ))}
    </div>
  );
}