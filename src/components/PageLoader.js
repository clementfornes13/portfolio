import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 100); // start animations
    const t2 = setTimeout(() => setStep(2), 1600); // start exit
    const t3 = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const firstName = "CLEMENT";
  const lastName = "FORNES";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background halves that split open */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-surface-light dark:bg-surface-dark origin-top"
            animate={step >= 2 ? { scaleY: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-surface-light dark:bg-surface-dark origin-bottom"
            animate={step >= 2 ? { scaleY: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            animate={step >= 2 ? { scale: 0.9, opacity: 0 } : {}}
            transition={{ duration: 0.35, ease: "easeIn" }}
          >
            {/* First name */}
            <div className="flex overflow-hidden">
              {firstName.split("").map((letter, i) => (
                <motion.span
                  key={`f-${i}`}
                  className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white inline-block"
                  initial={{ y: 80, rotateX: -90, opacity: 0 }}
                  animate={step >= 1 ? { y: 0, rotateX: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Last name */}
            <div className="flex overflow-hidden -mt-1">
              {lastName.split("").map((letter, i) => (
                <motion.span
                  key={`l-${i}`}
                  className="text-4xl md:text-6xl font-bold tracking-tight gradient-text inline-block"
                  initial={{ y: 80, rotateX: -90, opacity: 0 }}
                  animate={step >= 1 ? { y: 0, rotateX: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Animated line */}
            <motion.div
              className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-accent via-pink-500 to-accent-light"
              initial={{ width: 0 }}
              animate={step >= 1 ? { width: "8rem" } : {}}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Subtitle */}
            <motion.p
              className="mt-4 text-[10px] tracking-[0.3em] uppercase text-neutral-400"
              initial={{ opacity: 0, y: 8 }}
              animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              Software Engineer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
