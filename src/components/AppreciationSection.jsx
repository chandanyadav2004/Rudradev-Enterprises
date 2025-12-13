import React from 'react';
import { Star, Building2, Trophy, ArrowRight } from 'lucide-react';

// Milestone card
const MilestoneCard = ({ icon: Icon, value, label, className = '' }) => (
  <div className={`flex items-center gap-6 py-4 ${className}`}>
    
    {/* Icon + Value */}
    <div className="flex flex-col items-center justify-center w-24">
      <Icon size={36} className="text-[#0B6B9E] mb-1" />
      <span className="text-4xl font-extrabold text-[#0F1724]">
        {value}
      </span>
    </div>

    {/* Label */}
    <div className="text-[#64748B] text-lg font-semibold">
      {label}
    </div>
  </div>
);

const AppreciationSection = () => {
  return (
    <section className="bg-[#F6FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        <div className="grid lg:grid-cols-3 gap-12">

          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold text-[#0F1724] mb-4">
              Appreciation
            </h2>
            <div className="w-24 h-1 bg-[#0B6B9E] mb-6"></div>

            {/* CTA */}
            <a
              href="/appreciation-letters"
              className="inline-flex items-center bg-[#0B6B9E] hover:bg-[#095A86] text-white font-semibold py-2.5 px-5 mb-8 rounded-lg transition"
            >
              View Appreciation Letters
            </a>

            {/* Content */}
            <p className="text-[#64748B] leading-relaxed max-w-3xl">
              At  Rudradev Enterprises, client trust is our greatest achievement.
              Our appreciation letters reflect successful project delivery,
              adherence to timelines, and uncompromised quality standards.
              These acknowledgements motivate us to continuously innovate
              and uphold excellence across industrial, commercial, and
              healthcare projects.
            </p>
          </div>

          {/* --- RIGHT COLUMN: MILESTONES --- */}
          <div className="lg:col-span-1 border-l border-[#E6EEF5] lg:pl-8">
            <MilestoneCard
              icon={Star}
              value="30+"
              label="Years of Excellence"
              className="border-b border-[#E6EEF5]"
            />
            <MilestoneCard
              icon={Building2}
              value="53"
              label="Global Branches"
              className="border-b border-[#E6EEF5]"
            />
            <MilestoneCard
              icon={Trophy}
              value="48"
              label="Industry Awards"
            />
          </div>

        </div>
      </div>

      {/* --- BOTTOM CTA BAR --- */}
      <div className="bg-[#071226] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-lg sm:text-xl font-semibold text-white">
            We deliver quality driven by innovation, research & experience
          </p>
          <a
            href="/#contact"
            className="bg-[#0B6B9E] hover:bg-[#095A86] text-white font-bold py-2.5 px-6 rounded-lg transition flex items-center"
          >
            Get a Quote
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;
