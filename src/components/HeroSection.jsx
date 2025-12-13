// src/components/HeroSection.jsx
import React from 'react';
import { MessageSquare } from 'lucide-react';
import HeroRight from './HeroRight';

const HeroSection = () => {
  return (
    <main className="bg-[#F6FBFF] relative overflow-hidden">
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6FBFF] via-white to-[#EAF4FB]" />

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col space-y-5">
            
            {/* Badge */}
            <span className="inline-block w-fit text-sm font-semibold px-4 py-1.5 rounded-full bg-[#E6F2FA] text-[#0B6B9E]">
              ISO Certified • Industrial Flooring Experts
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F1724] leading-tight">
              Industrial Epoxy Flooring in Mumbai
              <span className="block text-[#0B6B9E]">
                Durable • Chemical Resistant
              </span>
            </h1>

            <p className="text-lg text-[#64748B] max-w-xl">
              We supply & install self-leveling epoxy, PU floor topping,
              anti-static (ESD) & decorative epoxy systems for workshops,
              warehouses, hospitals and food zones.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="bg-[#0B6B9E] hover:bg-[#095A86] text-white font-semibold py-3.5 px-7 rounded-xl transition shadow-lg"
              >
                Request Free Site Visit
              </a>

              <a
                href="#services"
                className="border-2 border-[#0B6B9E] text-[#0B6B9E] hover:bg-[#E6F2FA] font-semibold py-3.5 px-7 rounded-xl transition"
              >
                Our Services
              </a>
            </div>

            <a
              href="mailto:chauhansandeep2336@gmail.com"
              className="text-sm text-[#64748B] hover:text-[#0B6B9E] transition"
            >
              chauhansandeep2336@gmail.com
            </a>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  title: "Self-leveling Epoxy",
                  desc: "2–5 mm • Factories & showrooms",
                },
                {
                  title: "ESD Flooring",
                  desc: "Server rooms & electronics units",
                },
                {
                  title: "PU Flooring",
                  desc: "UV & abrasion resistant",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-[#E6EEF5] shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-[#0F1724] text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* --- RIGHT COLUMN --- */}
          <div className="flex justify-center lg:justify-end">
            <HeroRight />
          </div>

        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919511905213"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={32} />
      </a>

    </main>
  );
};

export default HeroSection;
