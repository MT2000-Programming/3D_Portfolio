import { Variants, Transition } from "framer-motion";

export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        duration: 1.25,
        delay,
      } as Transition,
    },
  };
};

export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: "spring" | "tween" | "keyframes" | "inertia" = "tween",
  delay: number = 0,
  duration: number = 0.75
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        
        ease: "easeInOut",
      } as Transition,
    },
  };
};

export const zoomIn = (delay: number = 0, duration: number = 0.75): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut" as unknown,
      } as Transition,
    },
  };
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: "spring" | "tween" | "keyframes" | "inertia" = "tween",
  delay: number = 0,
  duration: number = 0.75
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      // use -100% for up so it starts above, 100% for down so it starts below
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut" as unknown,
      } as Transition,
    },
  };
};

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
