// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projets</h2>
      <ul>
        <li>
          <h3>Cesiveroo (Back-end)</h3>
          <p>Développement de la gestion des routes pour une application de livraison.</p>
        </li>
        <li>
          <h3>EasySave (Front-end)</h3>
          <p>Création d'une interface utilisateur intuitive pour une application de sauvegarde de fichiers.</p>
        </li>
        <li>
          <h3>Remote Real-Time DSP (Stage au LASSENA)</h3>
          <p>Développement d'un système de traitement du signal en temps réel à distance utilisant USB over IP avec les satellites Globalstar et ORBCOMM.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;