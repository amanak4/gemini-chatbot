import React, { useState } from 'react';

function App() {
  const initialFormData = {
    "Glucose": 0.944893,
    "Cholesterol": 0.905372,
    "Hemoglobin": 0.507711,
    "Platelets": 0.403033,
    "White Blood Cells": 0.164216,
    "Red Blood Cells": 0.307553,
    "Mean Corpuscular Volume": 0.207938,
    "Mean Corpuscular Hemoglobin": 0.50556,
    "Mean Corpuscular Hemoglobin Concentration": 0.85681,
    "Insulin": 0.652465,
    "BMI": 0.106961,
    "Systolic Blood Pressure": 0.942549,
    "Diastolic Blood Pressure": 0.344261,
    "Triglycerides": 0.666368,
    "LDL Cholesterol": 0.65906,
    "HDL Cholesterol": 0.816982,
    "Heart Rate": 0.401166
  };

  const [formData, setFormData] = useState(initialFormData);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const munnadata = [{
    "Glucose": parseFloat(formData["Glucose"]),
    "Cholesterol": parseFloat(formData["Cholesterol"]),
    "Hemoglobin": parseFloat(formData["Hemoglobin"]),
    "Platelets": parseFloat(formData["Platelets"]),
    "White Blood Cells": parseFloat(formData["White Blood Cells"]),
    "Red Blood Cells": parseFloat(formData["Red Blood Cells"]),
    "Mean Corpuscular Volume": parseFloat(formData["Mean Corpuscular Volume"]),
    "Mean Corpuscular Hemoglobin": parseFloat(formData["Mean Corpuscular Hemoglobin"]),
    "Mean Corpuscular Hemoglobin Concentration": parseFloat(formData["Mean Corpuscular Hemoglobin Concentration"]),
    "Insulin": parseFloat(formData["Insulin"]),
    "BMI": parseFloat(formData["BMI"]),
    "Systolic Blood Pressure": parseFloat(formData["Systolic Blood Pressure"]),
    "Diastolic Blood Pressure": parseFloat(formData["Diastolic Blood Pressure"]),
    "Triglycerides": parseFloat(formData["Triglycerides"]),
    "LDL Cholesterol": parseFloat(formData["LDL Cholesterol"]),
    "HDL Cholesterol": parseFloat(formData["HDL Cholesterol"]),
    "Heart Rate": parseFloat(formData["Heart Rate"])
  }];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/predict4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(munnadata)
      });
      const data = await response.json();
      setLoading(false);
      setPrediction(data.prediction[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden mt-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md w-full">
        <h1 className="text-2xl font-bold mb-4">Health Prediction Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="border border-gray-300 rounded p-2">
              <label className="block mb-1 font-semibold">{key}</label>
              <input
                className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
                type="number"
                id={key}
                name={key}
                value={value}
                step="any"
                onChange={handleInputChange}
              />
            </div>
          ))}
          <button className="col-span-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200" type="submit">{loading ? <span>Loading...</span> : <span>Predict</span>}</button>
        </form>
        {prediction !== null && (
          <div className="mt-4">
            <p className="font-semibold">Prediction:</p>
            <p>{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
