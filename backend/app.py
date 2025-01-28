from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

API_KEY = "YOUR_OPENWEATHER_API_KEY"
AIR_POLLUTION_API_URL = "http://api.openweathermap.org/data/2.5/air_pollution"

# Sample tree data (recommendations based on location)
tree_data = {
    "high_pollution": ["Oak", "Pine", "Maple", "Birch"],
    "low_pollution": ["Cedar", "Redwood", "Juniper"]
}

@app.route("/api/air_quality", methods=["GET"])
def get_air_quality():
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    
    if not lat or not lon:
        return jsonify({"error": "Missing latitude or longitude"}), 400
    
    response = requests.get(f"{AIR_POLLUTION_API_URL}?lat={lat}&lon={lon}&appid={API_KEY}")
    data = response.json()
    
    return jsonify(data)

@app.route("/api/tree_recommendations", methods=["GET"])
def get_tree_recommendations():
    location = request.args.get("location")
    
    # Simple logic to return trees based on pollution level
    recommended_trees = tree_data.get(location, [])
    
    return jsonify({"recommended_trees": recommended_trees})

if __name__ == "__main__":
    app.run(debug=True)
