import React, { useState } from 'react';
import { FaSearch, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const AlumniDatabase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const alumniData = [
        { id: 1, name: "Krutika Navghare", graduationYear: 2018, degree: "B.Tech in Computer Science", company: "Google", location: "Bangalore", image: "https://randomuser.me/api/portraits/women/1.jpg" },
        { id: 2, name: "GODLORD", graduationYear: 2015, degree: "M.Tech in Electrical Engineering", company: "Tata Consultancy Services", location: "Mumbai", image: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 3, name: "KArtik Prayagi", graduationYear: 2020, degree: "B.Tech in Mechanical Engineering", company: "Larsen & Toubro", location: "Delhi", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { id: 4, name: "Tushar Wankhede", graduationYear: 2017, degree: "B.Tech in Electronics", company: "Infosys", location: "Pune", image: "https://randomuser.me/api/portraits/men/2.jpg" },
        { id: 5, name: "Manasvi Gangamwar", graduationYear: 2019, degree: "M.Tech in Data Science", company: "Microsoft", location: "Hyderabad", image: "https://randomuser.me/api/portraits/women/3.jpg" },
        { id: 6, name: "Akhilesh Sirsikar", graduationYear: 2016, degree: "B.Tech in Civil Engineering", company: "Shapoorji Pallonji", location: "Chennai", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    ];

    const filteredAlumni = alumniData.filter(alumni => {
        return (
            (alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             alumni.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (filter === 'all' || alumni.graduationYear.toString() === filter)
        );
    });

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Alumni Database</h1>
                
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="relative w-full md:w-1/2">
                        <input 
                            type="text" 
                            placeholder="Search alumni by name or company..." 
                            className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute right-3 top-3 text-gray-400" />
                    </div>
                    <select 
                        className="w-full md:w-auto py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All Years</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAlumni.map((alumni) => (
                        <div key={alumni.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img src={alumni.image} alt={alumni.name} className="w-16 h-16 rounded-full mr-4" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">{alumni.name}</h2>
                                        <p className="text-gray-600">{alumni.degree}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="flex items-center text-gray-600">
                                        <FaGraduationCap className="mr-2" /> {alumni.graduationYear}
                                    </p>
                                    <p className="flex items-center text-gray-600">
                                        <FaBriefcase className="mr-2" /> {alumni.company}
                                    </p>
                                    <p className="flex items-center text-gray-600">
                                        <FaMapMarkerAlt className="mr-2" /> {alumni.location}
                                    </p>
                                </div>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                                    <FaLinkedin className="mr-2" /> Connect on LinkedIn
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredAlumni.length === 0 && (
                    <p className="text-center text-gray-600 mt-8">No alumni found matching your search criteria.</p>
                )}

                <div className="mt-8 flex justify-center">
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                        Load More Alumni
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlumniDatabase;