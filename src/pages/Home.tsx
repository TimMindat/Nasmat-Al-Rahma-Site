import React from 'react';
import Hero from '../components/Hero';
import FeaturedPackages from '../components/FeaturedPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}