import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById("about-me");
      if (aboutMeSection) {
        const rect = aboutMeSection.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setTextColor("text-black"); // Change color earlier
        } else {
          setTextColor("text-white"); // Default color
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"fixed top-0 left-0 w-full flex justify-between items-center p-5 ${textColor} bg-transparent z-50 transition-colors duration-300  lg:text-lg md:text-base text-sm"}>
      <motion.div
        className="font-bold cursor-pointer lg:text-xl md:text-lg text-base"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        CF
      </motion.div>
      <ul className="flex space-x-6 lg:text-lg md:text-base text-sm lg:flex-row md:flex-row flex-col">
        {["Home", "About Me", "Skills & Tech Stack", "Projects", "Experience", "Certifications", "Contact"].map((item) => (
          <li key={item} className="hover:text-yellow-500 cursor-pointer transition duration-300">{item}</li>
        ))}
      </ul>
      <div className="font-bold lg:text-xl md:text-lg text-base">
        13
      </div>
    </nav>
  );
};

export default Navbar;