import React from "react";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router";
import Logo from "../assets/tree.svg"

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className={`w-full ${darkMode ? "bg-gray-800" : "bg-green-950"} text-white py-4 shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <h1 className="text-3xl font-bold hidden md:block">EcoVision</h1>
          <img src={Logo} className="size-10 ml-[9.5%] absolute" alt="" srcset="" />
        </Link>
        <nav className="hidden md:block space-x-6">
          <Link to="/about" className="hover:text-green-300">About</Link>
          <Link to="/" className="hover:text-green-300">Features</Link>
          <Link to="/about" className="hover:text-green-300">Contact</Link>
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 rounded-full shadow-md bg-white text-gray-900 hover:bg-gray-300 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
