'use client';
import React, { useState, useEffect } from "react";

import ThemeProvider, { useTheme } from "./ThemeContext";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import SplashCursor from "./components/SplashCursor";
import PageLoader from "./components/PageLoader";
import Toast from "./components/easter-eggs/Toast";
import Confetti from "./components/easter-eggs/Confetti";
import MatrixRain from "./components/easter-eggs/MatrixRain";
import NightSky from "./components/easter-eggs/NightSky";
import GlitchMode from "./components/easter-eggs/GlitchMode";
import GravityEffect from "./components/easter-eggs/GravityEffect";

function AppContent() {
  const { rainbowMode, activeEasterEggs, toastMessage } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader onComplete={() => setLoaded(true)} />
      {loaded && (
        <div className="min-h-screen bg-surface-light dark:bg-surface-dark text-neutral-900 dark:text-white transition-colors duration-300">
          <CustomCursor />
          {rainbowMode && <SplashCursor />}
          <Navbar />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />

          {/* Easter egg overlays */}
          {toastMessage && <Toast message={toastMessage} />}
          {activeEasterEggs.has("confetti") && <Confetti />}
          {activeEasterEggs.has("matrix") && <MatrixRain />}
          {activeEasterEggs.has("nightsky") && <NightSky />}
          {activeEasterEggs.has("glitch") && <GlitchMode />}
          {activeEasterEggs.has("gravity") && <GravityEffect />}
        </div>
      )}
    </>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
