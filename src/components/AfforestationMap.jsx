import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const AfforestationMap = () => {
  const [userLocation, setUserLocation] = useState({ lat: 20.5937, lng: 78.9629 });
  const [afforestationData, setAfforestationData] = useState(null);

  useEffect(() => {
    // Fetch user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        // Fetch afforestation data from backend
        axios
          .get(`http://localhost:5000/get-afforestation-data?lat=${latitude}&lon=${longitude}`)
          .then((response) => setAfforestationData(response.data))
          .catch((error) => console.error("Error fetching data:", error));
      });
    }
  }, []);

  return (
    <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={12} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {afforestationData &&
        afforestationData.potential_areas.map((area, index) => (
          <Circle
            key={index}
            center={[area.lat, area.lon]}
            radius={500}
            pathOptions={{
              color: "red",
              fillColor: "red",
              fillOpacity: 0.5,
            }}
          >
            <Popup>
              <h2>Potential Afforestation Area</h2>
              <p>Land Use: {area.land_use}</p>
              <p>Pollution Level: {area.pollution_level}</p>
            </Popup>
          </Circle>
        ))}
    </MapContainer>
  );
};

export default AfforestationMap;
