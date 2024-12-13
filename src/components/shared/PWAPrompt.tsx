import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePWA } from '../../hooks/usePWA';

export default function PWAPrompt() {
  const { canInstall, isInstalled, isMobile, shouldShowPrompt, showNativePrompt, dismissPrompt } = usePWA();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(true);

  // Don't render if conditions aren't met
  if (!canInstall || isInstalled || !isMobile || !shouldShowPrompt || !isVisible) {
    return null;
  }

  const handleInstall = async () => {
    const installed = await showNativePrompt();
    if (installed) {
      setIsVisible(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-20 left-4 right-4 bg-white rounded-lg shadow-xl p-4 z-[60]"
    >
      <button
        onClick={() => {
          dismissPrompt();
          setIsVisible(false);
        }}
        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 rounded-full"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
            <Download className="w-6 h-6 text-gold-600" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900">
            {t('Install Our App')}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {t('Install our app for a better experience and quick access to our services')}
          </p>
          <button
            onClick={handleInstall}
            className="mt-4 w-full px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
          >
            {t('Install Now')}
          </button>
        </div>
      </div>
    </motion.div>
  );
}