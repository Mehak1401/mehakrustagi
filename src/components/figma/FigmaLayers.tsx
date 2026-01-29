import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Layers,
  Frame,
  Type,
  Image,
  Component,
  Eye,
  Lock,
  FolderOpen,
  Briefcase,
  Rocket,
  GraduationCap,
  Award,
  FileText,
  Sparkles,
} from "lucide-react";

interface Layer {
  id: string;
  name: string;
  icon: React.ElementType;
  children?: Layer[];
  color?: string;
}

interface FigmaLayersProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const layers: Layer[] = [
  {
    id: "hero",
    name: "🎨 Hero",
    icon: Frame,
    color: "#9747FF",
  },
  {
    id: "experience",
    name: "💼 Experience",
    icon: Briefcase,
    color: "#0D99FF",
    children: [
      { id: "divine-labs", name: "Divine Labs (IIT Delhi)", icon: Component },
      { id: "alfaleus", name: "Alfaleus Tech", icon: Component },
      { id: "collab-junction", name: "Collab Junction", icon: Component },
      { id: "internet-company", name: "The Internet Company", icon: Component },
      { id: "scholars-merit", name: "Scholars Merit", icon: Component },
    ],
  },
  {
    id: "projects",
    name: "🚀 Projects",
    icon: Rocket,
    color: "#14AE5C",
    children: [
      { id: "moodbot", name: "MoodBot", icon: Frame },
      { id: "knoos", name: "Knoos Alankaran", icon: Frame },
      { id: "surveillance", name: "Safety Surveillance", icon: Frame },
    ],
  },
  {
    id: "skills",
    name: "⚡ Skills",
    icon: Sparkles,
    color: "#FF6B6B",
  },
  {
    id: "education",
    name: "🎓 Education",
    icon: GraduationCap,
    color: "#FFC107",
  },
  {
    id: "publications",
    name: "📚 Publications",
    icon: FileText,
    color: "#00C2FF",
  },
  {
    id: "certifications",
    name: "🏆 Certifications",
    icon: Award,
    color: "#FF9F43",
  },
];

export const FigmaLayers = ({ activeSection, onSectionChange }: FigmaLayersProps) => {
  const [expandedLayers, setExpandedLayers] = useState<string[]>(["experience", "projects"]);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedLayers((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  const renderLayer = (layer: Layer, depth = 0) => {
    const isExpanded = expandedLayers.includes(layer.id);
    const isActive = activeSection === layer.id || 
      layer.children?.some(c => c.id === activeSection);
    const hasChildren = layer.children && layer.children.length > 0;

    return (
      <div key={layer.id}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: depth * 0.05 }}
          className={`layer-item ${isActive ? "active" : ""}`}
          style={{ paddingLeft: `${12 + depth * 16}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(layer.id);
            }
            onSectionChange(layer.id);
          }}
          onMouseEnter={() => setHoveredLayer(layer.id)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
          {/* Expand Arrow */}
          <div className="w-4 h-4 flex items-center justify-center">
            {hasChildren ? (
              isExpanded ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )
            ) : null}
          </div>

          {/* Layer Icon */}
          <div
            className="w-4 h-4 flex items-center justify-center"
            style={{ color: layer.color }}
          >
            <layer.icon className="w-3.5 h-3.5" />
          </div>

          {/* Layer Name */}
          <span className="flex-1 truncate text-xs">{layer.name}</span>

          {/* Visibility Toggle */}
          <AnimatePresence>
            {hoveredLayer === layer.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1"
              >
                <Eye className="w-3 h-3 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Lock className="w-3 h-3 text-muted-foreground hover:text-foreground cursor-pointer" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Children */}
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              {layer.children?.map((child) => renderLayer(child, depth + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.aside
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 top-12 bottom-0 w-60 bg-figma-sidebar border-r border-figma-divider z-40 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-figma-divider">
        <div className="flex items-center gap-2 text-xs font-medium">
          <Layers className="w-3.5 h-3.5" />
          <span>Layers</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-figma-hover rounded">
            <FolderOpen className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-3 py-2 border-b border-figma-divider">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-medium">Portfolio - Mehak</span>
        </div>
      </div>

      {/* Layers List */}
      <div className="flex-1 overflow-y-auto py-2">
        {layers.map((layer) => renderLayer(layer))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-figma-divider">
        <div className="text-[10px] text-muted-foreground">
          <div className="flex items-center justify-between mb-1">
            <span>Position</span>
            <span className="font-mono">X: 0, Y: 0</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Size</span>
            <span className="font-mono">W: 1920, H: 1080</span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};
