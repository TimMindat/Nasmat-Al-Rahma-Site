import { useState, useEffect } from 'react';
import { 
  checkBrowserSupport, 
  isMobileBrowser, 
  isPWAInstalled,
  showInstallPrompt,
  checkPromptEligibility,
  setPromptDismissed,
  setPromptReminder,
  shouldShowPromptAgain
} from '../utils/pwa';
import type { BrowserSupport } from '../utils/pwa/types';

export function usePWA() {
  const [support, setSupport] = useState<BrowserSupport>({
    isSupported: false,
    serviceWorker: false,
    cache: false,
    manifest: false,
    installPrompt: false
  });
  const [isInstalled, setIsInstalled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [shouldShowPrompt, setShouldShowPrompt] = useState(false);

  useEffect(() => {
    const browserSupport = checkBrowserSupport();
    setSupport(browserSupport);
    setIsInstalled(isPWAInstalled());
    setIsMobile(isMobileBrowser());
    setCanInstall(browserSupport.isSupported && browserSupport.installPrompt);

    const checkPromptStatus = async () => {
      const shouldShow = await shouldShowPromptAgain();
      setShouldShowPrompt(shouldShow);
    };

    checkPromptStatus();
  }, []);

  const showNativePrompt = async () => {
    if (!canInstall) return false;
    return await showInstallPrompt();
  };

  const dismissPrompt = () => {
    setPromptDismissed();
    setShouldShowPrompt(false);
  };

  const remindLater = () => {
    setPromptReminder();
    setShouldShowPrompt(false);
  };

  return {
    support,
    isInstalled,
    isMobile,
    canInstall,
    shouldShowPrompt,
    showNativePrompt,
    dismissPrompt,
    remindLater
  };
}