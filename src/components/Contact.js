// Contact.js - Section de contact
import React from "react";

const Contact = () => {
    return (
        <div className="p-10 text-white">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="mt-4 text-lg">Feel free to reach out to me via:</p>
            <ul className="mt-4 space-y-4">
                <li>Email: <a href="mailto:clementfornes@example.com" className="text-blue-400 underline">clementfornes@example.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/clementfornes" className="text-blue-400 underline">linkedin.com/in/clementfornes</a></li>
                <li>GitHub: <a href="https://github.com/clementfornes" className="text-blue-400 underline">github.com/clementfornes</a></li>
            </ul>
        </div>
    );
};

export default Contact;