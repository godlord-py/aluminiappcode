import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-around text-white">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/alumni" className="hover:underline">Alumni</Link></li>
        <li><Link to="/mentor-program" className="hover:underline">Mentor Program</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
