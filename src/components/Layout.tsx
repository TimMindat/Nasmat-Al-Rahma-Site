import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from './Navbar';
import BottomNav from './MobileNav/BottomNav';
import Footer from './shared/Footer';
import InstallPrompt from './shared/PWAPrompt/InstallPrompt';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'font-arabic' : ''}`}>
      <Navbar />
      <main className="flex-grow pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
      <BottomNav />
      <InstallPrompt />
    </div>
  );
}