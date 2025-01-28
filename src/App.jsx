import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from './components/ThemeContext';
import { Outlet } from 'react-router';

function App() {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [treeRecommendations, setTreeRecommendations] = useState([]);

  useEffect(() => {
    // Auto-detect user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Error getting location", error);
          setLocation({ lat: 51.505, lon: -0.09 }); // Default to London if error occurs
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  const handleMapClick = (e) => {
    // Set the clicked position as selected location
    setSelectedLocation(e.latlng);
  };

  useEffect(() => {
    // Mock data for air quality and tree recommendations (this will be replaced by API calls)
    setAirQualityData({
      list: [{
        main: { aqi: 3 },
        components: { co: 0.1, no2: 0.02, o3: 0.03 }
      }]
    });

    setTreeRecommendations([
      "Tree 1: Suitable for high CO absorption",
      "Tree 2: Suitable for high NO2 absorption",
      "Tree 3: Suitable for high O3 absorption"
    ]);
  }, []);

  const mapCenter = selectedLocation || location;

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1  min-h-screen flex flex-col">
          {/* <Body /> */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
