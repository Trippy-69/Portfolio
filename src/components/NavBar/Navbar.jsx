import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

function Navbar() {
  const [menu, setMenu] = useState(false); // State to control menu visibility

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="flex justify-between items-center text-white px-10 pt-6 md:px-20">
      {/* Logo */}
      <a href="#home">
        <span className="text-xl font-bold tracking-wide">Portfolio</span>
      </a>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            onClick={() => setMenu(false)} // Close menu
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            onClick={() => setMenu(true)} // Open menu
          />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menu
            ? 'fixed inset-0 flex flex-col justify-center items-center bg-black/30 backdrop-blur-sm z-50'
            : 'hidden'
        } md:flex md:static md:flex-row md:bg-transparent md:gap-6 text-center font-semibold transition-all duration-300`}
      >
        {/* Close Button (Mobile Only) */}
        <div className="absolute top-6 right-10 md:hidden">
          <RiCloseLine
            size={30}
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            onClick={() => setMenu(false)} // Close menu
          />
        </div>

        {/* Scroll Links - Use smoothScrollTo function */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('about');
            setMenu(false);
          }}
        >
          <li className="text-md transition-all duration-300 p-4 md:p-0 hover:text-cyan-400">About</li>
        </a>
        <a
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('experience');
            setMenu(false);
          }}
        >
          <li className="text-md transition-all duration-300 p-4 md:p-0 hover:text-cyan-400">Experience</li>
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('projects');
            setMenu(false);
          }}
        >
          <li className="text-md transition-all duration-300 p-4 md:p-0 hover:text-cyan-400">Projects</li>
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('contact');
            setMenu(false);
          }}
        >
          <li className="text-md transition-all duration-300 p-4 md:p-0 hover:text-cyan-400">Contact</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
