// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clément FORNES</h1>
        <p>Aspiring Software Developer | Passionate about Coding and Technology</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Clément, a software developer based in Aix-en-Provence. Currently, I am honing my skills in 
          development, focusing on C#, web development, and Python. I am eager to take on new challenges 
          and collaborate on innovative projects.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>C#</li>
          <li>Python</li>
          <li>Web Development (React, Node.js)</li>
          <li>Docker</li>
          <li>NoSQL Databases (MongoDB, Firebase)</li>
          <li>Agile Methodologies (Scrum, Kanban)</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Cesiveroo</h3>
          <p>Backend development for a delivery app focusing on route management.</p>
        </div>
        <div className="project">
          <h3>EasySave</h3>
          <p>Frontend development for a user-friendly file backup application.</p>
        </div>
        <div className="project">
          <h3>Remote Real-Time DSP</h3>
          <p>Developed a remote real-time signal processing system using USB over IP with Globalstar and ORBCOMM satellites.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Connect with me on <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>Contact me at <a href="mailto:example@example.com">example@example.com</a></p>
      </footer>
    </div>
  );
}

export default App;