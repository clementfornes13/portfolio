// Experience.js - 3D Roadmap: Education, Studies, Experience
import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RainbowContext } from "../RainbowContext";
import FancyText from "./FancyText";
import background from "../images/background.jpg";

// Dummy timeline data – update with your actual journey details.
const timelineItems = [
  {
    category: "Education",
    title: "Title 1",
    subtitle: "Subtitle 1",
    period: "2020 - 2021",
    description: "Description 1",
    color: "from-red-500 to-pink-500",
  },
  {
    category: "Studies",
    title: "Title 2",
    subtitle: "Subtitle 2",
    period: "2021 - 2022",
    description: "Description 2",
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Experience",
    title: "Title 3",
    subtitle: "Subtitle 3",
    period: "2022 - Present",
    description: "Description 3",
    color: "from-blue-500 to-indigo-500",
  },
];

const Experience = () => {
  const { rainbowMode } = useContext(RainbowContext);
  const { scrollYProgress } = useScroll();

  // Create multiple parallax layers with different speeds
  const parallaxFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallaxMedium = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      id="experience"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})`, perspective: "1000px" }}
    >
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Parallax background layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"
        style={{ y: parallaxSlow }}
      />

      <div className="container mx-auto px-10 relative">
        {/* Section Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 text-white"
          style={{ y: parallaxMedium }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {rainbowMode ? (
            <FancyText
              gradient={{ from: "#F858E0", to: "#77156C" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
            >
              <span className="text-transparent bg-clip-text">My Journey</span>
            </FancyText>
          ) : (
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              My Journey
            </span>
          )}
        </motion.h1>

        {/* Timeline Container */}
        <div className="">
          {/* Central Vertical Line */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-700 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              // Alternate items left and right
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}
                  style={{ y: parallaxFast }}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, rotateY: isLeft ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.8 }}
                  whileHover={{ rotateY: isLeft ? 10 : -10, scale: 1.05 }}
                >
                  <motion.div
                    className="w-1/2 md:w-1/4 bg-gray-800 rounded-lg p-6 shadow-xl"
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <h2 className="text-2xl font-semibold mb-1">
                      {rainbowMode ? (
                        <FancyText
                          gradient={{ from: "#F858E0", to: "#77156C" }}
                          animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                          animateDuration={2000}
                        >
                          <span className="text-transparent bg-clip-text">
                            {item.title}
                          </span>
                        </FancyText>
                      ) : (
                        <span className={`bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
                          {item.title}
                        </span>
                      )}
                    </h2>
                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                    <p className="text-gray-300 text-sm">{item.period}</p>
                    {item.description && (
                      <p className="mt-2 text-gray-300">{item.description}</p>
                    )}
                  </motion.div>
                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 ${isLeft ? "right-[-28px]" : "left-[-28px]"
                      }`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
