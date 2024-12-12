import type { BeforeInstallPromptEvent } from './types';

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const PROMPT_DISMISSED_KEY = 'pwa-prompt-dismissed';

export const setupInstallPrompt = () => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;

    // Check if user has previously dismissed the prompt
    const hasUserDismissed = localStorage.getItem(PROMPT_DISMISSED_KEY);
    if (!hasUserDismissed) {
      showInstallPrompt();
    }
  });
};

export const showInstallPrompt = async () => {
  if (!deferredPrompt) return false;

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  if (outcome === 'dismissed') {
    localStorage.setItem(PROMPT_DISMISSED_KEY, 'true');
  }

  deferredPrompt = null;
  return outcome === 'accepted';
};

export const isPWAInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone ||
         document.referrer.includes('android-app://');
};