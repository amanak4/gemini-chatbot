import React from 'react';
import { blood_test } from '../../disease';
import { useParams } from 'react-router-dom';

const BloodTestResults = () => {
  const { id } = useParams();
  const diseaseInfo = blood_test[id]; 
  console.log("id", id);

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">{id}</h1>
      <div className="border border-gray-300 rounded p-4">
        <p className="text-gray-700 mb-4">{diseaseInfo.description}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Symptoms:</h3>
          <ul className="list-disc list-inside">
            {Object.values(diseaseInfo.symptoms).map((symptom, index) => (
              <li key={index} className="text-gray-700">{symptom}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Precautions:</h3>
          <ul className="list-disc list-inside">
            {Object.values(diseaseInfo.precautions).map((precaution, index) => (
              <li key={index} className="text-gray-700">{precaution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BloodTestResults;
