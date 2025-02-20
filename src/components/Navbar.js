import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [textColor, setTextColor] = useState("text-white");
  const [backgroundColor, setBackgroundColor] = useState("bg-black bg-opacity-50 backdrop-blur-sm");

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById("about-me");
      if (aboutMeSection) {
        const rect = aboutMeSection.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setTextColor("text-black");
          setBackgroundColor("bg-white bg-opacity-50 backdrop-blur-sm");
        } else {
          setTextColor("text-white");
          setBackgroundColor("bg-black bg-opacity-50 backdrop-blur-sm");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-5 z-50 transition-colors duration-300 lg:text-lg md:text-base text-sm ${backgroundColor} ${textColor}`}>
      <motion.div
        className="font-bold cursor-pointer lg:text-xl md:text-lg text-base"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        CF
      </motion.div>
      <ul className="flex space-x-6 lg:text-lg md:text-base text-sm lg:flex-row md:flex-row flex-col">
        {[
          { name: "Home", id: "home" },
          { name: "About Me", id: "about-me" },
          { name: "Skills & Tech Stack", id: "skills" },
          { name: "Projects", id: "projects" },
          { name: "Experience", id: "experience" },
          { name: "Certifications", id: "certifications" },
          { name: "Contact", id: "contact" },
        ].map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-yellow-500 cursor-pointer transition duration-300"
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="font-bold lg:text-xl md:text-lg text-base">13</div>
    </nav>
  );
};

export default Navbar;
