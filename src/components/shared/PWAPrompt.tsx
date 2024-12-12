import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { usePWA } from '../../hooks/usePWA';
import { useTranslation } from 'react-i18next';

export default function PWAPrompt() {
  const { support, isInstalled, isMobile, showInstallPrompt } = usePWA();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(true);

  if (!support.isSupported || isInstalled || !isMobile || !isVisible) {
    return null;
  }

  const handleInstall = async () => {
    const installed = await showInstallPrompt();
    if (installed) {
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-20 left-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Download className="w-8 h-8 text-gold-600" />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{t('pwa.installPrompt.title')}</h3>
            <p className="text-sm text-gray-600">{t('pwa.installPrompt.description')}</p>
          </div>
        </div>

        <button
          onClick={handleInstall}
          className="mt-4 w-full px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
        >
          {t('pwa.installPrompt.button')}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}