// src/components/Header.jsx
import React from 'react';

const Logo = () => (
  <div className="flex items-center space-x-3">
    <img src="/logo.png" alt="Rudradev Enterprises Logo" className="h-11 object-contain" /> 
    <div>
      <div className="font-extrabold text-text-dark">Rudradev Enterprises</div>
      <div className="text-sm text-text-muted">Epoxy & Industrial Flooring — Mumbai</div>
    </div>
  </div>
);

const Header = () => {
  return (
    // Background is white, text and accent colors are updated
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="flex items-center space-x-3 lg:space-x-5">
            <a 
              href="tel:+919167620398" 
              className="text-sm text-text-muted hover:text-accent-blue transition duration-200 hidden sm:inline-block"
            >
              📞 +91 91676 20398
            </a>
            
            {/* CTA Button uses the new accent-blue */}
            <a 
              href="#contact" 
              className="bg-accent-blue hover:bg-[#08557e] text-black font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;