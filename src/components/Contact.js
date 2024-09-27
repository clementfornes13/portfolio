// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;