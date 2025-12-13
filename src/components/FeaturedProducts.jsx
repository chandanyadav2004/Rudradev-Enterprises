import React from 'react';
import { Square, ChevronsRight, Tally4, Droplet, Layers, Umbrella, Compass } from 'lucide-react';

// Product Card
const ProductCard = ({ imageSrc, title, description, icon: Icon }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-[#E6EEF5] shadow-sm hover:shadow-lg transition duration-300 group">
    
    {/* Image */}
    <div className="relative h-60 overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#071226]/80 backdrop-blur px-4 py-2 flex items-center">
        <Icon size={16} className="text-[#0B6B9E] mr-2" />
        <span className="text-white font-semibold text-sm">
          {title}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      <p className="text-[#64748B] text-sm mb-4 min-h-[48px]">
        {description}
      </p>

      <a
        href={`/products/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-flex items-center text-sm font-semibold text-[#0B6B9E] hover:text-[#095A86] transition"
      >
        View Details
        <ChevronsRight size={16} className="ml-1" />
      </a>
    </div>
  </div>
);

const FeaturedProducts = () => {
  return (
    <section id='services' className="py-16 bg-[#F6FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-[#0F1724] mb-2">
            Our Featured Products
          </h2>
          <div className="w-20 h-1 bg-[#0B6B9E] mb-4"></div>
          <p className="text-lg text-[#64748B]">
            A comprehensive range of construction chemicals and flooring systems
            engineered for industrial, commercial, and healthcare environments.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <ProductCard 
            imageSrc="/f1.jpg"
            title="Admixtures"
            description="Improve workability, strength, and setting time of concrete with high-performance admixtures."
            icon={Tally4}
          />

          <ProductCard 
            imageSrc="/f2.jpg"
            title="Sealant and Joints"
            description="Advanced joint sealing solutions to prevent leakage and enhance structural durability."
            icon={Layers}
          />

          <ProductCard 
            imageSrc="/f3.jpg"
            title="Floorings and Coating"
            description="Solvent-less epoxy and PU flooring systems for heavy-duty industrial applications."
            icon={Droplet}
          />

          <ProductCard 
            imageSrc="/f4.jpg"
            title="Grouts, Adhesives and Mortars"
            description="Precision grouts and mortars for anchoring, tile fixing, and machinery bedding."
            icon={Square}
          />

          <ProductCard 
            imageSrc="/f5.jpg"
            title="Waterproofing and Protective Coating"
            description="Reliable waterproofing systems for roofs, basements, walls, and foundations."
            icon={Umbrella}
          />

          {/* <ProductCard 
            imageSrc="/products/testing-placeholder.jpg"
            title="Testing and Consulting"
            description="On-site testing and expert consultation for material selection and concrete health."
            icon={Compass}
          /> */}
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
