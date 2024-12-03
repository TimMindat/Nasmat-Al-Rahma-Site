import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-4">
              <Link
                to="/packages"
                className="block py-2 text-gray-700 hover:text-gold-600"
                onClick={toggleMenu}
              >
                {t('nav.packages')}
              </Link>
              <Link
                to="/spiritual-guidance"
                className="block py-2 text-gray-700 hover:text-gold-600"
                onClick={toggleMenu}
              >
                {t('nav.spiritualGuidance')}
              </Link>
              <Link
                to="/ziyarat"
                className="block py-2 text-gray-700 hover:text-gold-600"
                onClick={toggleMenu}
              >
                {t('nav.ziyarat')}
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-gold-600"
                onClick={toggleMenu}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-gold-600"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </Link>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <Link
                to="/book-now"
                className="block w-full py-2 px-4 text-center text-white bg-gold-600 rounded-md hover:bg-gold-700"
                onClick={toggleMenu}
              >
                {t('nav.bookNow')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}