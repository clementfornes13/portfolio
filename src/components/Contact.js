import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-6">Get in Touch</h1>
        <p className="text-gray-300 text-lg mb-12">
          Whether you have a question, a freelance project, or just want to connect—I'd love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <a
            href="mailto:contact@clementfornes.com"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow transition"
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/clement-fornes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/clementfornes13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;