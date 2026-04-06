import { motion, useScroll, useTransform } from "framer-motion";
import React, { useContext, useRef } from "react";
import profileImage from "../images/profile.png";
import FancyText from "./FancyText";
import { ThemeContext } from "../ThemeContext";

const TextReveal = ({ children, delay = 0, className = "" }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  </div>
);

const Hero = () => {
  const { rainbowMode } = useContext(ThemeContext);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] dark:opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            filter: "blur(100px)",
            top: "-10%",
            right: "-5%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24">
          {/* Left — Text */}
          <motion.div style={{ y: textY }} className="order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <div className="mb-6">
              {rainbowMode ? (
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                  <FancyText
                    gradient={{ from: "#F858E0", to: "#77156C" }}
                    animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                    animateDuration={2000}
                  >
                    CLEMENT FORNES
                  </FancyText>
                </h1>
              ) : (
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                  <TextReveal delay={0.3}>
                    <span className="block text-neutral-900 dark:text-white">
                      CLEMENT
                    </span>
                  </TextReveal>
                  <TextReveal delay={0.45}>
                    <span className="block gradient-text">FORNES</span>
                  </TextReveal>
                </h1>
              )}
            </div>

            {/* Role */}
            <TextReveal delay={0.6}>
              <p className="text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 mb-8 max-w-md">
                Software Engineer building{" "}
                <span className="text-accent font-normal">fast</span>,{" "}
                <span className="text-accent font-normal">scalable</span> &{" "}
                <span className="text-accent font-normal">beautiful</span>{" "}
                applications.
              </p>
            </TextReveal>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="group relative px-7 py-3.5 rounded-full bg-accent text-white text-sm font-medium overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">View my work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent via-pink-500 to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
              <motion.button
                className="px-7 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:border-accent hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in touch
              </motion.button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                { value: "3yr", label: "Experience" },
                { value: "Full-Stack", label: "Speciality" },
                { value: "24/7", label: "Curious" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Animated gradient border wrapper */}
              <div className="relative p-[2px] rounded-[1.75rem] overflow-hidden">
                {/* Spinning gradient border */}
                <div
                  className="absolute inset-[-50%] animate-spin-slow"
                  style={{
                    background: "conic-gradient(from 0deg, #7c3aed, #ec4899, #a78bfa, #7c3aed)",
                  }}
                />
                {/* Inner container to mask the spinning gradient */}
                <div className="relative rounded-[1.65rem] overflow-hidden bg-surface-light dark:bg-surface-dark">
                  <img
                    src={profileImage}
                    alt="Clement Fornes"
                    className="relative w-64 md:w-72 lg:w-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() =>
            document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-accent transition-colors">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
