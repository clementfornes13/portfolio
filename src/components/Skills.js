import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaCloud } from "react-icons/fa";
import skillsBackground from "../images/background.jpg";
import { RainbowContext } from "../RainbowContext";
import FancyText from "./FancyText";

const skills = [
  {
    title: "Software Development",
    description: "Experienced in functional and OOP paradigms: Dart, Python, JavaScript, TypeScript.",
    icon: <FaCode className="text-white text-5xl mb-4" />,
    highlight: "Software",
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "Frontend Dev",
    description: "Expert in UI/UX design, React.js, Next.js, TailwindCSS & modern web technologies.",
    icon: <FaReact className="text-blue-400 text-5xl mb-4" />,
    highlight: "Frontend Dev",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Backend & APIs",
    description: "Building scalable backends with Node.js, Express.js, PostgreSQL, MongoDB & GraphQL.",
    icon: <FaServer className="text-green-400 text-5xl mb-4" />,
    highlight: "Backend & APIs",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "DevOps & Automation",
    description: "Containerizing apps with Docker & automating deployments with CI/CD.",
    icon: <FaCloud className="text-yellow-400 text-5xl mb-4" />,
    highlight: "DevOps",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile development using Flutter & React Native.",
    icon: <FaMobileAlt className="text-orange-400 text-5xl mb-4" />,
    highlight: "Mobile Development",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Tools & CI/CD",
    description: "Version control, Git, GitHub Actions, and efficient CI/CD workflows.",
    icon: <FaTools className="text-gray-300 text-5xl mb-4" />,
    highlight: "Tools & CI/CD",
    color: "from-gray-500 to-gray-700"
  }
];

const Skills = () => {
  const { rainbowMode } = useContext(RainbowContext);

  return (
    <div
      id="skills"
      className="py-20 flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${skillsBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        className="container mx-auto px-10 relative"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-12">
          {rainbowMode ? (
            <FancyText
              gradient={{ from: "#F858E0", to: "#77156C" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
            >
              <span className="text-transparent bg-clip-text">My Skills & Tech Stack</span>
            </FancyText>
          ) : (
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              My Skills & Tech Stack
            </span>
          )}
        </h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center p-6 bg-opacity-90 rounded-xl shadow-xl border border-gray-700 text-center"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                background: `linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.3))`,
                backdropFilter: "blur(10px)"
              }}
            >
              {skill.icon}

              {rainbowMode ? (
                <FancyText
                  gradient={{ from: "#F858E0", to: "#77156C" }}
                  animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                  animateDuration={2000}
                >
                  <h2 className="text-2xl font-semibold mt-2">
                    {skill.highlight} {skill.title.replace(skill.highlight, "")}
                  </h2>
                </FancyText>
              ) : (
                <h2 className={`text-2xl font-semibold mt-2 bg-gradient-to-r ${skill.color} text-transparent bg-clip-text`}>
                  {skill.highlight} {skill.title.replace(skill.highlight, "")}
                </h2>
              )}

              <p className="mt-3 text-gray-300">{skill.description}</p>
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-20 blur-2xl`}></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
