import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tips = [
  "Did you know? I specialize in Information Architecture!",
  "Try clicking on the layers panel to navigate 👈",
  "Scroll to explore different sections of my work",
  "I love creating high-fidelity prototypes in Figma!",
  "Check out my MoodBot project - 18% accuracy boost!",
  "40+ responsive screens delivered at Alfaleus Tech",
  "I believe in data-driven design decisions",
];

export const FigmaCursor = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animate cursor around the screen
    const animateCursor = () => {
      const randomX = Math.random() * (window.innerWidth - 400) + 300;
      const randomY = Math.random() * (window.innerHeight - 200) + 100;
      setPosition({ x: randomX, y: randomY });
    };

    const moveInterval = setInterval(animateCursor, 4000);

    // Show tip periodically
    const tipInterval = setInterval(() => {
      setShowTip(true);
      setCurrentTip((prev) => (prev + 1) % tips.length);
      setTimeout(() => setShowTip(false), 3500);
    }, 8000);

    // Initial tip after 3 seconds
    const initialTip = setTimeout(() => {
      setShowTip(true);
      setTimeout(() => setShowTip(false), 3500);
    }, 3000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(tipInterval);
      clearTimeout(initialTip);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: position.x,
        y: position.y,
      }}
      transition={{
        x: { type: "spring", stiffness: 50, damping: 20 },
        y: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 0.5 },
      }}
      className="fixed z-[100] pointer-events-none"
    >
      {/* Cursor */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-lg"
      >
        <path
          d="M5.5 3L19.5 12L12 13.5L9 20L5.5 3Z"
          fill="hsl(var(--primary))"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Name Tag */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute top-5 left-5 bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
      >
        Mehak
      </motion.div>

      {/* Tip Bubble */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-10 left-8 max-w-[200px] bg-card border border-border rounded-lg p-2 text-[11px] shadow-lg"
          >
            <div className="absolute -top-1 left-2 w-2 h-2 bg-card border-l border-t border-border transform -rotate-45" />
            <p>{tips[currentTip]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
