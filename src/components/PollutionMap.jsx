import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PollutionMap = () => {
  const [userLocation, setUserLocation] = useState({ lat: 20.5937, lng: 78.9629 }); // Default: India
  const [mapZoom, setMapZoom] = useState(5); // Default zoom level
  const [mapReady, setMapReady] = useState(false); // To load the map only after location is fetched

  // Example pollution data (can be replaced with API data)
  const pollutionData = [
    { lat: 28.7041, lng: 77.1025, level: 90 }, // Delhi
    { lat: 19.076, lng: 72.8777, level: 80 }, // Mumbai
    { lat: 13.0827, lng: 80.2707, level: 70 }, // Chennai
    { lat: 22.5726, lng: 88.3639, level: 60 }, // Kolkata
  ];

  // Fetch user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setMapZoom(12); // Zoom in to show a detailed view of the user's location
          setMapReady(true); // Map is ready to display
        },
        (error) => {
          console.error("Error fetching user location:", error);
          setMapReady(true); // Still load the map with default location
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setMapReady(true);
    }
  }, []);

  // Determine circle color based on pollution level
  const getColor = (level) => {
    if (level > 80) return "red";
    if (level > 60) return "orange";
    if (level > 40) return "yellow";
    return "green";
  };

  return (
    mapReady && (
      <MapContainer
        center={[userLocation.lat, userLocation.lng]} // Center on user's location
        zoom={mapZoom} // Start with zoomed-in view
        style={{ height: "100vh", width: "100%" }}
        className=""
      >
        {/* Light (white) map theme */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Pollution Data */}
        {/* {pollutionData.map((data, index) => (
          <Circle
            key={index}
            center={[data.lat, data.lng]}
            radius={data.level * 500} // Radius scales with pollution level
            pathOptions={{
              color: getColor(data.level),
              fillColor: getColor(data.level),
              fillOpacity: 0.5,
            }}
          >
            <Popup>
              <div>
                <h2>Pollution Level: {data.level}</h2>
                <p>Location: {`[${data.lat}, ${data.lng}]`}</p>
              </div>
            </Popup>
          </Circle>
        ))} */}

        {/* User Location Marker */}  
        <Circle
          center={[userLocation.lat, userLocation.lng]}
          radius={300}
          pathOptions={{
            color: "blue",
            fillColor: "blue",
            fillOpacity: 0.4,
          }}
        >
          <Popup>
            <h2>Your Location</h2>
            <p>{`[${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}]`}</p>
          </Popup>
        </Circle>
      </MapContainer>
    )
  );
};

export default PollutionMap;
