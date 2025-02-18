// Certifications.js - Certifications obtenues
import React from "react";

const certifications = [
  { title: "AWS Certified Developer", year: "2022" },
  { title: "Google Cloud Engineer", year: "2023" },
  { title: "OpenAI API Expert", year: "2024" }
];

const Certifications = () => {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold">Certifications</h1>
      <ul className="mt-4 space-y-4">
        {certifications.map((cert, index) => (
          <li key={index}>
            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p>Year: {cert.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;