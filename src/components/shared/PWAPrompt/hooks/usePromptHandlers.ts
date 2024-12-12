import { useCallback } from 'react';
import { usePWA } from '../../../../hooks/usePWA';

export function usePromptHandlers() {
  const { showNativePrompt, dismissPrompt, remindLater } = usePWA();

  const handleInstall = useCallback(async () => {
    const installed = await showNativePrompt();
    if (installed) {
      dismissPrompt();
    }
  }, [showNativePrompt, dismissPrompt]);

  const handleRemindLater = useCallback(() => {
    remindLater();
  }, [remindLater]);

  const handleDismiss = useCallback(() => {
    dismissPrompt();
  }, [dismissPrompt]);

  return {
    handleInstall,
    handleRemindLater,
    handleDismiss
  };
}