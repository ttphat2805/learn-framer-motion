export const containerVariants = {
  hidden: {
    opaticy: 0,
    x: "-100vw",
  },
  visible: {
    opaticy: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 7,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};
