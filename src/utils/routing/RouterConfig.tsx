import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Packages from '../../pages/Packages';
import SpiritualGuidance from '../../pages/SpiritualGuidance';
import Ziyarat from '../../pages/Ziyarat';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import BookNow from '../../pages/BookNow';
import ScrollToTop from './ScrollToTop';

export default function RouterConfig() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/spiritual-guidance" element={<SpiritualGuidance />} />
        <Route path="/ziyarat" element={<Ziyarat />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}