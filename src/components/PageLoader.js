import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0); // 0: initials, 1: line expand, 2: exit

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1600);
    const t3 = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const letterVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -90 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const letters = "CLEMENT FORNES".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-surface-light dark:bg-surface-dark flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Name letters stagger */}
          <div className="flex items-center gap-[2px] perspective-[800px] mb-8">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`text-4xl md:text-6xl font-bold tracking-tight inline-block ${
                  letter === " " ? "w-4" : ""
                } ${i >= 8 ? "gradient-text" : "text-neutral-900 dark:text-white"}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Expanding line */}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-accent via-pink-500 to-accent-light rounded-full"
            initial={{ width: 0 }}
            animate={step >= 1 ? { width: "12rem" } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subtitle */}
          <motion.p
            className="mt-5 text-xs tracking-[0.25em] uppercase text-neutral-400 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Engineer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
