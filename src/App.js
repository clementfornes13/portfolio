'use client';
import React, { useContext } from "react";

import RainbowProvider, { RainbowContext } from "./RainbowContext";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundLayer from "./components/BackgroundLayer";
import SplashCursor from "./components/SplashCursor";
import FreelanceServices from "./components/FreelanceServices";
import TarifSection from "./components/TarifSection";
function AppContent() {
  const { rainbowMode } = useContext(RainbowContext);
  return (
    <div className="min-h-screen relative">
      {rainbowMode && <SplashCursor />}
      <BackgroundLayer />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <FreelanceServices />
      <Contact />
      <TarifSection />
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <RainbowProvider>
      <AppContent />
    </RainbowProvider>
  );
};

export default App;
