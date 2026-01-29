import { useState } from "react";
import { motion } from "framer-motion";
import {
  MousePointer2,
  Hand,
  Square,
  Type,
  PenTool,
  Minus,
  ArrowRight,
  MessageSquare,
  Play,
  ChevronDown,
  ZoomIn,
  ZoomOut,
  Maximize2,
  MoreHorizontal,
} from "lucide-react";

interface FigmaToolbarProps {
  activeSection: string;
  onPlayClick: () => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
}

const tools = [
  { id: "move", icon: MousePointer2, label: "Move (V)" },
  { id: "hand", icon: Hand, label: "Hand (H)" },
  { id: "frame", icon: Square, label: "Frame (F)" },
  { id: "text", icon: Type, label: "Text (T)" },
  { id: "pen", icon: PenTool, label: "Pen (P)" },
  { id: "line", icon: Minus, label: "Line (L)" },
  { id: "arrow", icon: ArrowRight, label: "Arrow" },
  { id: "comment", icon: MessageSquare, label: "Comment (C)" },
];

export const FigmaToolbar = ({
  activeSection,
  onPlayClick,
  zoom,
  onZoomChange,
}: FigmaToolbarProps) => {
  const [activeTool, setActiveTool] = useState("move");

  return (
    <motion.header
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 h-12 bg-figma-toolbar border-b border-figma-divider z-50 flex items-center justify-between px-2"
    >
      {/* Left: Logo & File Name */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-figma-hover cursor-pointer">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-sm font-medium">Portfolio_Mehak</span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </div>
      </div>

      {/* Center: Tools */}
      <div className="flex items-center gap-0.5 bg-figma-sidebar rounded-lg p-1">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`toolbar-btn ${activeTool === tool.id ? "active" : ""}`}
            title={tool.label}
          >
            <tool.icon className="w-4 h-4" />
          </button>
        ))}
        
        <div className="w-px h-5 bg-figma-divider mx-1" />
        
        {/* Play Button - Prototype */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlayClick}
          className="toolbar-btn bg-primary hover:bg-primary/90"
          title="Present Prototype"
        >
          <Play className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
        </motion.button>
      </div>

      {/* Right: Zoom & Actions */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-figma-sidebar rounded px-2 py-1">
          <button
            onClick={() => onZoomChange(Math.max(25, zoom - 25))}
            className="p-1 hover:bg-figma-hover rounded"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-medium w-10 text-center">{zoom}%</span>
          <button
            onClick={() => onZoomChange(Math.min(200, zoom + 25))}
            className="p-1 hover:bg-figma-hover rounded"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <button className="toolbar-btn" title="Zoom to Fit">
          <Maximize2 className="w-4 h-4" />
        </button>
        
        <button className="toolbar-btn" title="More">
          <MoreHorizontal className="w-4 h-4" />
        </button>
        
        {/* Active Section Indicator */}
        <div className="text-xs text-muted-foreground px-2 border-l border-figma-divider">
          <span className="text-foreground font-medium">{activeSection}</span>
        </div>
      </div>
    </motion.header>
  );
};
