import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaHandshake, FaCalendarAlt, FaBriefcase, FaComments, FaRobot, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import FeatureCard from '/home/godlord/al/hack/src/components/FeatureCard';
import { ThemeContext } from "../context/theme"; // Import ThemeContext

const Home = () => {
    const { theme } = useContext(ThemeContext); // Access the current theme

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'dark' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-16">
                    <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Empowering Futures, Connecting Generations</h2>
                    <h1 className={`text-5xl font-bold mb-8 ${theme === 'dark' ? 'dark-text' : 'text-gray-800'}`}>
                        Interconnecting Alumni and Students
                    </h1>
                    <p className={`text-xl mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Welcome to the official platform of the Technical Education Department, Government of Rajasthan. 
                        Connect with alumni, seek mentorship, and build your professional network.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <FeatureCard 
                        to="/alumni-database" 
                        icon={<FaUserGraduate className="text-4xl mb-4 text-blue-500" />}
                        title="Alumni Database"
                        description="Access our comprehensive database of alumni profiles and achievements."
                    />
                    <FeatureCard 
                        to="/mentorship" 
                        icon={<FaHandshake className="text-4xl mb-4 text-green-500" />}
                        title="Mentorship Programs"
                        description="Connect with experienced alumni for guidance and career advice."
                    />
                    <FeatureCard 
                        to="/events" 
                        icon={<FaCalendarAlt className="text-4xl mb-4 text-purple-500" />}
                        title="Interaction Sessions"
                        description="Participate in alumni meetups, webinars, and panel discussions."
                    />
                    <FeatureCard 
                        to="/career-guidance" 
                        icon={<FaBriefcase className="text-4xl mb-4 text-red-500" />}
                        title="Career Guidance"
                        description="Get insights on various career paths and placement assistance."
                    />
                    <FeatureCard 
                        to="/forums" 
                        icon={<FaComments className="text-4xl mb-4 text-yellow-500" />}
                        title="Discussion Forums"
                        description="Engage in discussions on various topics with alumni and peers."
                    />
                    <FeatureCard 
                        to="/ai-assistant" 
                        icon={<FaRobot className="text-4xl mb-4 text-indigo-500" />}
                        title="AI Assistant"
                        description="Get instant answers to your questions from our AI-powered chatbot."
                    />
                </div>

                <section className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-8 mb-16`}>
                    <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-blue-600">10,000+</p>
                            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Registered Alumni</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-green-600">500+</p>
                            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Successful Placements</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-purple-600">1,000+</p>
                            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Mentorship Connections</p>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>What Our Alumni Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                "This platform has been instrumental in my career growth. The mentorship I received was invaluable."
                            </p>
                            <p className="font-semibold">- Priya Sharma, Software Engineer</p>
                        </div>
                        <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                "I've hired multiple talented graduates through this network. It's a great resource for both alumni and students."
                            </p>
                            <p className="font-semibold">- Rahul Gupta, CEO TechInnovate</p>
                        </div>
                    </div>
                </section>

                <section className={`${theme === 'dark' ? 'bg-blue-800' : 'bg-blue-600'} text-white p-8 rounded-lg mb-16`}>
                    <h2 className="text-3xl font-bold mb-4 text-center">Stay Connected</h2>
                    <p className="text-center mb-6">Sign up for our newsletter to get the latest updates and opportunities</p>
                    <form className="flex max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className={`px-4 py-2 w-full rounded-l ${theme === 'dark' ? 'text-gray-900' : 'text-gray-800'}`} 
                        />
                        <button 
                            type="submit" 
                            className={`bg-yellow-500 ${theme === 'dark' ? 'text-blue-900' : 'text-blue-900'} px-6 py-2 rounded-r hover:bg-yellow-400 transition duration-300`}
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex justify-center mt-6 space-x-4">
                        <a href="#" className="text-white hover:text-yellow-400 transition duration-300"><FaFacebookF size={24} /></a>
                        <a href="#" className="text-white hover:text-yellow-400 transition duration-300"><FaTwitter size={24} /></a>
                        <a href="#" className="text-white hover:text-yellow-400 transition duration-300"><FaLinkedinIn size={24} /></a>
                    </div>
                </section>
            </main>

            <footer className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white py-8`}>
                <div className="container mx-auto px-4 flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-300'}`}>
                            An initiative by the Technical Education Department, Government of Rajasthan, 
                            to foster connections between alumni and current students.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-blue-300 transition duration-300">About</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-300 transition duration-300">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="hover:text-blue-300 transition duration-300">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-300'}`}>Email: support@alumni-portal.in</p>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-300'}`}>Phone: +91-12345-67890</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-400">&copy; 2024 Alumni and Students Platform. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
