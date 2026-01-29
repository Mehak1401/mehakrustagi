import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Play } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection = ({ onExplore }: HeroSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[calc(100vh-48px)] flex items-center justify-center relative"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 canvas-grid opacity-30" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 blur-sm"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full bg-secondary/10 border border-secondary/20 blur-sm"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Frame Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">UI/UX Developer & Designer</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Mehak</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          I craft <span className="text-foreground font-medium">data-informed</span>,{" "}
          <span className="text-foreground font-medium">user-centric</span> digital experiences
          with a focus on high-fidelity prototyping and design systems.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mb-10"
        >
          {[
            { value: "50+", label: "User Interviews" },
            { value: "40+", label: "Figma Screens" },
            { value: "6+", label: "Projects Delivered" },
            { value: "30%", label: "Efficiency Boost" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors glow-primary"
          >
            <Play className="w-4 h-4" />
            Explore Canvas
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
