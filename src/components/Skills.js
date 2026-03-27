import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaCloud,
} from "react-icons/fa";
import {
  SiTypescript, SiPython, SiDart, SiJavascript,
  SiReact as SiReactIcon, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql,
  SiDocker, SiGithubactions, SiGit, SiFlutter,
} from "react-icons/si";
import { ThemeContext } from "../ThemeContext";
import FancyText from "./FancyText";

const skills = [
  {
    title: "Software Development",
    description: "Functional and OOP paradigms",
    icon: FaCode,
    tagline: "The foundation",
    techs: [
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiPython, name: "Python" },
      { icon: SiDart, name: "Dart" },
    ],
    span: "md:col-span-2",
  },
  {
    title: "Frontend",
    description: "Modern web technologies",
    icon: FaReact,
    tagline: "My daily driver",
    techs: [
      { icon: SiReactIcon, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    span: "",
  },
  {
    title: "Backend & APIs",
    description: "Server-side & databases",
    icon: FaServer,
    tagline: "Where the magic happens",
    techs: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiGraphql, name: "GraphQL" },
    ],
    span: "md:col-span-2",
  },
  {
    title: "DevOps & Tools",
    description: "CI/CD & automation",
    icon: FaCloud,
    tagline: "It works on my machine™",
    techs: [
      { icon: SiDocker, name: "Docker" },
      { icon: SiGit, name: "Git" },
      { icon: SiGithubactions, name: "Actions" },
    ],
    span: "",
  },
  {
    title: "Mobile",
    description: "Cross-platform apps",
    icon: FaMobileAlt,
    tagline: "Apps in your pocket",
    techs: [
      { icon: SiFlutter, name: "Flutter" },
      { icon: SiReactIcon, name: "RN" },
    ],
    span: "",
  },
];

const Skills = () => {
  const { rainbowMode } = useContext(ThemeContext);

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
                Skills
              </FancyText>
            ) : (
              <>My <span className="gradient-text">Skills</span></>
            )}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">Technologies I work with daily.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                className={`group relative rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 overflow-hidden ${skill.span}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                {/* Hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-pink-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-500">
                      <Icon className="text-lg text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-[10px] text-accent/50 group-hover:text-accent italic transition-colors">
                      {skill.tagline}
                    </span>
                  </div>

                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-accent transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    {skill.description}
                  </p>

                  {/* Tech icons row */}
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech, j) => (
                      <motion.div
                        key={j}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 text-[11px] text-neutral-600 dark:text-neutral-400 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <tech.icon className="w-3 h-3" />
                        {tech.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
