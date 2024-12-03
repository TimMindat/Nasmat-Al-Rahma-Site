import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'font-arabic' : ''}`}>
      <Navbar />
      <main className="relative">
        {children}
      </main>
    </div>
  );
}