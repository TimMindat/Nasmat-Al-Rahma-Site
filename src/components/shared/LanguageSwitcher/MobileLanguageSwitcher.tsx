import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguageSwitch } from '../../../hooks/useLanguageSwitch';
import { SUPPORTED_LANGUAGES } from '../../../utils/i18n/constants';
import { slideUp } from '../../../utils/animations/variants';
import type { Language } from '../../../types';

export default function MobileLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageSwitch();
  const location = useLocation();

  // Only show on homepage
  if (location.pathname !== '/') {
    return null;
  }

  const handleLanguageSelect = async (code: Language) => {
    await changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 z-[60]
          min-w-[44px] min-h-[44px] flex items-center justify-center
          hover:bg-gray-50 active:bg-gray-100 transition-colors"
        aria-label={t('nav.language')}
      >
        <Globe className="w-6 h-6 text-gold-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[70]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={slideUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-[80] p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {t('nav.selectLanguage')}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-2">
                {Object.values(SUPPORTED_LANGUAGES).map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code as Language)}
                    className={`
                      w-full p-4 text-left rounded-lg flex items-center justify-between
                      ${currentLanguage === language.code ? 'bg-gold-50 text-gold-600' : 'hover:bg-gray-50'}
                    `}
                  >
                    <span className="font-medium">{language.nativeName}</span>
                    <span className="text-sm text-gray-500">({language.name})</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}