import React, { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeContext } from "../ThemeContext";
import FancyText from "./FancyText";
import { FaGraduationCap, FaBook, FaBriefcase } from "react-icons/fa";

const timelineItems = [
  {
    icon: FaGraduationCap,
    title: "CPGE TSI",
    subtitle: "Lycée Antonin Artaud",
    period: "2020 — 2022",
    description: "Preparatory classes for engineering schools. Intensive math, physics, and engineering sciences.",
    tags: ["Math", "Physics", "Engineering"],
  },
  {
    icon: FaBook,
    title: "CS Engineering Degree",
    subtitle: "CESI Aix-en-Provence",
    period: "2022 — 2025",
    description: "Engineering degree in Computer Science. Full-stack development, DevOps, and project management.",
    tags: ["Full-Stack", "DevOps", "Agile"],
  },
  {
    icon: FaBriefcase,
    title: "Junior Software Engineer",
    subtitle: "TEA Marseille",
    period: "2022 — 2025",
    description: "Work-study apprenticeship. Built production applications with modern tech stacks, collaborated with cross-functional teams.",
    tags: ["React", "Node.js", "Docker", "CI/CD"],
  },
];

const Experience = () => {
  const { rainbowMode } = useContext(ThemeContext);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative" ref={containerRef}>
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
                Experience
              </FancyText>
            ) : (
              <>My <span className="gradient-text">Journey</span></>
            )}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">Education & professional experience.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              className="w-full bg-gradient-to-b from-accent via-pink-500 to-accent-light"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {timelineItems.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white dark:bg-surface-dark border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/20"
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                    >
                      <Icon className="w-5 h-5 text-accent" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "" : ""}`}>
                    <div className="group rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <span className="text-xs text-accent font-medium tracking-wider uppercase">
                          {item.period}
                        </span>
                        <h3 className="text-lg font-bold mt-2 mb-1 text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-accent/70 mb-3">{item.subtitle}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, j) => (
                            <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
