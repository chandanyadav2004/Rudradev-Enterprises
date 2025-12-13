import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: "How often should I install expansion joints in my floor?",
    answer:
      "Expansion joints in floor covering installations are required where structural movement joints are present in the subfloor. Structural movement joints should not be bridged by any part of the flooring installation and should be treated with suitable surface-mounted expansion joint systems.",
    image: "/faq1.jpg",
  },
  {
    id: 2,
    question: "What is meant by waterproofing?",
    answer:
      "Waterproofing is the process of making structures resistant to water ingress. It typically involves membranes or protective coatings applied to foundations, basements, and roofs to prevent moisture damage and extend structural life.",
  },
  {
    id: 3,
    question: "I don’t know what I need — can you advise?",
    answer:
      "Yes. Our technical team conducts site surveys to understand traffic load, chemical exposure, hygiene needs, and budget, then recommends the most suitable epoxy or PU flooring system.",
  },
  {
    id: 4,
    question: "Benefits of epoxy flooring",
    answer:
      "Epoxy flooring provides high durability, chemical resistance, seamless hygiene, easy maintenance, and enhanced safety. It is ideal for industrial, commercial, and healthcare environments.",
  },
];

const AboutFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-[#F6FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* --- ABOUT US --- */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F1724] mb-2">
              About Us
            </h2>
            <div className="w-20 h-1 bg-[#0B6B9E] mb-4"></div>

            <p className="text-[#64748B] leading-relaxed mb-6">
              <span className="text-4xl font-extrabold text-[#0B6B9E] float-left pr-2 leading-none">
                R
              </span>
              udradev Enterprises Pvt. Ltd. is a premium manufacturer of construction
              chemicals, offering high-performance waterproofing systems,
              sealants, admixtures, epoxy flooring, PU coatings, and
              anti-corrosive solutions for industrial and healthcare
              environments.
            </p>

            {/* Main Image */}
            <img
              src="/about1.jpg"
              alt="Industrial flooring project"
              className="w-full rounded-xl shadow-md mb-4"
            />

            {/* Sub Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/about2.jpg"
                alt="Floor installation detail"
                className="w-full h-40 object-cover rounded-xl shadow-sm"
              />
              <img
                src="/about3.jpg"
                alt="Epoxy flooring finish"
                className="w-full h-40 object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* --- FAQ --- */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F1724] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#E6EEF5] rounded-xl overflow-hidden bg-white"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className={`w-full flex justify-between items-center p-4 text-left font-semibold transition ${
                      openFAQ === item.id
                        ? "bg-[#0B6B9E] text-white"
                        : "bg-[#F6FBFF] text-[#0F1724] hover:bg-[#EAF4FB]"
                    }`}
                    aria-expanded={openFAQ === item.id}
                  >
                    {item.question}
                    {openFAQ === item.id ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                  {/* Answer */}
                  {openFAQ === item.id && (
                    <div className="p-4 border-t border-[#E6EEF5]">
                      {item.image && (
                        <img
                          src={item.image}
                          alt="FAQ illustration"
                          className="w-2/5 float-left mr-4 mb-2 rounded-lg shadow-sm"
                        />
                      )}
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {item.answer}
                      </p>
                      <div className="clear-both"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFAQSection;
