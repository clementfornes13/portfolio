import React from "react";
import { motion } from "framer-motion";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-5 text-white text-lg bg-transparent z-50">
    <motion.div
      className="font-bold text-xl cursor-pointer"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      CF
    </motion.div>
    <ul className="flex space-x-6">
      {["Home", "Portfolio", "Work Experience", "Social Media", "Milestone", "Contact"].map((item) => (
        <li key={item} className="hover:text-yellow-500 cursor-pointer transition duration-300">{item}</li>
      ))}
    </ul>
    <div className="text-xl font-bold">13</div>
  </nav>
);

export default Navbar;
