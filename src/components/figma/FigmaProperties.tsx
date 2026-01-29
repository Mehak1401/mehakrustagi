import { motion } from "framer-motion";
import {
  Layout,
  Palette,
  Type,
  Settings2,
  ChevronDown,
  Circle,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Copy,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import { personalInfo, education } from "@/data/portfolioData";

interface FigmaPropertiesProps {
  activeSection: string;
}

export const FigmaProperties = ({ activeSection }: FigmaPropertiesProps) => {
  return (
    <motion.aside
      initial={{ x: 280 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed right-0 top-12 bottom-0 w-64 bg-figma-sidebar border-l border-figma-divider z-40 flex flex-col overflow-y-auto"
    >
      {/* Design Tab */}
      <div className="flex items-center border-b border-figma-divider">
        <button className="flex-1 py-2 text-xs font-medium text-center border-b-2 border-primary">
          Design
        </button>
        <button className="flex-1 py-2 text-xs font-medium text-center text-muted-foreground hover:text-foreground">
          Prototype
        </button>
        <button className="flex-1 py-2 text-xs font-medium text-center text-muted-foreground hover:text-foreground">
          Inspect
        </button>
      </div>

      {/* Profile Section */}
      <div className="p-3 border-b border-figma-divider">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <div>
            <p className="text-sm font-medium">{personalInfo.name}</p>
            <p className="text-[10px] text-muted-foreground">{personalInfo.tagline}</p>
          </div>
        </div>

        <div className="space-y-1.5">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span>{personalInfo.email}</span>
          </a>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <Phone className="w-3 h-3" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{personalInfo.location}</span>
          </div>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-3 h-3" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Education - Fixed Properties */}
      <div className="p-3 border-b border-figma-divider">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium flex items-center gap-1.5">
            <Settings2 className="w-3 h-3" />
            Education
          </span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </div>

        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className="text-[11px]">
              <p className="font-medium">{edu.institution}</p>
              <p className="text-muted-foreground">{edu.degree}</p>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-muted-foreground">{edu.period}</span>
                <span className="text-primary font-medium">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Section */}
      <div className="p-3 border-b border-figma-divider">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium flex items-center gap-1.5">
            <Layout className="w-3 h-3" />
            Auto Layout
          </span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </div>

        <div className="grid grid-cols-3 gap-1 mb-2">
          <button className="p-1.5 bg-figma-hover rounded flex items-center justify-center">
            <AlignLeft className="w-3 h-3" />
          </button>
          <button className="p-1.5 bg-primary rounded flex items-center justify-center">
            <AlignCenter className="w-3 h-3" />
          </button>
          <button className="p-1.5 bg-figma-hover rounded flex items-center justify-center">
            <AlignRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="flex items-center justify-between bg-figma-hover rounded px-2 py-1">
            <span className="text-muted-foreground">Gap</span>
            <span>24</span>
          </div>
          <div className="flex items-center justify-between bg-figma-hover rounded px-2 py-1">
            <span className="text-muted-foreground">Padding</span>
            <span>48</span>
          </div>
        </div>
      </div>

      {/* Fill Section */}
      <div className="p-3 border-b border-figma-divider">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium flex items-center gap-1.5">
            <Palette className="w-3 h-3" />
            Fill
          </span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-primary-glow border border-figma-divider" />
          <span className="text-[11px] font-mono">#9747FF</span>
          <span className="text-[10px] text-muted-foreground">100%</span>
        </div>
      </div>

      {/* Typography Section */}
      <div className="p-3 border-b border-figma-divider">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium flex items-center gap-1.5">
            <Type className="w-3 h-3" />
            Typography
          </span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </div>

        <div className="text-[10px] space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Font</span>
            <span>Inter</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Weight</span>
            <span>600</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Size</span>
            <span>14px</span>
          </div>
        </div>
      </div>

      {/* Export Section */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium">Export</span>
          <button className="text-[10px] text-primary hover:underline flex items-center gap-1">
            <Copy className="w-3 h-3" />
            Copy CSS
          </button>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 py-1.5 text-[11px] font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
            Export PNG
          </button>
          <button className="flex-1 py-1.5 text-[11px] font-medium bg-figma-hover rounded hover:bg-muted transition-colors">
            Export SVG
          </button>
        </div>
      </div>
    </motion.aside>
  );
};
