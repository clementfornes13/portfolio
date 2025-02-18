
// Experience.js - Expérience professionnelle
import React from "react";

const experience = [
  { company: "TEA MARSEILLE", role: "Software Engineer", period: "2023 - Present" },
  { company: "CESI Aix-en-Provence", role: "Computer Engineering Student", period: "2020 - 2023" }
];

const Experience = () => {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold">Experience</h1>
      <ul className="mt-4 space-y-4">
        {experience.map((job, index) => (
          <li key={index}>
            <h2 className="text-xl font-semibold">{job.company}</h2>
            <p>{job.role} ({job.period})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;