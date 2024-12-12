import { useState, useEffect } from 'react';
import { usePWA } from '../../../../hooks/usePWA';

export function usePromptVisibility() {
  const { canInstall, isInstalled, isMobile, shouldShowPrompt } = usePWA();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldShowPrompt && !isInstalled && isMobile) {
      setIsVisible(true);
    }
  }, [shouldShowPrompt, isInstalled, isMobile]);

  return {
    isVisible,
    setIsVisible,
    shouldRender: canInstall && !isInstalled
  };
}