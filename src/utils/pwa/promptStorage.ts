const STORAGE_KEYS = {
  DISMISSED: 'pwa-prompt-dismissed',
  REMINDER: 'pwa-prompt-reminder'
} as const;

export const setPromptDismissed = () => {
  localStorage.setItem(STORAGE_KEYS.DISMISSED, 'true');
};

export const setPromptReminder = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  localStorage.setItem(STORAGE_KEYS.REMINDER, tomorrow.toISOString());
};

export const checkPromptEligibility = () => {
  const dismissed = localStorage.getItem(STORAGE_KEYS.DISMISSED);
  if (dismissed === 'true') return false;

  const reminder = localStorage.getItem(STORAGE_KEYS.REMINDER);
  if (reminder) {
    const reminderDate = new Date(reminder);
    if (reminderDate > new Date()) return false;
  }

  return true;
};

export const shouldShowPromptAgain = async () => {
  return checkPromptEligibility();
};