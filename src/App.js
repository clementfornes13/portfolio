// App.js
import React from "react";
import RainbowProvider from "./RainbowContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <RainbowProvider>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </RainbowProvider>
  );
};

export default App;