// AboutMe.js - Présentation de ton parcours avec un design similaire à l'image
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../images/profile.png"; // Remplace par l'image correcte

const AboutMe = () => {
  return (
    <div id="about-me" className="">
      {/* Rainbow Separator */}
      <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500"></div>
      < div className="flex flex-col md:flex-row items-center justify-center p-10 text-black bg-white" >

        {/* Image à gauche en noir et blanc*/}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-1/3 md:w-1/4 rounded-lg filter grayscale"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

        />

        {/* Texte à droite */}
        <div className="md:w-1/3 text-left md:ml-10">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              About me
            </span>
          </motion.h1>

          <h2 className="text-3xl font-extrabold mt-2">Junior Software Engineer</h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a passionate Software Engineer with experience in full-stack development, AI, and blockchain.
            My goal is to build innovative and efficient solutions that solve real-world problems. I have a strong
            background in backend and frontend technologies, cloud computing, and scalable system architectures.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>

          </div>
        </div>
      </div >
    </div >
  );
};

export default AboutMe;
