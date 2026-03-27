import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../ThemeContext";
import FancyText from "./FancyText";
import {
  SiReact, SiMongodb, SiExpress, SiDotnet, SiSqlite,
  SiFirebase, SiFlutter, SiDart, SiDocker,
  SiNextdotjs, SiNestjs, SiPostgresql, SiRedis, SiPrisma, SiStripe, SiTypescript, SiTailwindcss, SiExpo
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

const projects = [
  {
    name: "Kaelix",
    emoji: "💪",
    description: "All-in-one SaaS platform for fitness & bodybuilding coaches — web dashboard + mobile athlete app.",
    longDescription: "A full-stack multi-tenant SaaS connecting coaches and athletes. Coaches manage clients, programs (training & nutrition), check-ins, messaging, and billing via a Next.js 16 web app. Athletes access their programs, submit weekly check-ins (weight, mood, sleep, stress), upload progress photos, and chat with their coach through an Expo/React Native mobile app. Powered by NestJS API, PostgreSQL, Redis/BullMQ queues, Clerk auth, Stripe payments, and Expo push notifications.",
    link: null,
    gradient: "from-violet-600 to-indigo-500",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "Stripe", icon: SiStripe },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Expo", icon: SiExpo },
    ],
    highlights: ["Multi-tenant SaaS", "Web + Mobile", "Stripe billing", "Push notifications", "Real-time messaging"],
    featured: true,
  },
  {
    name: "CesiVeroo",
    emoji: "🍕",
    description: "Modern food delivery app connecting customers, restaurants & delivery personnel with a scalable architecture.",
    longDescription: "A multi-role food delivery platform supporting customers, restaurants, and delivery personnel. Features a React Native cross-platform frontend, Express.js API backend, dual-database architecture (SQL Server + MongoDB), and full Docker containerization for portable deployment. Built by a team of 3 engineering students.",
    link: "https://aymanehilmi.com/Cesiveroo",
    gradient: "from-violet-500 to-pink-500",
    tech: [
      { name: "React Native", icon: SiReact },
      { name: "Express.js", icon: SiExpress },
      { name: "SQL Server", icon: DiMsqlServer },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Docker", icon: SiDocker },
    ],
    highlights: ["Multi-role", "Dual databases", "Dockerized", "Cross-platform"],
  },
  {
    name: "EasySave",
    emoji: "💾",
    description: "Backup application with WPF & console interfaces, encryption via CryptoSoft, and parallel execution.",
    longDescription: "A desktop backup application evolved through 3 major versions — from a console app to a full WPF interface with remote control. Supports unlimited backup jobs, parallel/sequential execution, priority file management, CryptoSoft encryption, business software detection (auto-pause), and bilingual support (FR/EN). Logs in JSON & XML formats.",
    link: "https://github.com/eystone/prosoft",
    gradient: "from-blue-500 to-violet-500",
    tech: [
      { name: "C#", icon: TbBrandCSharp },
      { name: ".NET", icon: SiDotnet },
      { name: "WPF", icon: SiDotnet },
    ],
    highlights: ["Parallel execution", "Encryption", "Remote interface", "Bilingual"],
  },
  {
    name: "Car In Out",
    emoji: "🚗",
    description: "Cross-platform Flutter app for registering vehicle entries & exits on site, with real-time tracking.",
    longDescription: "A tablet-first Flutter application deployed at car park entrances to track vehicle and personnel movements in real time. Features PIN authentication, multilingual support (FR/EN), Firebase Firestore storage, Excel report generation, and Shorebird code push for OTA updates.",
    link: "https://github.com/clementfornes13",
    gradient: "from-cyan-500 to-violet-500",
    tech: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase },
    ],
    highlights: ["Cross-platform", "Real-time tracking", "Excel reports", "OTA updates"],
  },
];

const ProjectModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-surface-light dark:bg-surface-dark border border-neutral-200/50 dark:border-neutral-800/50 rounded-t-3xl md:rounded-3xl w-full md:max-w-xl p-8 mx-0 md:mx-4 relative overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
          <button onClick={onClose} className="absolute top-4 right-5 text-neutral-400 hover:text-accent text-xl transition-colors">
            &times;
          </button>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{project.emoji}</span>
            <h3 className="text-2xl font-bold gradient-text">{project.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech?.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs border border-accent/20 text-accent rounded-full px-3 py-1.5 hover:bg-accent/10 transition-colors">
                <t.icon className="w-3.5 h-3.5" /> {t.name}
              </span>
            ))}
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">{project.longDescription}</p>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white bg-accent hover:bg-accent-light px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-accent/25"
            >
              View project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-neutral-400 border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Private project
            </span>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const { rainbowMode } = useContext(ThemeContext);
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-32 relative">
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
                Projects
              </FancyText>
            ) : (
              <>Featured <span className="gradient-text">Projects</span></>
            )}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">Recent work showcasing my skills.</p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              onClick={() => setSelected(project)}
            >
              {/* Gradient hover bg */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700`} />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Left: Project info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{project.emoji}</span>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                          {project.name}
                        </h3>
                        <span className="text-xs text-accent/60 font-medium uppercase tracking-wider">
                          Project {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 max-w-lg">
                      {project.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.map((t, j) => (
                        <span key={j} className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800/50 rounded-full px-2.5 py-1 group-hover:border-accent/20 group-hover:text-accent transition-all duration-300">
                          <t.icon className="w-3 h-3" /> {t.name}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((h, j) => (
                        <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow button */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-400 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-500">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
