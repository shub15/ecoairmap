from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Your existing code for air quality and afforestation data
@app.route('/get-afforestation-data', methods=['GET'])
def get_afforestation_data():
    lat = float(request.args.get('lat'))
    lon = float(request.args.get('lon'))

    # Fetch air quality data
    API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"
    url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API_KEY}"
    response = requests.get(url)
    air_quality = response.json()

    # Mocking potential areas
    potential_areas = [
        {"lat": lat + 0.01, "lon": lon + 0.01, "land_use": "barren", "pollution_level": 90},
        {"lat": lat - 0.01, "lon": lon - 0.01, "land_use": "urban", "pollution_level": 70},
        {"lat": lat + 0.02, "lon": lon - 0.02, "land_use": "barren", "pollution_level": 80},
    ]
    potential_areas = [area for area in potential_areas if area["land_use"] == "barren" and area["pollution_level"] > 80]

    return jsonify({
        "air_quality": air_quality,
        "potential_areas": potential_areas
    })

if __name__ == '__main__':
    app.run(debug=True)
