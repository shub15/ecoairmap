import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-green-700 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">EcoVision</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-green-300">About</a>
            <a href="#features" className="hover:text-green-300">Features</a>
            <a href="#contact" className="hover:text-green-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-green-800 mb-4">
            Save the Planet, One Tree at a Time
          </h2>
          <p className="text-lg text-green-600 mb-6">
            Join us in our mission to make the Earth greener by promoting afforestation and sustainable practices.
          </p>
          <button className="bg-green-700 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-600 transition">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white w-full py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-6">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-green-700">Afforestation Analysis</h4>
              <p className="text-green-600 mt-2">
                Analyze satellite imagery to detect and monitor afforestation efforts.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-green-700">Sustainability Insights</h4>
              <p className="text-green-600 mt-2">
                Get actionable insights for improving environmental impact.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-green-700">Community Collaboration</h4>
              <p className="text-green-600 mt-2">
                Work together to create a greener future for the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-green-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 EcoVision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
