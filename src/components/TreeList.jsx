import React from "react";
import { useTheme } from "./ThemeContext";

const TreeList = () => {
  const { darkMode } = useTheme();

  const trees = [
    {
      name: "Neem Tree",
      benefits: "Purifies air, provides shade, and has medicinal properties.",
      idealLocation: "Urban areas, roadsides, parks."
    },
    {
      name: "Banyan Tree",
      benefits: "Supports biodiversity, provides shade, and prevents soil erosion.",
      idealLocation: "Large open spaces, community areas."
    },
    {
      name: "Peepal Tree",
      benefits: "Purifies air, provides shade, and supports bird life.",
      idealLocation: "Temples, parks, rural areas."
    },
    {
      name: "Mango Tree",
      benefits: "Provides fruits, supports wildlife, and offers shade.",
      idealLocation: "Orchards, gardens, open fields."
    },
    {
      name: "Gulmohar Tree",
      benefits: "Adds aesthetic beauty, provides shade, and prevents soil erosion.",
      idealLocation: "Urban areas, gardens, and roadsides."
    }
  ];

  return (
    <div className={`min-h-screen px-4 py-8 ${darkMode ? "bg-gray-900 text-white" : "bg-green-100 text-gray-900"}`}>
      <h1 className="text-3xl font-bold text-center mb-6">Tree Planting Recommendations</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trees.map((tree, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md transition ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <h2 className="text-xl font-semibold mb-2">{tree.name}</h2>
            <p className="mb-2"><strong>Benefits:</strong> {tree.benefits}</p>
            <p><strong>Ideal Location:</strong> {tree.idealLocation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeList;
