import { motion } from "framer-motion";
import { publications, certifications } from "@/data/portfolioData";
import { FileText, Award, ExternalLink, Hash } from "lucide-react";

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-16 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="text-xs text-primary font-mono mb-2">// Inspect Panel</div>
        <h2 className="text-3xl font-bold mb-2">Research & Publications</h2>
        <p className="text-muted-foreground max-w-lg">
          Technical specifications and research contributions presented as
          data specifications in the Inspect tab.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg border border-border overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-figma-hover border-b border-border">
            <FileText className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Publications</span>
          </div>

          <div className="p-4 space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-figma-hover rounded-lg"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-medium text-sm">{pub.title}</h4>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  {pub.description}
                </p>
                {pub.applicationNo && (
                  <div className="flex items-center gap-2 text-xs">
                    <Hash className="w-3 h-3 text-primary" />
                    <span className="font-mono text-primary">
                      Application No: {pub.applicationNo}
                    </span>
                  </div>
                )}
                {!pub.applicationNo && (
                  <div className="inline-flex items-center px-2 py-0.5 bg-secondary/20 text-secondary text-[10px] font-medium rounded">
                    Q1 Journal • Impact Factor 6.9
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-lg border border-border overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-figma-hover border-b border-border">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">Certifications</span>
          </div>

          <div className="p-4 space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-4 p-3 bg-figma-hover rounded-lg group hover:bg-muted transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, hsl(45 93% 47% / 0.2), hsl(25 95% 53% / 0.2))" }}
                >
                  <Award className="w-5 h-5" style={{ color: "hsl(45, 93%, 47%)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Snippet Preview */}
          <div className="p-4 border-t border-border">
            <div className="text-xs text-muted-foreground mb-2">// Technical Skills</div>
            <div className="bg-canvas rounded-lg p-3 font-mono text-[11px] overflow-x-auto">
              <div className="text-muted-foreground">
                <span className="text-secondary">const</span>{" "}
                <span className="text-foreground">skills</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-primary">azure</span>:{" "}
                <span style={{ color: "hsl(142, 69%, 58%)" }}>"Certified"</span>,
              </div>
              <div className="pl-4">
                <span className="text-primary">python</span>:{" "}
                <span style={{ color: "hsl(142, 69%, 58%)" }}>"NLP, ML"</span>,
              </div>
              <div className="pl-4">
                <span className="text-primary">figma</span>:{" "}
                <span style={{ color: "hsl(142, 69%, 58%)" }}>"Expert"</span>
              </div>
              <div className="text-muted-foreground">{"}"}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
