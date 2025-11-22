import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; 

const CropAdvisor = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  
  // Form State
  const [formData, setFormData] = useState({
    ph: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    rainfall: ''
  });

  // Load history on startup
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('recommendations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setHistory(data);
    } catch (err) {
      console.log("Supabase not ready yet.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      // 1. Get Prediction from Python Backend
      // Python expects keys like 'nitrogen', 'phosphorus', etc.
      const response = await fetch("http://127.0.0.1:8000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nitrogen: Number(formData.nitrogen),
          phosphorus: Number(formData.phosphorus),
          potassium: Number(formData.potassium),
          temperature: Number(formData.temperature),
          humidity: Number(formData.humidity),
          ph: Number(formData.ph),
          rainfall: Number(formData.rainfall),
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // 2. Show Result
      setResult(data.crop);

      // 3. SAVE TO SUPABASE
      // Supabase expects keys like 'n_input', 'p_input' based on your SQL table
      const dbData = {
        ph_input: Number(formData.ph),
        n_input: Number(formData.nitrogen),
        p_input: Number(formData.phosphorus),
        k_input: Number(formData.potassium),
        temp_input: Number(formData.temperature),
        humidity_input: Number(formData.humidity),
        rainfall_input: Number(formData.rainfall),
        recommended_crop: data.crop
      };

      const { error } = await supabase.from('recommendations').insert([dbData]);

      if (error) {
        console.error("Supabase Insert Error:", error);
      } else {
        fetchHistory(); // Refresh the list if save was successful
      }

    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Main Form */}
      <div className="lg:col-span-2 animate-fade-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Enter Field Data</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div className="bg-amber-50 -mx-6 -mt-6 px-6 py-3 border-b border-amber-100 mb-4">
               <h3 className="text-lg font-bold text-amber-800">1. Soil Nutrients</h3>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <InputGroup label="pH Level" name="ph" value={formData.ph} onChange={handleChange} placeholder="0-14" />
                <InputGroup label="Nitrogen" name="nitrogen" value={formData.nitrogen} onChange={handleChange} placeholder="0-100" />
                <InputGroup label="Phosphorus" name="phosphorus" value={formData.phosphorus} onChange={handleChange} placeholder="0-100" />
                <InputGroup label="Potassium" name="potassium" value={formData.potassium} onChange={handleChange} placeholder="0-100" />
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div className="bg-blue-50 -mx-6 -mt-6 px-6 py-3 border-b border-blue-100 mb-4">
               <h3 className="text-lg font-bold text-blue-800">2. Weather Conditions</h3>
             </div>
             <div className="grid grid-cols-3 gap-4">
                <InputGroup label="Temp (°C)" name="temperature" value={formData.temperature} onChange={handleChange} />
                <InputGroup label="Humidity (%)" name="humidity" value={formData.humidity} onChange={handleChange} />
                <InputGroup label="Rainfall (mm)" name="rainfall" value={formData.rainfall} onChange={handleChange} />
             </div>
          </div>

          <button 
            disabled={loading} 
            className={`w-full text-white py-4 rounded-xl font-bold transition shadow-lg text-lg ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? 'Analyzing Soil...' : 'Get Crop Recommendation'}
          </button>
        </form>

        {/* Result Display */}
        {result && (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-md mt-6 flex justify-between items-center animate-fade-in">
            <div>
              <p className="text-sm font-bold text-green-600 uppercase">Recommended Crop</p>
              <h3 className="text-4xl font-extrabold text-gray-800 mt-1 uppercase">{result}</h3>
            </div>
            <div className="text-green-600 text-5xl">
              <span>✅</span>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar History */}
      <div className="lg:col-span-1 animate-fade-up">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Your History</h3>
          
          {history.length === 0 ? (
            <p className="text-gray-400 text-sm italic">No recommendations yet.</p>
          ) : (
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {history.map((item, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex justify-between items-center">
                  <span className="font-bold text-green-700 uppercase">{item.recommended_crop}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

// Reusable Input Component
const InputGroup = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input 
      type="number" 
      step="0.1" 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      required
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" 
    />
  </div>
);

export default CropAdvisor;