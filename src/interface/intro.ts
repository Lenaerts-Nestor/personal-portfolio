import type { JSX } from "react";

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export interface OverviewSection {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}
