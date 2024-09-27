// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  // Fonction pour gérer les clics sur le texte "construction"
  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 5) {
        startEmojiRain(); // Lance l'animation des émojis après 5 clics
        return 0; // Réinitialise le compteur pour pouvoir cliquer à nouveau
      }
      clickCount === 4 && alert('🚧🚧🚧🚧🚧'); // Alerte après 4 clics
      return newCount;
    });
  };

  // Fonction pour lancer la pluie d'émojis
  const startEmojiRain = () => {
    const emojiContainer = document.createElement('div');
    emojiContainer.classList.add('emoji-rain');
    document.body.appendChild(emojiContainer);

    for (let i = 0; i < 50; i++) {
      const emoji = document.createElement('div');
      emoji.textContent = '🚧'; // Emoji de construction
      emoji.classList.add('emoji');
      emoji.style.left = `${Math.random() * 100}vw`; // Position horizontale aléatoire
      emoji.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durée de l'animation entre 3s et 5s
      emojiContainer.appendChild(emoji);

      // Supprime l'emoji après l'animation
      emoji.addEventListener('animationend', () => {
        emoji.remove();
      });
    }

    // Arrête l'animation après 5 secondes
    setTimeout(() => {
      emojiContainer.remove();
    }, 5000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clément FORNES</h1>
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hello, I’m Clément, a passionate software developer based in Aix-en-Provence.
          My website is currently under{' '}
          <span onClick={handleClick}>
            construction
          </span>{' '}
          as I work on bringing new and exciting content to showcase my projects and skills.
        </p>
        <p>Stay tuned for updates. In the meantime, feel free to connect with me on LinkedIn or reach out via email.</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:example@example.com">Email Me</a>
        </div>
      </header>
    </div>
  );
}

export default App;