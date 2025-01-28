import React from 'react'

export default function AirInfo() {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg mb-8">
          {airQualityData ? (
            airQualityData.list && airQualityData.list[0] ? (
              <div>
                <h3 className="text-xl font-semibold">Air Quality Information</h3>
                <p><strong>Location:</strong> {selectedLocation ? `${selectedLocation.lat}, ${selectedLocation.lng}` : "Your Location"}</p>
                <p><strong>Air Quality Index (AQI):</strong> {airQualityData.list[0].main.aqi}</p>
                <div className="mt-4">
                  <p><strong>Pollutants:</strong></p>
                  <ul>
                    <li>CO: {airQualityData.list[0].components.co}</li>
                    <li>NO2: {airQualityData.list[0].components.no2}</li>
                    <li>O3: {airQualityData.list[0].components.o3}</li>
                  </ul>
                </div>
              </div>
            ) : (
              <p>No air quality data available</p>
            )
          ) : (
            <p>Loading air quality data...</p>
          )}
        </div>
  )
}
