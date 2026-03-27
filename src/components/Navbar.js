import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";
import { useTheme } from "../ThemeContext";

const navItems = [
  { name: "home", id: "home" },
  { name: "about", id: "about-me" },
  { name: "skills", id: "skills" },
  { name: "projects", id: "projects" },
  { name: "journey", id: "experience" },
  { name: "contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoClickCount = useRef(0);
  const logoClickTimer = useRef(null);
  const { showToast } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = item.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    logoClickCount.current++;
    clearTimeout(logoClickTimer.current);
    if (logoClickCount.current >= 3) {
      logoClickCount.current = 0;
      showToast("Built with React, Tailwind, Framer Motion & lots of ☕ — try typing 'rainbow' 👀");
    } else {
      logoClickTimer.current = setTimeout(() => {
        logoClickCount.current = 0;
      }, 500);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl shadow-lg shadow-accent/5 border border-neutral-200/50 dark:border-neutral-800/50"
            : "bg-transparent"
        } rounded-full px-2 py-1`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-1">
          {/* Logo */}
          <MagneticButton>
            <button
              onClick={handleLogoClick}
              className="text-lg font-bold tracking-tight px-4 py-2 rounded-full hover:text-accent transition-colors gradient-text"
            >
              CF
            </button>
          </MagneticButton>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <MagneticButton key={item.id} strength={0.2}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-xs tracking-wider uppercase px-3 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </MagneticButton>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1 ml-2">
            <ThemeToggle />
            <button
              className="md:hidden p-2 text-neutral-500 hover:text-accent transition-colors rounded-full"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path d="M4 4L14 14M14 4L4 14" />
                ) : (
                  <path d="M2 5H16M2 9H16M2 13H16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-4xl font-light tracking-wider uppercase transition-colors ${
                    activeSection === item.id
                      ? "gradient-text"
                      : "text-neutral-400 hover:text-accent"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
