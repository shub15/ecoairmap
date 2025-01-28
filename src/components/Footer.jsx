import React from "react";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router";

const Footer = () => {
    const { darkMode } = useTheme();

    return (
        <footer className={`w-full py-4 text-white ${darkMode ? "bg-gray-800" : "bg-green-950"}`}>
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2025 EcoVision. All rights reserved.</p>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1">
                            <Link
                                to="/about"
                                className="text-while hover:text-green-300"
                            // target="_blank"
                            >
                                {" "}
                                Sahil Doshi, Shubham Maity, Vatsal Umrania, Malaika Jadav
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
