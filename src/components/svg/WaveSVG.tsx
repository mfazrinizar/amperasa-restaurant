import React from "react";

export default function WaveSVG() {
  return (
    <div className="flex items-center justify-center w-full">
      <svg
        className="self-center"
        width="150"
        height="15"
        viewBox="0 0 230 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C20 0 40 24 60 12C80 0 100 24 120 12C140 0 160 24 180 12C200 0 220 24 240 12"
          stroke="#f00"
          className="stroke-primary-500"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}