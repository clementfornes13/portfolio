import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaCloud } from "react-icons/fa";
import skillsBackground from "../images/background.jpg";

const skills = [
  {
    title: "Software Development",
    description: "Experienced in functional and OOP paradigms: Dart, Python, JavaScript, TypeScript.",
    icon: <FaCode className="text-white text-5xl mb-4" />,
    highlight: "Software",
    color: "border-b-4 border-pink-500"
  },
  {
    title: "Frontend Dev",
    description: "Expert in UI/UX design, React.js, Next.js, TailwindCSS & modern web technologies.",
    icon: <FaReact className="text-blue-400 text-5xl mb-4" />,
    highlight: "Frontend Dev",
    color: "border-b-4 border-blue-500"
  },
  {
    title: "Backend & APIs",
    description: "Building scalable backends with Node.js, Express.js, PostgreSQL, MongoDB & GraphQL.",
    icon: <FaServer className="text-green-400 text-5xl mb-4" />,
    highlight: "Backend & APIs",
    color: "border-b-4 border-green-500"
  },
  {
    title: "DevOps & Automation",
    description: "Containerizing apps with Docker & automating deployments with CI/CD.",
    icon: <FaCloud className="text-yellow-400 text-5xl mb-4" />,
    highlight: "DevOps",
    color: "border-b-4 border-yellow-500"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile development using Flutter & React Native.",
    icon: <FaMobileAlt className="text-orange-400 text-5xl mb-4" />,
    highlight: "Mobile Development",
    color: "border-b-4 border-orange-500"
  },
  {
    title: "Tools & CI/CD",
    description: "Version control, Git, GitHub Actions, and efficient CI/CD workflows.",
    icon: <FaTools className="text-gray-300 text-5xl mb-4" />,
    highlight: "Tools & CI/CD",
    color: "border-b-4 border-gray-500"
  }
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="py-20 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${skillsBackground})` }}
    >
      {/* Content Wrapper */}
      <div className="container mx-auto px-10">
        <h1 className="text-4xl font-bold text-white text-center">
          My Skills & Tech Stack
        </h1>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-opacity-80 rounded-xl shadow-lg bg-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              {skill.icon}
              <h2 className={`text-2xl font-semibold mt-2 ${skill.color}`}>
                <span className="text-white">{skill.highlight}</span>{" "}
                {skill.title.replace(skill.highlight, "")}
              </h2>
              <p className="mt-3 text-gray-400 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
