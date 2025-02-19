// Projects.js - Liste des projets
import React from "react";

const projects = [
];

const Projects = () => {
    return (
        <div className="p-10 text-white">
            <h1 className="text-4xl font-bold">Projects</h1>
            <ul className="mt-4 space-y-4">
                {projects.map((project, index) => (
                    <li key={index}>
                        <h2 className="text-xl font-semibold">{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} className="text-blue-400 underline">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;