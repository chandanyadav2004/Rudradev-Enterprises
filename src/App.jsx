// src/App.jsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'; // Import the new component
import AppreciationSection from './components/AppreciationSection';
import FeaturedProducts from './components/FeaturedProducts';
import AboutFAQSection from './components/AboutFAQSection';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header component (from previous step) */}
      <Header /> 
      <main>
        {/* Hero Section component (from previous step) */}
        <HeroSection /> 
        
        {/* The new About/What We Can Offer Section */}
        <AboutSection />
        
        {/* Other sections of your homepage would go here */}
        <AppreciationSection />

        <FeaturedProducts />

        <AboutFAQSection />
        <ContactPage />

        <Footer />
      </main>
    </div>
  );
}

export default App;