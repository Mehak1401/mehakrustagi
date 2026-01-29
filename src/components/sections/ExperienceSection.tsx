import { motion } from "framer-motion";
import { FigmaFrame } from "@/components/figma/FigmaFrame";
import { experiences } from "@/data/portfolioData";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface ExperienceSectionProps {
  activeExperience: string | null;
  onExperienceClick: (id: string) => void;
}

export const ExperienceSection = ({
  activeExperience,
  onExperienceClick,
}: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-16 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="text-xs text-primary font-mono mb-2">// Work Experience</div>
        <h2 className="text-3xl font-bold mb-2">Where I've Contributed</h2>
        <p className="text-muted-foreground max-w-lg">
          Click on any experience to zoom into its details. Each role represents
          a milestone in my design journey.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-16"
            >
              {/* Timeline Node */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-4 top-6 w-4 h-4 rounded-full border-2"
                style={{
                  backgroundColor: exp.color + "30",
                  borderColor: exp.color,
                }}
              />

              <FigmaFrame
                id={exp.id}
                title={exp.company}
                color={exp.color}
                isSelected={activeExperience === exp.id}
                showAutoLayout
                onClick={() => onExperienceClick(exp.id)}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        {exp.role}
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                      </h3>
                      <p className="text-sm font-medium" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </FigmaFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
