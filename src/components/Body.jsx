import React from 'react'
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { Link } from 'react-router';

export default function Body() {
  const { darkMode } = useTheme();
  return (
    <>
      <section className={`flex-1 flex flex-col justify-center items-center text-center py-16 md:px-4 ${darkMode ? "bg-gray-900 text-white" : "bg-green-100 text-gray-900"}`}>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            Save the Planet, One Tree at a Time
          </h2>
          <p className="text-lg mb-6">
            Join us in our mission to make the Earth greener by promoting afforestation and sustainable practices.
          </p>
          <Link to="/map">
            <button className={`px-6 py-3 rounded-2xl shadow-md transition cursor-pointer ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-green-700 text-white hover:bg-green-600"}`}>
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-green-50"}`}>
              <h4 className="text-xl font-semibold">Afforestation Analysis</h4>
              <p className="mt-2">
                Analyze satellite imagery to detect and monitor afforestation efforts.
              </p>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-green-50"}`}>
              <h4 className="text-xl font-semibold">Sustainability Insights</h4>
              <p className="mt-2">
                Get actionable insights for improving environmental impact.
              </p>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-green-50"}`}>
              <h4 className="text-xl font-semibold">Community Collaboration</h4>
              <p className="mt-2">
                Work together to create a greener future for the planet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
