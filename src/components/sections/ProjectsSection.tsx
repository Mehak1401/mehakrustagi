import { motion } from "framer-motion";
import { FigmaFrame } from "@/components/figma/FigmaFrame";
import { projects } from "@/data/portfolioData";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface ProjectsSectionProps {
  activeProject: string | null;
  onProjectClick: (id: string) => void;
}

export const ProjectsSection = ({
  activeProject,
  onProjectClick,
}: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-16 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="text-xs text-primary font-mono mb-2">// Projects</div>
        <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
        <p className="text-muted-foreground max-w-lg">
          End-to-end design and development projects showcasing my expertise in
          UI/UX, data science, and full-stack development.
        </p>
      </motion.div>

      {/* Projects Grid with Noodle Connections */}
      <div className="relative">
        {/* SVG Noodles */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="noodleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 200 150 C 300 150, 300 350, 400 350"
            stroke="url(#noodleGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <FigmaFrame
                id={project.id}
                title={project.title}
                color={project.color}
                isSelected={activeProject === project.id}
                showAutoLayout
                onClick={() => onProjectClick(project.id)}
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full"
                        style={{
                          backgroundColor: project.color + "20",
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowRight
                          className="w-3 h-3 mt-1 shrink-0"
                          style={{ color: project.color }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                      style={{
                        backgroundColor: project.color,
                        color: "white",
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Prototype
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </motion.button>
                  </div>
                </div>
              </FigmaFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
