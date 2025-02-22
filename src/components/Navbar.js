import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaCertificate, FaEnvelope } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [textColor, setTextColor] = useState("text-white");
  const [backgroundColor, setBackgroundColor] = useState("bg-black bg-opacity-50");

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById("about-me");
      if (aboutMeSection) {
        const rect = aboutMeSection.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setTextColor("text-black");
          setBackgroundColor("bg-white bg-opacity-50");
        } else {
          setTextColor("text-white");
          setBackgroundColor("bg-black bg-opacity-50");
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
    }
  };

  return (
    <nav className={`hidden md:flex fixed top-0 left-0 right-0 z-50 p-5 backdrop-blur-sm ${backgroundColor} ${textColor}`}>
      {/* Logo */}
      <motion.div
        className="font-bold cursor-pointer lg:text-xl md:text-lg text-base mr-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onClick={() => window.location.reload()}
      >
        CF
      </motion.div>

      {/* Navbar Links with Icons */}
      <motion.div
        className="lg:text-lg md:text-base text-sm flex justify-center items-center w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <ul className="flex gap-6">
          {[
            { name: "Home", id: "home", icon: <FaHome /> },
            { name: "About Me", id: "about-me", icon: <FaUser /> },
            { name: "Skills", id: "skills", icon: <FaCode /> },
            { name: "Projects", id: "projects", icon: <FaProjectDiagram /> },
            { name: "Experience", id: "experience", icon: <FaBriefcase /> },
            { name: "Certifications", id: "certifications", icon: <FaCertificate /> },
            { name: "Contact", id: "contact", icon: <FaEnvelope /> },
          ].map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition duration-300"
            >
              {item.icon} {item.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
