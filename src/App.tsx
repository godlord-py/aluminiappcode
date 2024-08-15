import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/home/godlord/al/hack/src/pages/HomePage';
import Alumni from '/home/godlord/al/hack/src/pages/Alumini';
import Mentorship from './pages/Mentorship';
import DiscussionForum from './pages/Forum';
import AIAssistant from './pages/AIbot';
import AlumniDatabase from './pages/AlumDatabase';
import InteractionSessions from './pages/sessions';
import CareerGuidance from './pages/CarrerGuidance';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Navbar from '/home/godlord/al/hack/src/layouts/NavBar'; 
import { ThemeContext } from './context/theme';

const App = () => {
  const { theme } = useContext(ThemeContext);
    return (
      <div
      className={`h-screen w-full mx-auto py-2  ${
        theme === 'dark' ? 'dark' : '' 
      }`}
    >
      <PrimeReactProvider>
        <Router>
          <div className="app">
            <Navbar /> 
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/mentorship" element={<Mentorship />} />
                <Route path="/events" element={<InteractionSessions  />} />
                <Route path='/forums' element={<DiscussionForum />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/alumni-database" element={<AlumniDatabase />} />
                <Route path="/interaction-sessions" element={<InteractionSessions />} />
                <Route path="/career-guidance" element={<CareerGuidance />} />
              </Routes>
            </div>
          </div>
        </Router>
      </PrimeReactProvider>
      </div>
    );
};

export default App;