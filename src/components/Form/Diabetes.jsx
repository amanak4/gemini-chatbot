import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Form = () => {
  const [formData, setFormData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: ''
  });
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const munnadata = [{
    "Pregnancies": parseInt(formData.Pregnancies),
    "Glucose": parseInt(formData.Glucose),
    "BloodPressure": parseInt(formData.BloodPressure),
    "SkinThickness": parseInt(formData.SkinThickness),
    "Insulin": parseInt(formData.Insulin),
    "BMI": parseFloat(formData.BMI),
    "DiabetesPedigreeFunction": parseFloat(formData.DiabetesPedigreeFunction),
    "Age": parseInt(formData.Age)
  }];
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict2', munnadata, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setLoading(false);
      setPrediction(response.data.prediction);
      toast.success(response.data.prediction);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="mt-16 max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields for each feature */}
        {/* Example for 'Pregnancies' */}
        <div>
          <label className="block mb-1" htmlFor="pregnancies">Pregnancies:</label>
          <input type="number" name="Pregnancies" id="pregnancies" value={formData.Pregnancies} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="glucose">Glucose:</label>
          <input type="number" name="Glucose" id="glucose" value={formData.Glucose} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="bloodPressure">Blood Pressure:</label>
          <input type="number" name="BloodPressure" id="bloodPressure" value={formData.BloodPressure} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="skinThickness">Skin Thickness:</label>
          <input type="number" name="SkinThickness" id="skinThickness" value={formData.SkinThickness} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="insulin">Insulin:</label>
          <input type="number" name="Insulin" id="insulin" value={formData.Insulin} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="bmi">BMI:</label>
          <input type="number" name="BMI" id="bmi" value={formData.BMI} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="diabetesPedigreeFunction">Diabetes Pedigree Function:</label>
          <input type="number" name="DiabetesPedigreeFunction" id="diabetesPedigreeFunction" value={formData.DiabetesPedigreeFunction} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block mb-1" htmlFor="age">Age:</label>
          <input type="number" name="Age" id="age" value={formData.Age} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
        {/* Button for submitting form */}
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{loading ? <span>Loading....</span> : <span>Submit</span>}</button>
      </form>
      
      {/* Display prediction */}
      {prediction && <p className="mt-4">Prediction: {prediction}</p>}
    </div>
  );
};

export default Form;
