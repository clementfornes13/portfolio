// Projects.js - Projects section for your portfolio
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { RainbowContext } from "../RainbowContext";
import FancyText from "./FancyText";
import background from "../images/background.jpg"; // Reusing the background image

const projects = [
    {
        name: "Project 1",
        description: "Description of Project 1",
        link: "https://www.example.com",
        color: "from-pink-500 to-purple-500",
    },
    {
        name: "Project 2",
        description: "Description of Project 2",
        link: "https://www.example.com",
        color: "from-blue-500 to-indigo-500",
    },
    {
        name: "Project 3",
        description: "Description of Project 3",
        link: "https://www.example.com",
        color: "from-green-500 to-teal-500",
    },
];
const Projects = () => {
    const { rainbowMode } = useContext(RainbowContext);

    return (
        <div
            id="projects"
            className="py-20 flex flex-col items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <motion.div
                className="container mx-auto px-10 relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Section Title */}
                <h1 className="text-4xl font-extrabold text-center mb-12">
                    {rainbowMode ? (
                        <FancyText
                            gradient={{ from: "#F858E0", to: "#77156C" }}
                            animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                            animateDuration={2000}
                        >
                            <span className="text-transparent bg-clip-text">Projects</span>
                        </FancyText>
                    ) : (
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Projects
                        </span>
                    )}
                </h1>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center p-6 bg-opacity-90 rounded-xl shadow-xl border border-gray-700 text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{
                                background: `linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.3))`,
                            }}
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {rainbowMode ? (
                                    <FancyText
                                        gradient={{ from: "#F858E0", to: "#77156C" }}
                                        animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                                        animateDuration={2000}
                                    >
                                        <span className="text-transparent bg-clip-text">
                                            {project.name}
                                        </span>
                                    </FancyText>
                                ) : (
                                    <span
                                        className={`bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}
                                    >
                                        {project.name}
                                    </span>
                                )}
                            </h2>
                            <p className="mb-4 text-gray-300">{project.description}</p>
                            {/* View Project Button and new mouseover effect and hover effect */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
                            >
                                View Project
                            </a>
                            {/* Subtle gradient blur overlay */}
                            <div
                                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.color} opacity-20 blur-2xl`}
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
