const STORAGE_KEYS = {
  DISMISSED: 'pwa-prompt-dismissed',
  REMINDER: 'pwa-prompt-reminder'
} as const;

export const getPromptPreference = () => {
  const dismissed = localStorage.getItem(STORAGE_KEYS.DISMISSED) === 'true';
  const remindAt = localStorage.getItem(STORAGE_KEYS.REMINDER);

  return {
    dismissed,
    remindAt: remindAt || undefined
  };
};

export const setPromptDismissed = () => {
  localStorage.setItem(STORAGE_KEYS.DISMISSED, 'true');
};

export const setPromptReminder = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  localStorage.setItem(STORAGE_KEYS.REMINDER, tomorrow.toISOString());
};

export const clearPromptPreference = () => {
  localStorage.removeItem(STORAGE_KEYS.DISMISSED);
  localStorage.removeItem(STORAGE_KEYS.REMINDER);
};