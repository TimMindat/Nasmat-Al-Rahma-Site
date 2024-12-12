import { registerSW } from './registerSW';
import { setupInstallPrompt } from './installPrompt';
import { checkBrowserSupport } from './browserSupport';

export const initializePWA = async () => {
  const support = checkBrowserSupport();
  
  if (!support.isSupported) {
    console.warn('PWA features are not fully supported in this browser');
    return;
  }

  await registerSW();
  setupInstallPrompt();
};

export * from './types';
export * from './browserSupport';
export * from './installPrompt';