import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { ThemeContext } from "../ThemeContext";
import FancyText from "./FancyText";
import MagneticButton from "./MagneticButton";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@clementfornes.com",
    href: "mailto:contact@clementfornes.com",
    action: "Send an email",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "clement-fornes",
    href: "https://linkedin.com/in/clement-fornes",
    action: "Connect with me",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "clementfornes13",
    href: "https://github.com/clementfornes13",
    action: "Check my code",
  },
];

const Contact = () => {
  const { rainbowMode } = useContext(ThemeContext);

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Big CTA text */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-accent mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What's next?
          </motion.p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            {rainbowMode ? (
              <FancyText gradient={{ from: "#F858E0", to: "#77156C" }} animateTo={{ from: "#6DEDD0", to: "#7AE23A" }} animateDuration={2000}>
                Let's work together
              </FancyText>
            ) : (
              <>
                Let's work{" "}
                <span className="gradient-text">together</span>
              </>
            )}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a project
            in mind or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <MagneticButton key={i}>
                <motion.a
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-16 bg-accent/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-500">
                        <Icon className="text-xl text-accent group-hover:text-white transition-colors duration-500" />
                      </div>
                      <FaArrowRight className="text-xs text-neutral-300 dark:text-neutral-700 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="font-semibold text-neutral-900 dark:text-white mb-0.5 group-hover:text-accent transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                      {link.value}
                    </p>
                    <p className="text-[10px] text-accent/60 group-hover:text-accent transition-colors">
                      {link.action} →
                    </p>
                  </div>
                </motion.a>
              </MagneticButton>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
