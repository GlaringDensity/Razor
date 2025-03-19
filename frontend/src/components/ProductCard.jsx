import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ModelCarousel = () => {
  // Array of model tiles with title, embed URL, description, and price
  const models = [
    {
      title: "Ultrawide Monitor",
      url: "https://sketchfab.com/models/f84d24b6df3648d884fd9be9c8007dd4/embed?autostart=1",
      description:
        "Immerse yourself in a wide field of view with this cutting-edge ultrawide monitor, delivering vivid colors and stunning clarity.",
      price: "₹29,999",
    },
    {
      title: "Wireless Headphones",
      url: "https://sketchfab.com/models/9cb17a119aec4bb78e408c0eac670886/embed?autostart=1&transparent=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_stop=0&ui_help=0",
      description:
        "Experience unparalleled sound quality with these wireless headphones, engineered for immersive audio and ultimate comfort.",
      price: "₹8,699",
    },
    {
      title: "Samsung Gear VR",
      url: "https://sketchfab.com/models/55a9b75a90ad4b65891668d850a8dd36/embed?autostart=1&ui_infos=0",
      description:
        "Step into the world of virtual reality with the Samsung Gear VR, delivering immersive experiences and stunning visuals.",
      price: "₹19,999",
    },
  ];

  // State to track the current active model
  const [activeIndex, setActiveIndex] = useState(0);

  // Handlers to switch between models
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % models.length);
  };

  return (
    <div className="min-h-screen bg-card text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row">
        {/* Left Side - Description */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">{models[activeIndex].title}</h1>
          <p className="text-lg text-gray-400 mb-6" style={{ fontFamily: '"Open Sans", sans-serif' }}>{models[activeIndex].description}</p>
          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold text-[#e558ff]">{models[activeIndex].price}</span>
            <button className="bg-[#e558ff] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#d042eb] transition-colors">
              Buy Now
              <ArrowRight size={20} color="black" />
            </button>
          </div>
        </div>

        {/* Right Side - 3D Model */}
        <div className="lg:w-1/2 relative flex justify-center items-center p-8">
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg relative">
            <iframe
              title={models[activeIndex].title}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen="true"
              webkitAllowFullScreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src={models[activeIndex].url}
            ></iframe>

            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              <ArrowLeft size={24} color="black" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              <ArrowRight size={24} color="black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCarousel;
