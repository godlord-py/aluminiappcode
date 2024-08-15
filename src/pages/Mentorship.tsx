import React, { useState } from 'react';
import { FaSearch, FaUserTie, FaBriefcase, FaGraduationCap, FaClock, FaEnvelope } from 'react-icons/fa';

const Mentorship = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('all');

    // Mock mentorship program data (replace with actual data from your backend)
    const mentorshipPrograms = [
        { id: 1, name: "Career Guidance Program", duration: "3 months", category: "Career Development" },
        { id: 2, name: "Tech Industry Insights", duration: "6 months", category: "Industry Specific" },
        { id: 3, name: "Entrepreneurship Mentoring", duration: "4 months", category: "Entrepreneurship" },
        { id: 4, name: "Graduate School Preparation", duration: "2 months", category: "Academic" },
    ];

    // Mock mentor data (replace with actual data from your backend)
    const mentors = [
        { id: 1, name: "Rajesh Kumar", role: "Senior Software Engineer", company: "Google", experience: "10 years", program: "Tech Industry Insights", image: "https://randomuser.me/api/portraits/men/4.jpg" },
        { id: 2, name: "Anita Desai", role: "Product Manager", company: "Amazon", experience: "8 years", program: "Career Guidance Program", image: "https://randomuser.me/api/portraits/women/4.jpg" },
        { id: 3, name: "Vikram Mehta", role: "Startup Founder", company: "TechNova", experience: "12 years", program: "Entrepreneurship Mentoring", image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { id: 4, name: "Priya Sharma", role: "Research Scientist", company: "ISRO", experience: "15 years", program: "Graduate School Preparation", image: "https://randomuser.me/api/portraits/women/5.jpg" },
        { id: 5, name: "Amit Patel", role: "Data Scientist", company: "Microsoft", experience: "7 years", program: "Tech Industry Insights", image: "https://randomuser.me/api/portraits/men/6.jpg" },
        { id: 6, name: "Sanya Reddy", role: "HR Manager", company: "Infosys", experience: "9 years", program: "Career Guidance Program", image: "https://randomuser.me/api/portraits/women/6.jpg" },
    ];

    const filteredMentors = mentors.filter(mentor => {
        return (
            (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             mentor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
             mentor.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedProgram === 'all' || mentor.program === selectedProgram)
        );
    });

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mentorship Programs</h1>
                
                <div className="mb-12 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Available Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {mentorshipPrograms.map((program) => (
                            <div key={program.id} className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition duration-300">
                                <h3 className="font-semibold text-lg mb-2">{program.name}</h3>
                                <p className="text-gray-600"><FaClock className="inline mr-2" />{program.duration}</p>
                                <p className="text-gray-600"><FaGraduationCap className="inline mr-2" />{program.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="relative w-full md:w-1/2">
                        <input 
                            type="text" 
                            placeholder="Search mentors by name, role, or company..." 
                            className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute right-3 top-3 text-gray-400" />
                    </div>
                    <select 
                        className="w-full md:w-auto py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                    >
                        <option value="all">All Programs</option>
                        {mentorshipPrograms.map((program) => (
                            <option key={program.id} value={program.name}>{program.name}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMentors.map((mentor) => (
                        <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img src={mentor.image} alt={mentor.name} className="w-16 h-16 rounded-full mr-4" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">{mentor.name}</h2>
                                        <p className="text-gray-600">{mentor.role}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="flex items-center text-gray-600">
                                        <FaBriefcase className="mr-2" /> {mentor.company}
                                    </p>
                                    <p className="flex items-center text-gray-600">
                                        <FaUserTie className="mr-2" /> {mentor.experience} of experience
                                    </p>
                                    <p className="flex items-center text-gray-600">
                                        <FaGraduationCap className="mr-2" /> {mentor.program}
                                    </p>
                                </div>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                                    <FaEnvelope className="mr-2" /> Request Mentorship
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredMentors.length === 0 && (
                    <p className="text-center text-gray-600 mt-8">No mentors found matching your search criteria.</p>
                )}

                <div className="mt-8 flex justify-center">
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                        Load More Mentors
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mentorship;