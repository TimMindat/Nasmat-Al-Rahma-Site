import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import LanguageButton from '../shared/LanguageButton';
import type { Language } from '../../types';

const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' }
];

export default function MobileLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = useCallback((code: Language) => {
    changeLanguage(code);
    setIsOpen(false);
  }, [changeLanguage]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 bg-white rounded-full p-3 shadow-lg border border-gray-200"
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
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{t('nav.selectLanguage')}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2">
                {languages.map((language) => (
                  <LanguageButton
                    key={language.code}
                    {...language}
                    isActive={currentLanguage === language.code}
                    onClick={handleLanguageChange}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}