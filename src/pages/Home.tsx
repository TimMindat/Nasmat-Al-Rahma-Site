import React from 'react';
import Hero from '../components/Hero';
import Hajj2025 from '../features/hajj2025';
import FeaturedPackages from '../components/FeaturedPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Hajj2025 />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}