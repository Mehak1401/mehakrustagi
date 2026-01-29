import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface FigmaFrameProps {
  id: string;
  title: string;
  children: ReactNode;
  color?: string;
  width?: string;
  isSelected?: boolean;
  showAutoLayout?: boolean;
  onClick?: () => void;
}

export const FigmaFrame = ({
  id,
  title,
  children,
  color = "#9747FF",
  width = "auto",
  isSelected = false,
  showAutoLayout = false,
  onClick,
}: FigmaFrameProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`figma-frame relative ${isSelected ? "selected" : ""}`}
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Frame Name Label */}
      <div
        className="absolute -top-6 left-0 text-[11px] font-medium flex items-center gap-1"
        style={{ color }}
      >
        <span>{title}</span>
      </div>

      {/* Auto-layout Indicator */}
      {showAutoLayout && (
        <div className="auto-layout-indicator">
          ↕ Auto Layout
        </div>
      )}

      {/* Content */}
      <div className="p-6">{children}</div>

      {/* Selection Handles */}
      {(isSelected || isHovered) && (
        <>
          <div className="frame-handle" style={{ top: 0, left: 0 }} />
          <div className="frame-handle" style={{ top: 0, right: 0, transform: "translate(50%, -50%)" }} />
          <div className="frame-handle" style={{ bottom: 0, left: 0, transform: "translate(-50%, 50%)" }} />
          <div className="frame-handle" style={{ bottom: 0, right: 0, transform: "translate(50%, 50%)" }} />
          <div className="frame-handle" style={{ top: "50%", left: 0 }} />
          <div className="frame-handle" style={{ top: "50%", right: 0, transform: "translate(50%, -50%)" }} />
          <div className="frame-handle" style={{ top: 0, left: "50%", transform: "translate(-50%, -50%)" }} />
          <div className="frame-handle" style={{ bottom: 0, left: "50%", transform: "translate(-50%, 50%)" }} />
        </>
      )}

      {/* Dimensions Label */}
      {isHovered && (
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-mono">
          W: auto × H: auto
        </div>
      )}
    </motion.div>
  );
};
