import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RainbowContext } from "../RainbowContext";
import FancyText from "./FancyText";
import background from "../images/background.jpg";
import { FaGraduationCap, FaBook, FaBriefcase } from "react-icons/fa";

const timelineItems = [
  {
    icon: FaGraduationCap,
    title: "CPGE TSI",
    subtitle: "Lycée Antonin Artaud",
    period: "2020 - 2022",
    description: "Classes préparatoires aux grandes écoles",
  },
  {
    icon: FaBook,
    title: "Ecole d'ingénieurs en informatique",
    subtitle: "CESI Aix-en-Provence",
    period: "2022 - 2025",
    description: "Formation d'ingénieur en informatique",
  },
  {
    icon: FaBriefcase,
    title: "Développeur Junior",
    subtitle: "TEA Marseille",
    period: "2022 - Present",
    description: "Formation en alternance",
  },
];

const Experience = () => {
  const { rainbowMode } = useContext(RainbowContext);
  const { scrollYProgress } = useScroll();

  // Parallax for background
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="experience" className="relative h-screen overflow-hidden">
      {/* Background layer */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-24">
        {/* Title */}
        <motion.h1
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center ${
            rainbowMode
              ? ''
              : 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text'
          }`}
          initial={{ opacity: 0, y: -50, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
        >
          {rainbowMode ? (
            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000}
            >
              My Experience
            </FancyText>
          ) : (
            'My Experience'
          )}
        </motion.h1>

        {/* Timeline items */}
        <div className="w-full max-w-3xl space-y-8">
          {timelineItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="flex items-start bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <motion.span
                  className="p-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mr-4 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, ease: 'linear' }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {rainbowMode ? (
                      <FancyText
                        gradient={{ from: '#F858E0', to: '#77156C' }}
                        animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
                        animateDuration={2000}
                      >
                        {item.title}
                      </FancyText>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-sm uppercase text-blue-300 mb-2">{item.period}</p>
                  <p className="text-gray-200 mb-1">{item.description}</p>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
