import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.ensemble import RandomForestClassifier

from sklearn.metrics import accuracy_score

import pickle

import os



# ---------------------------------------------------------

# 1. LOAD THE DATA

# ---------------------------------------------------------

csv_filename = "data.csv"



# Check if the file exists before trying to load it

if not os.path.exists(csv_filename):

    print(f"❌ ERROR: '{csv_filename}' not found in this folder.")

    print("👉 Please download the dataset from Kaggle, rename it to 'data.csv', and put it here.")

    exit()



try:

    df = pd.read_csv(csv_filename)

    print(f"✅ Dataset loaded! Found {len(df)} rows.")

except Exception as e:

    print("❌ Error reading CSV:", e)

    exit()



# ---------------------------------------------------------

# 2. PREPARE THE DATA

# ---------------------------------------------------------

# These columns MUST match the Kaggle dataset headers exactly

required_columns = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']

target_column = 'label'



# Verify columns exist

if not all(col in df.columns for col in required_columns):

    print("❌ Error: Your CSV is missing some columns.")

    print(f"Expected: {required_columns}")

    print(f"Found: {list(df.columns)}")

    exit()



X = df[required_columns] # The inputs (Nitrogen, Phosphorus, etc.)

y = df[target_column]    # The answer (Rice, Maize, etc.)



# Split into Training (80%) and Testing (20%) parts

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



# ---------------------------------------------------------

# 3. TRAIN THE MODEL

# ---------------------------------------------------------

print("🧠 Training the AI model... (This may take a moment)")

# Random Forest is generally the best algorithm for this specific dataset

model = RandomForestClassifier(n_estimators=20, random_state=42)

model.fit(X_train, y_train)



# ---------------------------------------------------------

# 4. TEST ACCURACY

# ---------------------------------------------------------

predictions = model.predict(X_test)

accuracy = accuracy_score(y_test, predictions)

print(f"🎯 Model Accuracy: {accuracy * 100:.2f}%")



# ---------------------------------------------------------

# 5. SAVE THE FILE

# ---------------------------------------------------------

pkl_filename = "crop_model.pkl"

with open(pkl_filename, "wb") as f:

    pickle.dump(model, f)



print(f"💾 SUCCESS! Saved brain to '{pkl_filename}'")

print("🚀 You can now run 'python app.py'")