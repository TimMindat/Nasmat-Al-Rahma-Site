import React from 'react';
import Hero from '../components/layout/Hero';
import Hajj2025 from '../features/hajj2025';
import FeaturedPackages from '../components/packages/FeaturedPackages';
import WhyChooseUs from '../components/features/WhyChooseUs';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Hajj2025 />
      <FeaturedPackages />
      <WhyChooseUs />
    </div>
  );
}