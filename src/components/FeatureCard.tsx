import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ to, icon, title, description }) => (
    <Link to={to} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {icon}
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
    </Link>
);

export default FeatureCard;