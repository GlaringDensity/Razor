import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const products = [
  {
    id: 1,
    name: "Viperasing X Pro",
    price: 99.99,
    rating: 4.5,
    image:
      "../src/assets/headphone-13-600x600.png?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "Zephyr Wireless Gaming",
    price: 215.99,
    rating: 5,
    image:
      "../src/assets/computer-mouse-top-view-isolated-transparent-background-generative-ai_667511-5593-removebg-preview.png?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Pulsar Phantom",
    price: 115.25,
    rating: 5,
    image:
      "../src/assets/product-9-1.png?auto=format&fit=crop&q=90&w=600",
  },
  {
    id: 4,
    name: "Apex Predator",
    price: 85.99,
    rating: 4.5,
    image:
      "../src/assets/generation-white-game-controller-isolated-black-background-with-colored-lights-illuminating-it-close-up-selective-focus_442713-2607-removebg-preview.png?auto=format&fit=crop&q=80&w=500",
  },
];

const itemsPerPage = 4;
const totalPages = Math.ceil(products.length / itemsPerPage);

const TopRated = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set the page background color
  useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#1a1a1a";
    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);

  // GSAP animation for each product card
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".product-card").forEach(card => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
          },
        }
      );
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-xl ${index < Math.floor(rating)
          ? 'text-pink-500'
          : index < rating
            ? 'text-pink-500 opacity-50'
            : 'text-gray-400'
          }`}
      >
        ★
      </span>
    ));

  return (
    <div className="min-h-screen bg-card">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Top Rated Products</h2>
          <p className="text-gray-400">
            Master Your Battleground Elevate Your Game with Our Elite-Reviewed Gear
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.3s ease-in-out',
                width: `${(products.length / itemsPerPage) * 100}%`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card w-1/4 bg-[#333333] rounded-3xl p-10 flex flex-col items-center transition-all duration-300"
                >
                  <div className="w-full h-48 mb-6 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="h-[140px] flex flex-col items-center justify-between">
                    <h3 className="text-lg font-semibold text-white text-center">
                      {product.name}
                    </h3>
                    <div className="flex">{renderStars(product.rating)}</div>
                    <p className="text-2xl font-bold text-white">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-pink-500 w-8' : 'bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
