import { useState, useEffect, useCallback } from 'react';
import { 
  checkBrowserSupport, 
  isMobileBrowser, 
  isPWAInstalled,
  showInstallPrompt 
} from '../utils/pwa';
import { 
  getPromptPreference, 
  setPromptDismissed, 
  setPromptReminder 
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

  useEffect(() => {
    const browserSupport = checkBrowserSupport();
    setSupport(browserSupport);
    setIsInstalled(isPWAInstalled());
    setIsMobile(isMobileBrowser());

    // Check if we should show the prompt
    const preference = getPromptPreference();
    const shouldShow = !preference.dismissed && 
      (!preference.remindAt || new Date(preference.remindAt) <= new Date());
    setShouldShowPrompt(shouldShow);
  }, []);

  const showNativePrompt = useCallback(async () => {
    return await showInstallPrompt();
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