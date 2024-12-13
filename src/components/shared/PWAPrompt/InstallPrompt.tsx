import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePWA } from '../../../hooks/usePWA';
import { slideUp } from '../../../utils/animations/variants';
import CloseButton from './components/CloseButton';
import PromptIcon from './components/PromptIcon';
import PromptContent from './components/PromptContent';

export default function InstallPrompt() {
  const { 
    canInstall, 
    isInstalled, 
    isMobile, 
    shouldShowPrompt,
    showNativePrompt, 
    dismissPrompt, 
    remindLater 
  } = usePWA();

  // Don't render if conditions aren't met
  if (!canInstall || isInstalled || !isMobile || !shouldShowPrompt) {
    return null;
  }

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
          <CloseButton onDismiss={dismissPrompt} />
          <div className="flex items-start space-x-4">
            <PromptIcon />
            <PromptContent
              onInstall={showNativePrompt}
              onRemindLater={remindLater}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}