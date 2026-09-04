import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:py-0 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <p className=" h-18 w-18 lg:h-23 lg:w-23  rounded-t-4xl flex justify-center items-center text-3xl font-serif text-white ">
            <img
              src="/Ram.png"
              alt="Rambabu Kumar Logo"
              className="h-18 w-18 lg:h-23 lg:w-23 "
            />
          </p>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-lg">
          <li>
            <a
              href="#home"
              className="cursor-pointer hover:text-yellow-500cls
            "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="cursor-pointer hover:text-yellow-500cls
            "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="cursor-pointer hover:text-yellow-500cls
            "
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="cursor-pointer hover:text-yellow-500cls
            "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer hover:text-yellow-500cls
            "
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-green-800 text-white px-10 py-3 rounded-lg"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col font-bold  p-4 gap-5 text-lg ">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

          <li >
            <a
              href="/resume.pdf"
              target="_blank"
              className=" text-white px-5 py-2 rounded"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
