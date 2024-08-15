import React from 'react';

interface AlumniCardProps {
  name: string;
  specialization: string;
  careerPath: string;
  currentStatus: string;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ name, specialization, careerPath, currentStatus }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">Specialization: {specialization}</p>
      <p className="text-gray-600">Career Path: {careerPath}</p>
      <p className="text-gray-600">Current Status: {currentStatus}</p>
    </div>
  );
};

export default AlumniCard;
