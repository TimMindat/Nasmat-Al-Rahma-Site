import { useState, useEffect, useCallback } from 'react';
import { 
  checkBrowserSupport, 
  isMobileBrowser, 
  isPWAInstalled,
  showInstallPrompt,
  setupInstallPrompt 
} from '../utils/pwa';
import { 
  getPromptPreference, 
  setPromptDismissed, 
  setPromptReminder,
  clearPromptPreference 
} from '../utils/pwa/storage/promptStorage';
import type { BrowserSupport, PWAInstallHookReturn } from '../utils/pwa/types';

export function usePWA(): PWAInstallHookReturn {
  const [support, setSupport] = useState<BrowserSupport>({
    isSupported: false,
    serviceWorker: false,
    cache: false,
    manifest: false,
    installPrompt: false
  });
  const [isInstalled, setIsInstalled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldShowPrompt, setShouldShowPrompt] = useState(false);

  // Initialize PWA support and prompt
  useEffect(() => {
    const initializePWA = async () => {
      // Clear any existing preferences to ensure prompt shows immediately
      clearPromptPreference();
      
      const browserSupport = checkBrowserSupport();
      setSupport(browserSupport);
      setIsInstalled(isPWAInstalled());
      setIsMobile(isMobileBrowser());

      // Setup install prompt event handler
      setupInstallPrompt();

      // Show prompt immediately if not installed and on mobile
      const shouldShow = !isPWAInstalled() && isMobileBrowser();
      setShouldShowPrompt(shouldShow);
    };

    initializePWA();
  }, []);

  const showNativePrompt = useCallback(async () => {
    const installed = await showInstallPrompt();
    if (installed) {
      setIsInstalled(true);
      setShouldShowPrompt(false);
    }
    return installed;
  }, []);

  const dismissPrompt = useCallback(() => {
    setPromptDismissed();
    setShouldShowPrompt(false);
  }, []);

  const remindLater = useCallback(() => {
    setPromptReminder();
    setShouldShowPrompt(false);
  }, []);

  return {
    canInstall: support.isSupported && support.installPrompt,
    isInstalled,
    isMobile,
    shouldShowPrompt,
    showNativePrompt,
    dismissPrompt,
    remindLater
  };
}