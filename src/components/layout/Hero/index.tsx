import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <HeroBackground />
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <HeroContent />
      </div>
    </div>
  );
}