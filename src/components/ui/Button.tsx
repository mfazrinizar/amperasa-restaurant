"use client"

// import { clsx } from "clsx";
import { motion } from "framer-motion";
import React, { MouseEventHandler, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { X,  ArrowUp } from "react-feather";
import SpinnerSVG from "../svg/SpinnerSVG";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  variant?: "primary" | "neutral" | "ghost" | "outlined" | null | undefined;
  icon?: string;
  className?: string;
  shape?: "rectangle" | "circle" | "square" | "custom" | "custom-reversed" | null | undefined;
  size?: "md" | "sm" | null | undefined;
  isLoading?: boolean;
  label?: string;
};

type LoadingWrapperProps = {
  children?: ReactNode;
  isLoading?: boolean;
};

const LoadingWrapper = ({ isLoading, children }: LoadingWrapperProps) => {
  return isLoading ? <div className="opacity-0">{children}</div> : children;
};

export default function Button({
  children,
  isLoading = false,
  onClick,
  variant = "neutral",
  icon,
  className,
  shape = "custom",
  size = "md",
  label,
}: Props) {
  const classes = cva(
    [
      className,
      "font-medium tracking-wider relative flex items-center justify-center w-fit gap-2 cursor-pointer",
    ],
    {
      variants: {
        variant: {
          primary: "text-white bg-primary-500 hover:bg-primary-400",
          neutral: "bg-neutral-500 hover:bg-neutral-400",
          outlined: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800",
          ghost:
            "group bg-transparent-500 hover:bg-neutral-500 text-neutral-500 hover:text-neutral-500 font-bold",
        },
        shape: {
          custom: "rounded-tl-xl rounded-br-xl",
          "custom-reversed": "rounded-tr-xl rounded-bl-xl",
          rectangle: "rounded-xl",
          circle: "rounded-full",
          square: "rounded-xl",
        },
        size: {
          md: "px-6 py-3",
          sm: "px-2 py-2",
        },
        isLoading: {
          true: "bg-emerald-700 !cursor-default",
        },
      },
      compoundVariants: [
        {
          size: "sm",
          shape: "square",
          className: "px-2 py-2",
        },
        {
          size: "sm",
          shape: "circle",
          className: "px-2 py-2",
        },
      ],
    }
  );

  return (
    <motion.button
      aria-label={label}
      onClick={onClick}
      className={classes({ variant, shape, size, isLoading })}
      whileTap={isLoading ? undefined : { scale: 0.9 }}
    >
      <LoadingWrapper isLoading={isLoading}>
        {icon === "close" && <X />}
        {icon === "arrow-sm-top" && <ArrowUp />}
      </LoadingWrapper>
      <LoadingWrapper isLoading={isLoading}>{children}</LoadingWrapper>
      {isLoading && (
        <div className="absolute -rotate-90 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <SpinnerSVG className="origin-center" pathClass="stroke-neutral-800"/>
        </div>
      )}
    </motion.button>
  );
}
