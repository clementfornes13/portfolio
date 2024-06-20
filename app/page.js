'use client';
import React, {useState, useEffect} from 'react';
import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import './page.css';  // Ensure this imports your CSS

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const {body} = document;
        if (darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <>
            <button
                className="dark-mode-button"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? '🌞' : '🌜'}
            </button>
            <HeroSection/>
            <AboutSection/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Education/>
        </>
    );
}
