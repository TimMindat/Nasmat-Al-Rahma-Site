import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from './Navbar';
import BottomNav from './MobileNav/BottomNav';
import Footer from './Footer';
import PWAPrompt from './shared/PWAPrompt';
import MobileLanguageSwitcher from './shared/LanguageSwitcher/MobileLanguageSwitcher';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'font-arabic' : ''}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer className="pb-[72px] md:pb-0" />
      <BottomNav />
      <PWAPrompt />
      <MobileLanguageSwitcher />
    </div>
  );
}