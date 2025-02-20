// Skills.js - Stack technologique
import React from "react";

const skills = [];

const Skills = () => {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold">Skills & Tech Stack</h1>
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg">⚡ {skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;