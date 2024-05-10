import React, { useState } from 'react';

function App() {
  const initialFormData = {
    "Age": 65,
    "Gender": 1, // 1 for Male, 0 for Female
    "Total_Bilirubin": 0.7,
    "Direct_Bilirubin": 0.1,
    "Alkaline_Phosphotase": 187,
    "Alamine_Aminotransferase": 16,
    "Aspartate_Aminotransferase": 18,
    "Total_Protiens": 6.8,
    "Albumin": 3.3,
    "Albumin_and_Globulin_Ratio": 0.9
  };

  const [formData, setFormData] = useState(initialFormData);
  const [prediction, setPrediction] = useState(null);
const [loading, setLoading] = useState(false);
  const munnadata = [{
    "Age": parseInt(formData.Age),
    "Gender": formData.Gender,
    "Total_Bilirubin": parseFloat(formData.Total_Bilirubin),
    "Direct_Bilirubin": parseFloat(formData.Direct_Bilirubin),
    "Alkaline_Phosphotase": parseInt(formData.Alkaline_Phosphotase),
    "Alamine_Aminotransferase": parseInt(formData.Alamine_Aminotransferase),
    "Aspartate_Aminotransferase": parseInt(formData.Aspartate_Aminotransferase),
    "Total_Protiens": parseFloat(formData.Total_Protiens),
    "Albumin": parseFloat(formData.Albumin),
    "Albumin_and_Globulin_Ratio": parseFloat(formData.Albumin_and_Globulin_Ratio)
  }];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/predict6', {
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
    setFormData({ ...formData, [name]: name === 'Gender' ? parseInt(value) : value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md w-full">
        <h1 className="text-2xl font-bold mb-4">Health Prediction Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                {key !== 'Total' ? (
                  <>
                    {key === 'Gender' ? (
                      <>
                        <label className="block mb-1 font-semibold">{key}</label>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="gender-male"
                            name="Gender"
                            value={1}
                            checked={value === 1}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <label htmlFor="gender-male" className="mr-4">Male</label>
                          <input
                            type="radio"
                            id="gender-female"
                            name="Gender"
                            value={0}
                            checked={value === 0}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <label htmlFor="gender-female">Female</label>
                        </div>
                      </>
                    ) : (
                      <>
                        <label className="block mb-1 font-semibold">{key}</label>
                        <input
                          className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
                          type={typeof value === 'number' ? 'number' : 'text'}
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                        />
                      </>
                    )}
                  </>
                ) : null}
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
