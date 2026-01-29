import { motion } from "framer-motion";
import { skills } from "@/data/portfolioData";
import {
  Figma,
  Code,
  Database,
  Cloud,
  Palette,
  Layers,
  Box,
  Wand2,
} from "lucide-react";

const categoryConfig = {
  design: {
    icon: Palette,
    label: "Design Tools",
    color: "#9747FF",
    description: "UI/UX & Prototyping",
  },
  development: {
    icon: Code,
    label: "Development",
    color: "#0D99FF",
    description: "Frontend & Backend",
  },
  data: {
    icon: Database,
    label: "Data Science",
    color: "#14AE5C",
    description: "Analytics & ML",
  },
  cloud: {
    icon: Cloud,
    label: "Cloud & DevOps",
    color: "#FF6B6B",
    description: "Infrastructure",
  },
};

export const SkillsSection = () => {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="py-16 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="text-xs text-primary font-mono mb-2">// Assets Library</div>
        <h2 className="text-3xl font-bold mb-2">Components & Skills</h2>
        <p className="text-muted-foreground max-w-lg">
          My toolkit of design and development skills, organized like a Figma
          component library. Each skill is a reusable asset in my projects.
        </p>
      </motion.div>

      {/* Skills Grid - Component Library Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills], catIndex) => {
          const config = categoryConfig[category as keyof typeof categoryConfig];
          const Icon = config.icon;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              {/* Category Header */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b"
                style={{
                  borderColor: config.color + "30",
                  background: `linear-gradient(90deg, ${config.color}10, transparent)`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: config.color + "20" }}
                >
                  <Icon className="w-4 h-4" style={{ color: config.color }} />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{config.label}</h3>
                  <p className="text-xs text-muted-foreground">{config.description}</p>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">
                  {categorySkills.length} components
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categorySkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * idx }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 bg-figma-hover rounded-md cursor-default group"
                  >
                    <Box
                      className="w-3 h-3 transition-colors"
                      style={{ color: config.color }}
                    />
                    <span className="text-xs font-medium truncate group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Components Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-card to-secondary/5 rounded-lg border border-border"
      >
        <div className="flex items-center gap-2 mb-4">
          <Wand2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Main Components</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {["Figma", "Python", "React Native", "Information Architecture", "A/B Testing", "Azure"].map(
            (skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
              >
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};
