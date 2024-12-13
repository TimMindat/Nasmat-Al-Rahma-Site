import type { BeforeInstallPromptEvent } from './types';

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export const setupInstallPrompt = () => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });
};

export const showInstallPrompt = async () => {
  if (!deferredPrompt) return false;

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  // Clear the deferred prompt
  deferredPrompt = null;

  return outcome === 'accepted';
};

export const isPWAInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone ||
         document.referrer.includes('android-app://');
};