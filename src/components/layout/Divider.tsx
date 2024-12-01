import React from "react";

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <svg
      className={`bg-light-ivory ${className}`}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-neutral-900"
        d="M 0 40 L 30 60 L 70 20 L 120 80 L 160 40 L 200 70 L 250 30 L 290 60 L 330 40 L 370 90 L 420 50 L 460 70 L 500 20 L 540 60 L 580 40 L 620 80 L 670 50 L 710 70 L 760 20 L 800 60 L 850 30 L 890 70 L 940 40 L 970 90 L 1000 50 L 1000 101 L 0 101 Z"
      ></path>
    </svg>
  );
}