export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export interface BrowserSupport {
  isSupported: boolean;
  serviceWorker: boolean;
  cache: boolean;
  manifest: boolean;
  installPrompt: boolean;
}

export interface PWAPromptPreference {
  dismissed: boolean;
  remindAt?: string;
}

export interface PWAInstallHookReturn {
  canInstall: boolean;
  isInstalled: boolean;
  isMobile: boolean;
  shouldShowPrompt: boolean;
  showNativePrompt: () => Promise<boolean>;
  dismissPrompt: () => void;
  remindLater: () => void;
}