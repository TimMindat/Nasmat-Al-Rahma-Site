import type { BrowserSupport } from './types';

export const checkBrowserSupport = (): BrowserSupport => {
  const support = {
    isSupported: false,
    serviceWorker: 'serviceWorker' in navigator,
    cache: 'caches' in window,
    manifest: !!document.querySelector('link[rel="manifest"]'),
    installPrompt: false
  };

  // Check if browser supports beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', () => {
    support.installPrompt = true;
  });

  support.isSupported = support.serviceWorker && support.cache;

  return support;
};

export const isMobileBrowser = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};