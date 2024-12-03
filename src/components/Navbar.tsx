import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import MobileNav from './MobileNav';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://i.imgur.com/kez1tXP.png"
                alt="Nasmat Al Rahma"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/packages" className="text-gray-700 hover:text-gold-600">
              {t('nav.packages')}
            </Link>
            <Link to="/spiritual-guidance" className="text-gray-700 hover:text-gold-600">
              {t('nav.spiritualGuidance')}
            </Link>
            <Link to="/ziyarat" className="text-gray-700 hover:text-gold-600">
              {t('nav.ziyarat')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gold-600">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gold-600">
              {t('nav.contact')}
            </Link>
            <LanguageSelector />
            <Link
              to="/book-now"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gold-600 hover:bg-gold-700"
            >
              {t('nav.bookNow')}
            </Link>
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
}