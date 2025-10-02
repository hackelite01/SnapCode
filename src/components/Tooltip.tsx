import React, { useState } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  shortcut?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  shortcut,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} z-50 pointer-events-none`}
        >
          <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl border border-gray-700 whitespace-nowrap">
            {content}
            {shortcut && (
              <span className="ml-2 text-gray-400 font-mono text-[10px]">
                {shortcut}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
