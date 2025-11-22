from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd
import requests
import os
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# ---------------------------
# Load trained crop model
# ---------------------------
MODEL_FILE = "crop_model.pkl"

if os.path.exists(MODEL_FILE):
    with open(MODEL_FILE, "rb") as f:
        crop_model = pickle.load(f)
    print("🌱 Crop model loaded successfully")
else:
    print("❌ ERROR: crop_model.pkl not found in folder")
    crop_model = None

# ---------------------------
# Open-Meteo API for weather
# ---------------------------
OPEN_METEO_URL = "https://api.open-meteo.com/v1/forecast"
WEATHER_VARIABLES = ["temperature_2m_mean", "precipitation_sum"]


def get_today_weather(lat, lon):
    """Fetch today's weather from Open-Meteo"""
    
    params = {
        "latitude": lat,
        "longitude": lon,
        "daily": ",".join(WEATHER_VARIABLES),
        "forecast_days": 1,
        "timezone": "auto"
    }

    r = requests.get(OPEN_METEO_URL, params=params)
    data = r.json()

    today = {
        "temperature": data["daily"]["temperature_2m_mean"][0],
        "rainfall": data["daily"]["precipitation_sum"][0],
        "humidity": 70  # Humidity not in Open-Meteo → set to avg
    }

    return today

# ---------------------------
# API: Auto weather + crop recommendation
# ---------------------------
@app.route("/recommend_auto", methods=["POST"])
def recommend_auto():
    if crop_model is None:
        return jsonify({"error": "Model not loaded"}), 500

    try:
        data = request.get_json()

        # ---- User inputs (soil values only) ----
        N = data["nitrogen"]
        P = data["phosphorus"]
        K = data["potassium"]
        ph = data["ph"]

        lat = data["lat"]
        lon = data["lon"]

        # ---- Fetch today’s weather ----
        weather = get_today_weather(lat, lon)

        temperature = weather["temperature"]
        humidity = weather["humidity"]
        rainfall = weather["rainfall"]

        # ---- Prepare final feature vector ----
        features = [
            float(N), float(P), float(K),
            float(temperature), float(humidity),
            float(ph), float(rainfall)
        ]

        # ---- Predict crop ----
        pred = crop_model.predict([features])
        crop_name = pred[0]

        return jsonify({
            "crop": crop_name,
            "weather_used": weather,
            "inputs_used": {
                "N": N, "P": P, "K": K,
                "ph": ph
            }
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# ---------------------------
# Home Test Route
# ---------------------------
@app.route("/")
def home():
    return jsonify({
        "message": "Crop + Auto Weather Backend Running",
        "auto_recommend": "/recommend_auto (POST)"
    })


if __name__ == "__main__":
    app.run(port=8000, debug=True)