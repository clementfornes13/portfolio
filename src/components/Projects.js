// Projects.js
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RainbowContext } from "../RainbowContext";
import FancyText from "./FancyText";
import {
    SiReact,
    SiMongodb,
    SiExpress,
    SiDotnet,
    SiSqlite,
    SiFirebase,
    SiRedux,
    SiTypescript,
    SiDocker
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

import { TbBrandCSharp } from "react-icons/tb";


// Données de vos projets
const projects = [
    {
        name: "CESI",
        name2: "VEROO",
        description: "A full-stack food delivery platform featuring real-time order tracking, restaurant management, and user authentication. Build with React Native, Express.js, SQL Server, MongoDB, and Docker.",
        link: "https://github.com/clementfornes13",
        color: "from-black to-black",
        color2: "from-[#00C1EB] to-[#00C1EB]",
        details: "A full-stack food delivery platform featuring real-time order tracking, restaurant management, and user authentication. Built with React, Node.js, and MongoDB.",
        tech: [
            { name: "React Native", icon: SiReact },
            { name: "Express.js", icon: SiExpress },
            { name: "SQL Server", icon: DiMsqlServer },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Docker", icon: SiDocker },
        ],
    },
    {
        name: "EasySave",
        description: "A backup software for Windows, macOS, and Linux. Built with C# and .NET.",
        link: "https://github.com/clementfornes13",
        color: "from-blue-500 to-indigo-500",
        details: "A backup software for Windows, macOS, and Linux. Built with C# and .NET.",
        tech: [
            { name: "C#", icon: TbBrandCSharp },
            { name: ".NET", icon: SiDotnet },
            { name: "WPF", icon: SiDotnet },
            { name: "SQLite", icon: SiSqlite }
        ],
    },
    {
        name: "GateGuard",
        description: "A secure access control system for parking facilities, featuring real-time identity verification and automated gate management. Built with React Native and Firebase.",
        link: "https://www.example.com",
        color: "from-green-500 to-teal-500",
        details: "A secure access control system for parking facilities, featuring real-time identity verification and automated gate management. Built with React Native and Firebase.",
        tech: [
            { name: "React Native", icon: SiReact },
            { name: "Firebase", icon: SiFirebase },
            { name: "Redux", icon: SiRedux },
            { name: "TypeScript", icon: SiTypescript }
        ],
    },
];

// Composant Modal pour afficher les détails du projet
const ProjectModal = ({ project, onClose }) => {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative mx-4"
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-3xl transition-colors"
                        >
                            &times;
                        </button>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-4xl font-bold mb-2">
                                    <span className="text-gray-900">{project.name}</span>
                                    {project.name2 && (
                                        <span className={`bg-gradient-to-r ${project.color2} text-transparent bg-clip-text`}>
                                            {project.name2}
                                        </span>
                                    )}
                                </h2>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    {project.tech?.map((tech, index) => (
                                        <div key={index} className="flex flex-col items-center group/tech">
                                            <tech.icon className="w-8 h-8 text-gray-600 group-hover/tech:text-blue-500 transition-colors" />
                                            <span className="text-xs text-gray-500 mt-1">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">{project.details}</p>
                            <div className="flex justify-end">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Projects = () => {
    const { rainbowMode } = useContext(RainbowContext);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div
            id="projects"
            className="min-h-screen py-20 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4">
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
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A collection of my recent work showcasing my skills and experience in software development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => openModal(project)}
                        >
                            <div className="p-6 space-y-4">
                                <h2 className="text-2xl font-bold">
                                    <span className="text-gray-900">{project.name}</span>
                                    {project.name2 && (
                                        <span className={`bg-gradient-to-r ${project.color2} text-transparent bg-clip-text`}>
                                            {project.name2}
                                        </span>
                                    )}
                                </h2>
                                <p className="text-gray-600">{project.description}</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    {project.tech?.map((tech, index) => (
                                        <div key={index} className="flex flex-col items-center group/tech">
                                            <tech.icon className="w-8 h-8 text-gray-600 group-hover/tech:text-blue-500 transition-colors" />
                                            <span className="text-xs text-gray-500 mt-1">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-all hover:shadow-lg"
                                >
                                    View Details
                                </button>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </div>
    );
};

export default Projects;

