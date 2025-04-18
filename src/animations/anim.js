export const h1Anim = {
  initial: {
    x: 110,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
  animate: {
    x: 0,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
};
export const imgAnim = {
  initial: {
    opacity: 0,
    x: 0,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
  animate: {
    opacity: 1,
    x: 50,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
};

export const h1Anim2 = {
  initial: {
    x: -110,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
  animate: {
    x: 0,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
};

export const imgAnim2 = {
  initial: {
    opacity: 0,
    x: 0,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
  animate: {
    opacity: 1,
    x: -50,
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
};

export const arraySlideUpAnimation = {
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

export const pSlideParagraphAnim = {
  initial: {
    y: "170%",
  },
  animate: (custom) => ({
    y: "0",
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.025 * custom,
    },
  }),
};

export const logoSlideAnim = {
  initial: { opacity: 0 },
  animate: (custom) => ({
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.1 * custom,
    },
  }),
};
