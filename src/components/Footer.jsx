import React from 'react';
import { Phone, Mail, Facebook, Twitter, Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  const locations = [
    'Rudradev Hyderabad',
    'Rudradev Madhya Pradesh',
    'Rudradev Rajasthan',
    'Rudradev Andhra Pradesh',
    'Rudradev Bangalore',
    'Rudradev Chennai',
    'Rudradev Gujarat',
    'Rudradev Goa',
    'Rudradev Pune',
    'Rudradev Uttar Pradesh',
  ];

  const usefulLinks = [
    'Home',
    'Product',
    'Sector',
    'Solution',
    'Floorings',
    'Coatings',
    'Admixtures',
    'Sealants',
    'Rudradev Maharashtra',
    'Rudradev Mumbai',
  ];

  return (
    <footer className="bg-[#071226] text-white pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-12 pb-12">

          {/* --- Brand & Contact --- */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Rudradev Enterprises Logo"
                className="h-10 mr-3"
              />
              <span className="text-2xl font-bold">
                Rudradev Enterprises
                <sup className="text-sm font-normal ml-1">®</sup>
              </span>
            </div>

            <p className="text-[#94A3B8] text-sm mb-6 max-w-md">
              We help industrial, commercial, and healthcare facilities
              choose the right epoxy flooring and construction chemical
              solutions with confidence.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-[#94A3B8]">
                <Phone size={18} className="mr-3 text-[#0B6B9E]" />
                <a
                  href="tel:+919511905213"
                  className="hover:text-white transition"
                >
                  +91 9511905213
                </a>
              </div>

              <div className="flex items-center text-[#94A3B8]">
                <Mail size={18} className="mr-3 text-[#0B6B9E]" />
                <a
                  href="mailto:digital@rudradeventerprises.com"
                  className="hover:text-white transition"
                >
                  digital@rudradeventerprises.com
                </a>
              </div>
            </div>
          </div>

          {/* --- Branches --- */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#0B6B9E]">
              Rudradev Branches
            </h3>
            <ul className="space-y-2 text-sm">
              {locations.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-[#0B6B9E]">•</span>
                  <a
                    href={`/locations/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#94A3B8] hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Useful Links --- */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#0B6B9E]">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-[#0B6B9E]">•</span>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#94A3B8] hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-[#1E293B] bg-[#071226] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#94A3B8]">

          <p>
            © {new Date().getFullYear()} Rudradev Enterprises. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#0B6B9E] transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-[#0B6B9E] transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-[#0B6B9E] transition">
              <Globe size={18} />
            </a>
            <a href="#" className="hover:text-[#0B6B9E] transition">
              <Linkedin size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
