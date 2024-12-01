// components/ui/LoadingSpinner.tsx
import React from "react";
import clsx from "clsx";

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className="w-8 h-8 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;