import React, { useContext, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { RainbowContext } from "../RainbowContext";
import FancyText from "./FancyText";
import { FaGraduationCap, FaBook, FaBriefcase } from "react-icons/fa";

import certificatPDF from "../images/certificat.pdf";

const Experience = () => {
  const { rainbowMode } = useContext(RainbowContext);
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [selectedCert, setSelectedCert] = useState(null);
  const closeModal = () => setSelectedCert(null);

  const timelineItems = [
    {
      icon: FaGraduationCap,
      title: "CPGE TSI",
      subtitle: "Lycée Antonin Artaud",
      period: "2020 - 2022",
      description: (
        <>
          Completed two years of intensive preparatory classes for engineering schools, focusing on mathematics, physics, and computer science.
        </>
      ),
    },
    {
      icon: FaBook,
      title: "Engineering Degree",
      subtitle: "CESI Aix-en-Provence",
      period: "2022 - 2025",
      description: (
        <>
          Pursuing a degree in software engineering. <br />
          <span className="text-blue-400 font-semibold">
            TOEIC Score: 905/990 (2025)
          </span>{" "}
          — certified in Listening and Reading comprehension.
          <div className="mt-2 space-x-2">
            <button
              onClick={() =>
                setSelectedCert({
                  title: "TOEIC Listening and Reading",
                  pdf: certificatPDF,
                })
              }
              className="inline-block px-4 py-1 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              👁️ View Certificate
            </button>
            <a
              href={certificatPDF}
              download
              className="inline-block px-4 py-1 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              📄 Download PDF
            </a>
          </div>
        </>
      ),
    },
    {
      icon: FaBriefcase,
      title: "Junior Software Engineer (Apprentice)",
      subtitle: "TEA Marseille",
      period: "2022 - Present",
      description: (
        <>
          Working on real-world applications as part of my engineering degree. <br />
          Contributed to full-stack Flutter & Firebase apps, dashboards, and optimizations.
        
        </>
      ),
    },
  ];

  return (
    <section id="experience" className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="w-full h-full"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-24">
        <motion.h1
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center ${
            rainbowMode
              ? ""
              : "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          }`}
          initial={{ opacity: 0, y: -50, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          {rainbowMode ? (
            <FancyText
              gradient={{ from: "#F858E0", to: "#77156C" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
            >
              My Experience
            </FancyText>
          ) : (
            "My Experience"
          )}
        </motion.h1>

        <div className="w-full max-w-3xl space-y-8">
          {timelineItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="flex items-start bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <motion.span
                  className="p-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mr-4 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, ease: "linear" }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {rainbowMode ? (
                      <FancyText
                        gradient={{ from: "#F858E0", to: "#77156C" }}
                        animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                        animateDuration={2000}
                      >
                        {item.title}
                      </FancyText>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-sm uppercase text-blue-300 mb-2">
                    {item.period}
                  </p>
                  <div className="text-gray-200 mb-1">{item.description}</div>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for TOEIC */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-3/4 lg:w-1/2 h-[80%] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              <iframe
                src={selectedCert.pdf}
                title={selectedCert.title}
                className="w-full h-full"
                frameBorder="0"
              />
              <div className="absolute bottom-4 left-0 w-full flex justify-center">
                <a
                  href={selectedCert.pdf}
                  download
                  className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
                >
                  📄 Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;