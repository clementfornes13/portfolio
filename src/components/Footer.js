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
      <div className="flex justify-center space-x-6">
        <motion.a href="https://github.com/clementfornes13" whileHover={{scale:1.1}}>
          <FaGithub size={24} />
        </motion.a>
        <motion.a href="https://linkedin.com/in/clement-fornes" whileHover={{scale:1.1}}>
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a href="mailto:contact@clementfornes.com" whileHover={{scale:1.1}}>
          <FaEnvelope size={24} />
        </motion.a>
      </div>
      <div className="h-1 mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
    </footer>
  );
}