import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkExperience from "./components/WorkExperience";
import RecentProjects from "./components/RecentProjects";
import JuniorEngineer from "./components/JuniorEngineer";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WorkExperience />
      <RecentProjects />
      <JuniorEngineer />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;