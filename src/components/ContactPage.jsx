import React from "react";

const ContactPage = () => {
  return (
    <section id="contact" className="bg-[#F6FBFF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-extrabold text-[#0F1724] mb-3">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#0B6B9E] mb-4"></div>
          <p className="text-[#64748B] text-lg">
            Get in touch with our team for site visits, quotations, or technical
            consultation.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* --- LEFT: MAP --- */}
          <div className="w-full h-[420px] rounded-xl overflow-hidden border border-[#E6EEF5] shadow-sm">
            <iframe
              title="Rudradev Enterprises Location"
              src="https://www.google.com/maps?q=Mumbai&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* --- RIGHT: CONTACT FORM --- */}
          <div className="bg-white rounded-xl border border-[#E6EEF5] shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#0F1724] mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#0F1724] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#0B6B9E]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#0F1724] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#0B6B9E]"
                  required
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#0F1724] mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement"
                  className="w-full px-4 py-3 rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#0B6B9E]"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[#0B6B9E] hover:bg-[#095A86] text-white font-semibold py-3 px-6 rounded-lg transition shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
