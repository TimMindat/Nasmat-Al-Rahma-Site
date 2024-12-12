import { useState, useEffect } from 'react';
import { checkBrowserSupport, isMobileBrowser, isPWAInstalled, showInstallPrompt } from '../utils/pwa';
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

  useEffect(() => {
    const browserSupport = checkBrowserSupport();
    setSupport(browserSupport);
    setIsInstalled(isPWAInstalled());
    setIsMobile(isMobileBrowser());
  }, []);

  return {
    support,
    isInstalled,
    isMobile,
    showInstallPrompt
  };
}