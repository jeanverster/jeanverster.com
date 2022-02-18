// framer motion fade up animation
export const fadeUp = (delay: number) => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.1, 0, 0.05, 0.98],
      delay,
    },
  },
});

// framer motion scale up animation
export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.1, 0, 0.05, 0.98],
    },
  },
};
