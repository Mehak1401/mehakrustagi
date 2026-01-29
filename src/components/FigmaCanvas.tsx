import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FigmaToolbar } from "@/components/figma/FigmaToolbar";
import { FigmaLayers } from "@/components/figma/FigmaLayers";
import { FigmaProperties } from "@/components/figma/FigmaProperties";
import { FigmaCursor } from "@/components/figma/FigmaCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { useIsMobile } from "@/hooks/use-mobile";

const FigmaCanvas = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeExperience, setActiveExperience] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [showPrototype, setShowPrototype] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Hide cursor on mobile
  const showCursor = !isMobile;

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowMobileSidebar(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleExplore = () => {
    scrollToSection("experience");
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "projects", "skills", "publications"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-canvas overflow-x-hidden">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          className="fixed top-3 left-3 z-[60] p-2 bg-figma-toolbar rounded-lg border border-border"
        >
          {showMobileSidebar ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      )}

      {/* Toolbar - Hidden on mobile */}
      {!isMobile && (
        <FigmaToolbar
          activeSection={activeSection}
          onPlayClick={() => setShowPrototype(!showPrototype)}
          zoom={zoom}
          onZoomChange={setZoom}
        />
      )}

      {/* Layers Panel */}
      {isMobile ? (
        <AnimatePresence>
          {showMobileSidebar && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-canvas/80 z-[45]"
                onClick={() => setShowMobileSidebar(false)}
              />
              <motion.div
                initial={{ x: -240 }}
                animate={{ x: 0 }}
                exit={{ x: -240 }}
                className="fixed left-0 top-0 bottom-0 z-[50]"
              >
                <FigmaLayers
                  activeSection={activeSection}
                  onSectionChange={scrollToSection}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      ) : (
        <FigmaLayers
          activeSection={activeSection}
          onSectionChange={scrollToSection}
        />
      )}

      {/* Properties Panel - Hidden on mobile */}
      {!isMobile && <FigmaProperties activeSection={activeSection} />}

      {/* Floating Cursor - Desktop only */}
      {showCursor && <FigmaCursor />}

      {/* Main Canvas Area */}
      <main
        ref={canvasRef}
        className={`min-h-screen relative canvas-grid ${
          isMobile ? "pt-4" : "ml-60 mr-64 mt-12"
        }`}
        style={
          !isMobile
            ? { transform: `scale(${zoom / 100})`, transformOrigin: "top center" }
            : undefined
        }
      >
        {/* Canvas Content */}
        <div className="max-w-5xl mx-auto py-8 px-4 md:px-6">
          {/* Hero */}
          <div id="hero">
            <HeroSection onExplore={handleExplore} />
          </div>

          {/* Experience */}
          <ExperienceSection
            activeExperience={activeExperience}
            onExperienceClick={setActiveExperience}
          />

          {/* Projects */}
          <ProjectsSection
            activeProject={activeProject}
            onProjectClick={setActiveProject}
          />

          {/* Skills */}
          <SkillsSection />

          {/* Publications & Certifications */}
          <PublicationsSection />

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-12 text-center border-t border-border mt-16"
          >
            <div className="text-xs text-muted-foreground mb-4">
              Designed & Developed with 💜 in Figma + React
            </div>
            <div className="flex justify-center gap-4 text-sm">
              <a
                href="mailto:mehakrustagi1410@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/mehakrustagi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mehakrustagi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.footer>
        </div>
      </main>

      {/* Prototype Modal */}
      <AnimatePresence>
        {showPrototype && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-canvas/95 flex items-center justify-center p-4"
            onClick={() => setShowPrototype(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-xl border border-border p-8 max-w-lg text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Prototype Mode</h3>
              <p className="text-muted-foreground mb-4">
                This portfolio itself is the prototype! Explore the interactive
                canvas, click on frames, and navigate using the layers panel.
              </p>
              <button
                onClick={() => setShowPrototype(false)}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FigmaCanvas;
