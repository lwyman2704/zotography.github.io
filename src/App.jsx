import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import Background from './Components/Background/background.jsx';
import Services from './Components/Services/services.jsx';
import About from './Components/About/about.jsx';
import Gallery from './Components/Gallery/gallery.jsx';
import Contact from './Components/Contact/contact.jsx';
import BookingForm from './Components/Booking/BookingForm.jsx';
import './App.css';

const AppContent = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const heroData = [
        { text1: "Welcome to", text2: "ZoTography" },
        { text1: "Your Moments", text2: "Captured" },
        { text1: "Your Ideas", text2: "Imagined" },
        { text1: "Your Story", text2: "Envisioned" },
        { text1: "Your Story", text2: "By You, from You" },
        { text1: "Experience", text2: "ZoTography" },
    ];
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    // This useEffect now runs continuously on all pages, rotating the background
    useEffect(() => {
        const interval = setInterval(() => {
            setHeroCount(count => (count === heroData.length - 1 ? 0 : count + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [heroData.length]);

    return (
        <>
            <Background playStatus={playStatus} heroCount={heroCount} isHomePage={isHomePage} />
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        isHomePage ? (
                            <Hero
                                setPlayStatus={setPlayStatus}
                                heroData={heroData[heroCount]}
                                heroCount={heroCount}
                                setHeroCount={setHeroCount}
                                playStatus={playStatus}
                            />
                        ) : null
                    }
                />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book/:serviceType" element={<BookingForm />} />
            </Routes>
        </>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;