// AboutMe.js - About Me Section for Portfolio
import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import profileImage from "../images/profile.png";
import FancyText from "./FancyText";
import { RainbowContext } from "../RainbowContext";

const handleDownloadResume = (file) => {
  const link = document.createElement("a");
  link.href
    = process.env.PUBLIC_URL + file;
  link.download = "Clement_Fornes_Resume.pdf";
  link.click();
};

const handleScrollToContact = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  } else {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }
};


const AboutMe = () => {

  const { showFunFacts, rainbowMode } = useContext(RainbowContext);

  return (
    <div id="about-me" className="">
      <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500"></div>
      <div className="flex flex-col md:flex-row items-center justify-center p-10 text-black bg-white">

        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-1/3 md:w-1/4 rounded-lg filter grayscale"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        <div className="md:w-1/3 text-left md:ml-10">
          <motion.h1
            className="font-bold lg:text-4xl md:text-3xl text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {rainbowMode ? (
              <FancyText
                gradient={{ from: "#F858E0", to: "#77156C" }}
                animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                animateDuration={2000}
              >
                <React.Fragment>
                  <span className="text-transparent bg-clip-text">
                    About me
                  </span>
                </React.Fragment>
              </FancyText>
            ) : (
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                About me
              </span>
            )}
          </motion.h1>
          {rainbowMode ? (
            <FancyText
              gradient={{ from: "#F858E0", to: "#77156C" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
            >
              <React.Fragment>
                <h2 className="font-extrabold mt-2 lg:text-3xl md:text-2xl text-xl">
                  Junior Software Engineer
                </h2>
              </React.Fragment>
            </FancyText>
          ) : (
            <h2 className="font-extrabold mt-2 lg:text-3xl md:text-2xl text-xl">
              Junior Software Engineer
            </h2>
          )}
          {rainbowMode ? (
            <FancyText
              gradient={{ from: "#F858E0", to: "#77156C" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
            >
              <React.Fragment>
                <p className="leading-relaxed lg:text-base md:text-sm text-xs lg:mt-4 md:mt-2 mt-0">
                  Hey there! I'm a software engineer who loves building <strong>fast, efficient, and scalable applications. </strong>
                  I specialize in <strong>full-stack development</strong> and solving complex problems with <strong>clean, reliable code. </strong>
                  Ever since I was a kid, I've been hooked on creating things with computers, and that passion has only grown stronger.
                </p>
                <p className="leading-relaxed lg:text-base md:text-sm text-xs lg:mt-4 md:mt-2 mt-0">
                  When I’m not coding, you’ll probably find me <strong>at the gym, exploring new ideas, </strong>
                  or picking up <strong>new skills</strong> to stay ahead in this ever-changing industry.
                </p>
              </React.Fragment>
            </FancyText>
          ) : (
            <React.Fragment>
              <p className="text-gray-600 leading-relaxed lg:text-base md:text-sm text-xs lg:mt-4 md:mt-2 mt-0">
                Hey there! I'm a software engineer who loves building <strong>fast, efficient, and scalable applications. </strong>
                I specialize in <strong>full-stack development</strong> and solving complex problems with <strong>clean, reliable code. </strong>
                Ever since I was a kid, I've been hooked on creating things with computers, and that passion has only grown stronger.
              </p>
              <p className="text-gray-600 leading-relaxed lg:text-base md:text-sm text-xs lg:mt-4 md:mt-2 mt-0">
                When I’m not coding, you’ll probably find me <strong>at the gym, exploring new ideas, </strong>
                or picking up <strong>new skills</strong> to stay ahead in this ever-changing industry.
              </p>
            </React.Fragment>
          )}



          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDownloadResume("/resume.pdf")}
            >
              Download Resume
            </motion.button>

            <motion.button
              className="bg-gray-200 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-300 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollToContact("contact")}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
