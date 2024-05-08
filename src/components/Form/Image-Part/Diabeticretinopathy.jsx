import React, { useState } from "react";
import axios from "axios";

const DiabeticRetinopathyForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
const [loading,setLoading] = useState(false);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict_diabetic_retinopathy",
        formData,
        { withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      setResponseMessage(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto mt-20">
    <h1 className="text-center text-3xl font-bold">Diabetic Retinopathy</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 15v20a2 2 0 002 2h28a2 2 0 002-2V15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 27l5-5m0 0l5 5m-5-5v9"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default DiabeticRetinopathyForm;
