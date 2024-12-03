import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from './Navbar';
import BottomNav from './MobileNav/BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'font-arabic' : ''}`}>
      <Navbar />
      <main className="relative pb-16 md:pb-0">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}