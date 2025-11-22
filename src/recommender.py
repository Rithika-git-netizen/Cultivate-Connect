import pickle

# 1. LOAD THE SAVED MODEL
# It looks for the file in the SAME folder
MODEL_PATH = "crop_model.pkl"

try:
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)
    print("🌱 Crop Model Loaded Successfully in recommender.py!")
except Exception as e:
    print("❌ ERROR loading model:", e)
    model = None

# 2. THE PREDICTION FUNCTION
def predict_crop_logic(data):
    # Check if model is loaded
    if model is None:
        return {"error": "Model not loaded"}, 500

    try:
        # The order matters! It must match your training data
        inputs = [
            data["nitrogen"],
            data["phosphorus"],
            data["potassium"],
            data["temperature"],
            data["humidity"],
            data["ph"],
            data["rainfall"]
        ]

        prediction = model.predict([inputs])
        crop_name = prediction[0]

        return {"crop": crop_name, "success": True}, 200

    except Exception as e:
        return {"error": str(e)}, 400