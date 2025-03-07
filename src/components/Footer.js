import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-white py-6 bg-gradient-to-r from-gray-900 to-black">
      <motion.p
        className="text-gray-400 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        © 2025 Clement FORNES. All rights reserved.
      </motion.p>

      <div className="flex justify-center space-x-6">
        <motion.a
          href="https://github.com/clementfornes13"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/clement-fornes"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          href="mailto:contact@clementfornes.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaEnvelope size={24} />
        </motion.a>
      </div>

      <div className="w-full h-1 mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;