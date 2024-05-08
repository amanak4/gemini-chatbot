import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Sex: '',
    "Chest pain type": '',
    BP: '',
    Cholesterol: '',
    "FBS over 120": '',
    "EKG results": '',
    "Max HR": '',
    "Exercise angina": '',
    "ST depression": '',
    "Slope of ST": '',
    "Number of vessels fluro": '',
    Thallium: '',
  });
  const [responseMessage, setResponseMessage] = useState("");
const [loading,setloading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const munnadata = [{
    Age: parseInt(formData.Age),
    Sex: parseInt(formData.Sex),
    "Chest pain type": parseInt(formData["Chest pain type"]),
    BP: parseInt(formData.BP),
    Cholesterol: parseInt(formData.Cholesterol),
    "FBS over 120": parseInt(formData["FBS over 120"]),
    "EKG results": parseInt(formData["EKG results"]),
    "Max HR": parseInt(formData["Max HR"]),
    "Exercise angina": parseInt(formData["Exercise angina"]),
    "ST depression": parseFloat(formData["ST depression"]),
    "Slope of ST": parseInt(formData["Slope of ST"]),
    "Number of vessels fluro": parseInt(formData["Number of vessels fluro"]),
    Thallium: parseInt(formData.Thallium),
  }];
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict1", munnadata, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setloading(false);
      setResponseMessage(response.data.prediction);
      toast.success(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Heart Disease Prediction</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={key}
              >
                {key}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-black"
                id={key}
                name={key}
                type="text"
                value={value}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
           {loading?<span>Loading...</span>:<span>Predict</span>}
          </button>
        </div>
      </form>
      {responseMessage && (
        <div className="mt-8 text-center">
          <h2 className="text-lg font-bold">Prediction Result:</h2>
          <p className="mt-2">{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default HeartDiseaseForm;
