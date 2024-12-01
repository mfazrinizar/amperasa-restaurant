"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

const variants = {
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  },
  bottom: {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  },
  top: {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
};

type Props = {
  className?: string;
  children?: ReactNode;
  variant?: keyof typeof variants;
};

export default function ScrollAnimation({
  className,
  children,
  variant = "opacity",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      //   variants={{
      //     hidden: { opacity: 0, y: 75 },
      //     visible: { opacity: 1, y: 0 },
      //   }}
      variants={variants[variant]}
      transition={{ duration: 0.65, delay: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
