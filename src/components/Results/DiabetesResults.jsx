import React from 'react';
import { diabetes } from '../../disease';
import { useParams } from 'react-router-dom';

const DiabetesResults = () => {
   const {id}=useParams();
    return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Diabetes Disease</h1>
      <div className="border border-gray-300 rounded p-4">
        <p className="text-gray-700 mb-4">{diabetes.description}</p>
       {id?<div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Symptoms:</h3>
          <ul className="list-disc list-inside">
            {Object.values(diabetes.symptoms).map((symptom, index) => (
              <li key={index} className="text-gray-700">{symptom}</li>
            ))}
          </ul>
        </div>:<></>}
        <div>
          <h3 className="text-lg font-semibold mb-2">Precautions:</h3>
          <ul className="list-disc list-inside">
            {Object.values(diabetes.precautions).map((precaution, index) => (
              <li key={index} className="text-gray-700">{precaution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiabetesResults;
