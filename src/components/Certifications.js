// Certifications.js - Certifications obtenues
import React from "react";

const certifications = [
  { title: "TOEIC", year: "2019", description: "Score: 905/990", link: "https://www.etsglobal.org/fr/en/digital-score-report/1309B501F41DF52B72186BAF476248C0D16A968659EEF94E135CA60545B54FFEdW1EVVpZcWxwMFlRMkdiNkZwSEdwcG82SmtyclY1aFRUZjFYVExYM1dCWFE2NnBy" },
];

const Certifications = () => {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold">Certifications</h1>
      <ul className="mt-4 space-y-4">
        {certifications.map((cert, index) => (
          <li key={index}>
            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p>{cert.year}</p>
            <p>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noreferrer">
              Voir le certificat
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;