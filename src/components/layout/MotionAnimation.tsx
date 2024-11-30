import { motion } from "framer-motion";
import React, { ElementType, ReactNode } from "react";

const variants = {
  opacity: {
    hidden: { opacity: 0.01 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0.01, x: 75 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0.01, x: -75 },
    visible: { opacity: 1, x: 0 },
  },
  bottom: {
    hidden: { opacity: 0.01, y: -75 },
    visible: { opacity: 1, y: 0 },
  },
  top: {
    hidden: { opacity: 0.01, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  "top-sm": {
    hidden: { opacity: 0.01, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

type Props = {
  className?: string;
  children?: ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  as?: ElementType;
  type?: "tween" | "spring" | "ease";
};

export default function MotionAnimation({
  className,
  children,
  variant = "opacity",
  delay = 0.25,
  as = "div",
  duration = 0.65,
  type = "tween",
}: Props) {
  const CustomMotionComponent = motion[
    as as keyof typeof motion
  ] as ElementType;

  return (
    <CustomMotionComponent
      initial="hidden"
      animate={"visible"}
      variants={variants[variant]}
      transition={{ duration: duration, type: type, delay: delay }}
      className={className}
    >
      {children}
    </CustomMotionComponent>
  );
}
