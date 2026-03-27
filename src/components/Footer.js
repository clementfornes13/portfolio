import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className="relative py-16">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Branding */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-bold gradient-text mb-1">CF</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Crafted with <span className="text-accent">care</span> & too much coffee ☕
            </p>
          </motion.div>

          {/* Center — Social */}
          <div className="flex gap-3">
            {[
              { href: "https://github.com/clementfornes13", icon: FaGithub },
              { href: "https://linkedin.com/in/clement-fornes", icon: FaLinkedin },
              { href: "mailto:contact@clementfornes.com", icon: FaEnvelope },
            ].map(({ href, icon: Icon }, i) => (
              <MagneticButton key={i} strength={0.3}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center text-neutral-400 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              </MagneticButton>
            ))}
          </div>

          {/* Right — Copyright */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs text-neutral-400">
              &copy; {new Date().getFullYear()} Clement Fornes
            </p>
            <p className="text-[10px] text-neutral-400/50 mt-1">
              psst... try typing something 👀
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
