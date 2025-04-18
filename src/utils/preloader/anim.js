export const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 3.5 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export const slideTextAnim = {
  initial: {
    y: "150%",
  },
  animate: {
    y: "0",
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    y: "150%",
  },
};
