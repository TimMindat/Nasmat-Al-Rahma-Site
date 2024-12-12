import { getPromptPreference } from '../storage/promptStorage';

export const checkPromptEligibility = () => {
  const preference = getPromptPreference();

  if (preference.dismissed) return false;

  if (preference.remindAt) {
    const reminderDate = new Date(preference.remindAt);
    if (reminderDate > new Date()) return false;
  }

  return true;
};

export const shouldShowPromptAgain = async () => {
  return checkPromptEligibility();
};