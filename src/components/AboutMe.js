import React, { useContext } from "react";
import { motion } from "framer-motion";
import FancyText from "./FancyText";
import MagneticButton from "./MagneticButton";
import { ThemeContext } from "../ThemeContext";

const highlights = [
  {
    emoji: "🎯",
    title: "Full-Stack",
    desc: "From pixel-perfect UIs to robust APIs",
  },
  {
    emoji: "⚡",
    title: "Performance",
    desc: "Optimized, fast, production-ready code",
  },
  {
    emoji: "🧩",
    title: "Problem Solver",
    desc: "Complex challenges, elegant solutions",
  },
  {
    emoji: "📚",
    title: "Always Learning",
    desc: "Staying ahead of the tech curve",
  },
];

const AboutMe = () => {
  const { rainbowMode, showFunFacts } = useContext(ThemeContext);

  return (
    <section id="about-me" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left — Title + Text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              {rainbowMode ? (
                <FancyText gradient={{ from: "#F858E0", to: "#77156C" }} animateTo={{ from: "#6DEDD0", to: "#7AE23A" }} animateDuration={2000}>
                  About me
                </FancyText>
              ) : (
                <>About <span className="gradient-text">me</span></>
              )}
            </h2>

            <div className="space-y-5 text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
              {showFunFacts ? (
                <>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg"
                  >
                    🤫 <strong className="text-accent">Fun facts mode activated!</strong>
                  </motion.p>
                  <p>
                    90% of my coding is debugging. The other 10% is writing bugs I'll debug later.
                    My git commits go from <span className="text-accent">"fix bug"</span> to{" "}
                    <span className="text-accent">"final fix"</span> to{" "}
                    <span className="text-accent">"I hope this works"</span>.
                  </p>
                  <p>
                    Stack Overflow is my co-pilot, coffee is my fuel, and I've mass-produced
                    more <span className="text-accent">console.log("here")</span> than I'd like to admit.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I'm a software engineer based in Marseille, France. I love building{" "}
                    <strong className="text-accent">fast, efficient, and scalable applications</strong> that
                    make a real impact. I specialize in{" "}
                    <strong className="text-accent">full-stack development</strong>, from crafting
                    pixel-perfect frontends to designing robust backend architectures.
                  </p>
                  <p>
                    With 3 years of hands-on experience through my engineering apprenticeship,
                    I've shipped production applications, worked with cross-functional teams,
                    and developed a strong eye for <strong className="text-accent">clean, maintainable code</strong>.
                  </p>
                  <p>
                    When I'm not coding, you'll find me{" "}
                    <strong className="text-accent">at the gym</strong>, exploring new tech, or
                    deep-diving into side projects. I believe the best engineers never stop learning.
                  </p>
                </>
              )}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <motion.button
                  className="px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = process.env.PUBLIC_URL + "/resume.pdf";
                    link.download = "Clement_Fornes_Resume.pdf";
                    link.click();
                  }}
                >
                  Download Resume
                </motion.button>
              </MagneticButton>
              <MagneticButton>
                <motion.button
                  className="px-6 py-3 rounded-full border border-accent/30 text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-300"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </motion.button>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right — Highlight cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -6, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-accent/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-white mb-1 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
