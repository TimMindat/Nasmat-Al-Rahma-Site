import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Home, Package, Book, MapPin, Phone } from 'lucide-react';
import NavItem from './NavItem';
import MobileLanguageSelector from './MobileLanguageSelector';

export default function BottomNav() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/packages', icon: Package, label: t('nav.packages') },
    { path: '/spiritual-guidance', icon: Book, label: t('nav.spiritualGuidance') },
    { path: '/ziyarat', icon: MapPin, label: t('nav.ziyarat') },
    { path: '/contact', icon: Phone, label: t('nav.contact') }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            {...item}
            isActive={location.pathname === item.path}
          />
        ))}
      </div>
      <MobileLanguageSelector />
    </nav>
  );
}