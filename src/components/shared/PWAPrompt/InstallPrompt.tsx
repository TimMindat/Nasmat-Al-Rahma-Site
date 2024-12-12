import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePWA } from '../../../hooks/usePWA';
import { slideUp } from '../../../utils/animations/variants';

export default function InstallPrompt() {
  const { t } = useTranslation();
  const { 
    canInstall, 
    isInstalled, 
    isMobile,
    showNativePrompt,
    shouldShowPrompt,
    dismissPrompt,
    remindLater 
  } = usePWA();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldShowPrompt && !isInstalled && isMobile) {
      setIsVisible(true);
    }
  }, [shouldShowPrompt, isInstalled, isMobile]);

  if (!canInstall || isInstalled || !isVisible) {
    return null;
  }

  const handleInstall = async () => {
    const installed = await showNativePrompt();
    if (installed) {
      setIsVisible(false);
    }
  };

  const handleRemindLater = () => {
    remindLater();
    setIsVisible(false);
  };

  const handleDismiss = () => {
    dismissPrompt();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed bottom-20 left-4 right-4 z-50"
      >
        <div className="bg-white rounded-lg shadow-xl p-6 mx-auto max-w-md">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
            aria-label={t('pwa.close')}
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
                {t('pwa.installPrompt.title')}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {t('pwa.installPrompt.description')}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleInstall}
                  className="flex-1 px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                >
                  {t('pwa.installPrompt.install')}
                </button>
                <button
                  onClick={handleRemindLater}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  {t('pwa.installPrompt.remindLater')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}