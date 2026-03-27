import React from 'react';
import {motion} from 'framer-motion';
import {FaGithub,FaLinkedin,FaEnvelope} from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-background text-foreground py-6 text-center">
      <motion.p
        className="text-gray-400 mb-4"
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        © 2025 Clement FORNES
      </motion.p>
      <motion.div
  className="flex justify-center space-x-6"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
      <div className="flex justify-center space-x-6">
        <motion.a
  href="https://github.com/clementfornes13"
  aria-label="GitHub Profile"
  whileHover={{ scale: 1.1 }}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub size={24} />
</motion.a>
        <motion.a 
        href="https://linkedin.com/in/clement-fornes" 
        aria-label="LinkedIn Profile"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{scale:1.1}}>
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a href="mailto:contact@clementfornes.com" whileHover={{scale:1.1}}
        aria-label="Email Clement FORNES"
        target="_blank"
        rel="noopener noreferrer">
          <FaEnvelope size={24} />
        </motion.a>
      </div>
      </motion.div>

      <div className="h-1 mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
    </footer>
  );
}