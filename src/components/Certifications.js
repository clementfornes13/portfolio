import React, { useState, useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import certificatPDF from "../images/certificat.pdf";
import { ThemeContext } from "../ThemeContext";
import FancyText from "./FancyText";

const certifications = [
  {
    title: "TOEIC Listening and Reading",
    year: "2025",
    score: 905,
    maxScore: 990,
    pdf: certificatPDF,
  },
];

const AnimatedCounter = ({ target, duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
        setDone(true);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={done ? "animate-pulse" : ""}>
      {count}
    </span>
  );
};

const ScoreRing = ({ score, maxScore }) => {
  const percentage = (score / maxScore) * 100;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        {/* Background circle */}
        <circle
          cx="80" cy="80" r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-neutral-200 dark:text-neutral-800"
        />
        {/* Progress circle */}
        <motion.circle
          cx="80" cy="80" r={radius}
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: circumference - (circumference * percentage) / 100 } : {}}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-accent">
          <AnimatedCounter target={score} />
        </span>
        <span className="text-sm text-neutral-400 font-light">/ {maxScore}</span>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [selected, setSelected] = useState(null);
  const { rainbowMode } = useContext(ThemeContext);

  return (
    <section id="certifications" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
            {rainbowMode ? (
              <FancyText gradient={{ from: "#F858E0", to: "#77156C" }} animateTo={{ from: "#6DEDD0", to: "#7AE23A" }} animateDuration={2000}>
                Certifications
              </FancyText>
            ) : (
              <>My <span className="gradient-text">Certifications</span></>
            )}
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="group relative rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
              onClick={() => setSelected(cert)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: "conic-gradient(from 0deg, #7c3aed, #ec4899, #a78bfa, #7c3aed)",
                padding: "1px",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }} />

              <div className="relative p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Left: Logo + Title */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/39/ETS_Logo.svg"
                        alt="ETS"
                        className="w-12 h-12 dark:invert flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-accent transition-colors duration-300">{cert.title}</h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{cert.year}</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                      English proficiency certification — top 3% worldwide score range.
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs text-accent group-hover:underline">
                      View certificate
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </span>
                  </div>

                  {/* Right: Animated score ring */}
                  <div className="flex-shrink-0">
                    <ScoreRing score={cert.score} maxScore={cert.maxScore} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-surface-light dark:bg-surface-dark border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl w-[90%] md:w-3/4 lg:w-1/2 h-[80%] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-pink-500 to-accent-light" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 text-neutral-400 hover:text-accent text-xl transition-colors"
              >
                &times;
              </button>
              <iframe src={selected.pdf} title={selected.title} className="w-full h-full" frameBorder="0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
