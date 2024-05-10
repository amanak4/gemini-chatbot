import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    AGE: 50,
    GENDER: 2,
    HEIGHT: 168,
    WEIGHT: 62,
    AP_HIGH: 110,
    AP_LOW: 80,
    CHOLESTEROL: 1,
    GLUCOSE: 1,
    SMOKE: 0,
    ALCOHOL: 0,
    PHYSICAL_ACTIVITY: 1
  });

  const munnadata = [{
    "AGE": parseInt(formData.AGE),
    "GENDER": formData.GENDER,
    "HEIGHT": parseInt(formData.HEIGHT),
    "WEIGHT": parseInt(formData.WEIGHT),
    "AP_HIGH": parseInt(formData.AP_HIGH),
    "AP_LOW": parseInt(formData.AP_LOW),
    "CHOLESTEROL": parseInt(formData.CHOLESTEROL),
    "GLUCOSE": parseInt(formData.GLUCOSE),
    "SMOKE": parseInt(formData.SMOKE),
    "ALCOHOL": parseInt(formData.ALCOHOL),
    "PHYSICAL_ACTIVITY": parseInt(formData.PHYSICAL_ACTIVITY)
  }];
  

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
   setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/predict3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(munnadata)
      });
      const data = await response.json();
      setPrediction(data.prediction[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md w-full">
        <h1 className="text-2xl font-bold mb-4">Health Prediction Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label className="block mb-1 font-semibold" htmlFor={key}>{key}</label>
                <input
                  className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
                  type={typeof value === 'number' ? 'number' : 'text'}
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200" type="submit">{loading ? <span>Loading...</span> : <span>Predict</span>}</button>
          </div>
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
