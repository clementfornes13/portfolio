import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <nav className={`flex justify-center items-center p-5 z-50 lg:text-lg md:text-base text-sm ${backgroundColor} ${textColor} fixed top-0 left-0 right-0 backdrop-blur-sm`}>
      <motion.div
        className="font-bold cursor-pointer lg:text-xl md:text-lg text-base mr-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onClick={() => {
          window.location.reload();
        }
        }
      >
        CF
      </motion.div>
      <ul className="lg:text-lg md:text-base text-sm lg:flex-row md:flex-row flex-col flex gap-5 justify-center items-center flex-wrap w-full text-center">
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
    </nav >
  );
};

export default Navbar;
