import { useEffect, useState } from "react";

const images = [
  "/Main Slider/1.jpg",
  "/Main Slider/2.jpg",
  "/Main Slider/3.jpg",
  
];

export default function HeroRight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // slow = premium

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[320px] lg:w-[360px] h-[420px] overflow-hidden rounded-2xl shadow-2xl bg-white">
      
      {/* Images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Epoxy flooring work"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-accent-blue" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
