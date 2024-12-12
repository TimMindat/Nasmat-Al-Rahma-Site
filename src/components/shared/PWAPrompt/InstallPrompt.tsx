import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePromptVisibility } from './hooks/usePromptVisibility';
import { usePromptHandlers } from './hooks/usePromptHandlers';
import { slideUp } from '../../../utils/animations/variants';
import CloseButton from './components/CloseButton';
import PromptIcon from './components/PromptIcon';
import PromptContent from './components/PromptContent';

export default function InstallPrompt() {
  const { isVisible, shouldRender } = usePromptVisibility();
  const { handleInstall, handleRemindLater, handleDismiss } = usePromptHandlers();

  if (!shouldRender) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={slideUp}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed bottom-20 left-4 right-4 z-50"
        >
          <div className="bg-white rounded-lg shadow-xl p-6 mx-auto max-w-md">
            <CloseButton onDismiss={handleDismiss} />
            <div className="flex items-start space-x-4">
              <PromptIcon />
              <PromptContent
                onInstall={handleInstall}
                onRemindLater={handleRemindLater}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}