export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export const slideInFromRight = (isRTL: boolean) => ({
  initial: { opacity: 0, x: isRTL ? -20 : 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: isRTL ? -20 : 20 }
});

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};