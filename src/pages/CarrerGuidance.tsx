import React from 'react';
import { FaBriefcase, FaGraduationCap, FaHandshake, FaChartLine } from 'react-icons/fa';

interface GuidanceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const guidanceItems: GuidanceItem[] = [
  {
    title: 'Career Path Insights',
    description: 'Explore various career paths and get expert insights on industry trends.',
    icon: <FaBriefcase className="text-blue-500" />,
  },
  {
    title: 'Skill Development',
    description: 'Learn about key skills needed for your desired career and how to acquire them.',
    icon: <FaGraduationCap className="text-green-500" />,
  },
  {
    title: 'Placement Assistance',
    description: 'Get help with resume building, interview preparation, and job placements.',
    icon: <FaHandshake className="text-purple-500" />,
  },
  {
    title: 'Industry Analysis',
    description: 'Stay updated with the latest industry trends and market demands.',
    icon: <FaChartLine className="text-red-500" />,
  },
];

const CareerGuidance: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Career Guidance</h1>
      <p className="text-gray-600 mb-8">
        Get insights on various career paths and placement assistance to help you make informed decisions about your future.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidanceItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">{item.icon}</div>
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="#schedule-consultation" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
};

export default CareerGuidance;