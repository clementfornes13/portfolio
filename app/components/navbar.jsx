// @flow strict
'use client';
import React from "react";

function Navbar() {
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="/"
            className="text-[#16f2b3] text-3xl font-bold"
          >
            CLEMENT FORNES
          </a>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a
              href="#about"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={(e) => handleNavLinkClick(e, "about")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={(e) => handleNavLinkClick(e, "experience")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={(e) => handleNavLinkClick(e, "skills")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={(e) => handleNavLinkClick(e, "education")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={(e) => handleNavLinkClick(e, "projects")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
