"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function MainWrapper({ children, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.65 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
