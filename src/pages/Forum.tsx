import React, { useState } from 'react';
import { FaSearch, FaPlus, FaComment, FaUser, FaThumbsUp } from 'react-icons/fa';

const DiscussionForum = () => {
    const [topics, setTopics] = useState([
        { id: 1, title: "Career opportunities in AI and Machine Learning", author: "Priya Sharma", comments: 15, likes: 24, tags: ["AI", "Career"] },
        { id: 2, title: "Tips for cracking technical interviews", author: "Rahul Gupta", comments: 28, likes: 36, tags: ["Interviews", "Career"] },
        { id: 3, title: "The future of robotics in manufacturing", author: "Amit Patel", comments: 10, likes: 18, tags: ["Robotics", "Industry"] },
        { id: 4, title: "Cybersecurity challenges in 2024", author: "Neha Singh", comments: 22, likes: 30, tags: ["Cybersecurity", "Technology"] },
    ]);

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Discussion Forum</h1>
                
                <div className="mb-8 flex justify-between items-center">
                    <div className="relative w-2/3">
                        <input 
                            type="text" 
                            placeholder="Search topics..." 
                            className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute right-3 top-3 text-gray-400" />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center">
                        <FaPlus className="mr-2" /> New Topic
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {topics.map((topic) => (
                        <div key={topic.id} className="p-6 border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                            <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800 cursor-pointer">
                                {topic.title}
                            </h2>
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <FaUser className="mr-2" /> {topic.author}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-4">
                                    <span className="flex items-center text-gray-600">
                                        <FaComment className="mr-1" /> {topic.comments}
                                    </span>
                                    <span className="flex items-center text-gray-600">
                                        <FaThumbsUp className="mr-1" /> {topic.likes}
                                    </span>
                                </div>
                                <div className="space-x-2">
                                    {topic.tags.map((tag, index) => (
                                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                        Load More Topics
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscussionForum;