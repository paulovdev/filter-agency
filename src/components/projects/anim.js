export const h2Animation = {
  initial: { y: "175%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.05,
    },
  }),
  exit: { y: "175%" },
};

export const spanAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.8,
    },
  },
  exit: { opacity: 0, y: 100 },
};
