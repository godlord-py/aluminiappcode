import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaVideo, FaUsers } from 'react-icons/fa';
import { BsCalendarEvent } from 'react-icons/bs';

interface Session {
  type: string;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const sessions: Session[] = [
  {
    type: 'Alumni Meetup',
    title: 'Networking Mixer',
    description: 'Connect with fellow alumni and expand your professional network.',
    date: 'June 15, 2024',
    icon: <FaUserFriends className="text-blue-500" />,
  },
  {
    type: 'Webinar',
    title: 'Industry Trends in Tech',
    description: 'Learn about the latest developments in the tech industry from expert speakers.',
    date: 'July 2, 2024',
    icon: <FaVideo className="text-green-500" />,
  },
  {
    type: 'Panel Discussion',
    title: 'Career Paths in Finance',
    description: 'Hear from successful alumni about various career paths in the finance sector.',
    date: 'July 20, 2024',
    icon: <FaUsers className="text-purple-500" />,
  },
];

const InteractionSessions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Interaction Sessions</h1>
      <p className="text-gray-600 mb-8">
        Participate in alumni meetups, webinars, and panel discussions to stay connected and grow your network.
      </p>
      
      <div className="space-y-6">
        {sessions.map((session, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500 transition duration-300 ease-in-out hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-3">{session.icon}</div>
              <div className="text-sm text-blue-600 font-semibold">{session.type}</div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{session.title}</h2>
            <p className="text-gray-600 mb-4">{session.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <BsCalendarEvent className="mr-2" />
              <span>{session.date}</span>
            </div>
          </div>
        ))}
      </div>
      
      <Link 
        to="/register" 
        className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Register for Sessions
      </Link>
    </div>
  );
};

export default InteractionSessions;