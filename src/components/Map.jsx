import React, { useEffect, useState } from 'react';
import L from 'leaflet';  // Leaflet library
import 'leaflet/dist/leaflet.css';  // Leaflet CSS

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Default location (e.g., New Delhi, India)
  const defaultLat = 28.6139;
  const defaultLon = 77.2090;

  useEffect(() => {
    // Initialize map
    const map = L.map('map', {
      center: [defaultLat, defaultLon],
      zoom: 13,
    });

    // Tile Layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Check for geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      displayErrorMessage('Geolocation is not supported by this browser.');
    }

    // Success callback: update the map to user's location
    function successCallback(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setUserLocation({ latitude, longitude });
      updateMapLocation(map, latitude, longitude);
    }

    // Error callback: handle geolocation errors
    function errorCallback(error) {
      console.error('Error getting location: ', error);
      displayErrorMessage('Unable to retrieve your location. Showing default location instead.');
    }

    // Update the map with user's location
    function updateMapLocation(map, latitude, longitude) {
      map.setView([latitude, longitude], 13);
      L.marker([latitude, longitude]).addTo(map).bindPopup('You are here!').openPopup();
    }

    // Show error message if geolocation fails
    function displayErrorMessage(message) {
      setErrorMessage(message);
      updateMapLocation(map, defaultLat, defaultLon);  // Fallback to default location
    }

    return () => {
      // Cleanup the map when the component is unmounted
      map.remove();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="relative w-full h-full mb-4">
        {/* Error message */}
        {errorMessage && (
          <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2 rounded-t-lg">
            {errorMessage}
          </div>
        )}
        
        {/* Map container */}
        <div id="map" className="w-full h-full rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default Map;
