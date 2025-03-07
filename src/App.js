'use client';
import React, { useContext } from "react";
import RainbowProvider, { RainbowContext } from "./RainbowContext";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

function AppContent() {
  const { rainbowMode } = useContext(RainbowContext);
  return (
    <div className="bg-black min-h-screen relative">
      {rainbowMode && <SplashCursor />}
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
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
