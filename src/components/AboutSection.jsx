import React from 'react';
import { FlaskConical, Users, Factory, Anchor } from 'lucide-react';

// Feature Card
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4">
    
    {/* Icon Box */}
    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#E6F2FA] border border-[#D6EAF7] shadow-sm">
      <Icon size={24} className="text-[#0B6B9E]" />
    </div>

    {/* Text */}
    <div>
      <h3 className="text-lg font-semibold text-[#0F1724] mb-1">
        {title}
      </h3>
      <p className="text-sm text-[#64748B] leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-16 bg-[#F6FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-1 border-l-4 border-[#0B6B9E] pl-6">
            <h2 className="text-4xl font-extrabold text-[#0F1724] mb-6">
              What We Can <br /> Offer
            </h2>

            <p className="text-[#64748B] mb-6 leading-relaxed">
             Rudradev Enterprises Pvt. Ltd. specializes in high-performance construction
              chemicals and epoxy flooring systems. Our advanced R&D and
              manufacturing facilities produce reliable solutions designed to
              meet diverse industrial, commercial, and healthcare requirements
              across the country.
            </p>

            <a
              href="/about"
              className="inline-flex items-center font-semibold text-[#0B6B9E] hover:text-[#095A86] transition"
            >
              View More →
            </a>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">

            <FeatureCard
              icon={FlaskConical}
              title="Extensive Research"
              description="Continuous R&D to innovate, improve formulations, and enhance performance across our product range."
            />

            <FeatureCard
              icon={Users}
              title="Dedicated Team"
              description="Experienced consultants, engineers, and skilled professionals delivering precise execution and support."
            />

            <FeatureCard
              icon={Factory}
              title="Advanced Infrastructure"
              description="Modern manufacturing and testing facilities enabling consistent quality and timely delivery."
            />

            <FeatureCard
              icon={Anchor}
              title="Quality Assurance"
              description="Strict quality management protocols followed at every stage of production and application."
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
