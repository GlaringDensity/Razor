import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import headphones from '../assets/scrollheadphone.jpg';
import keyboard from '../assets/scrollkeyboard.jpg';
import mouse from '../assets/scrollmouse.jpg';
import vr from '../assets/scrollvrheadset.jpg';
import desk from '../assets/scrolldesk.jpg';
import monitor from '../assets/scrollmonitor.jpg';
import chair from '../assets/scrollchair.jpg';
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scope selectors to this component using gsap.context
    const ctx = gsap.context(() => {
      const scrollSections = document.querySelectorAll('.scroll-section');

      scrollSections.forEach((section) => {
        const wrapper = section.querySelector('.wrapper');
        const items = wrapper.querySelectorAll('.item');
        const direction = section.classList.contains('vertical-section')
          ? 'vertical'
          : 'horizontal';

        // Set initial positions for all items except the first one
        items.forEach((item, index) => {
          if (index !== 0) {
            if (direction === 'horizontal') {
              gsap.set(item, { xPercent: 100 });
            } else {
              gsap.set(item, { yPercent: 100 });
            }
          }
        });

        // Create timeline for scroll-triggered animations.
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: 'top top',
            end: `+=${(items.length - 1) * 100}%`,
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
          defaults: { ease: 'none' },
        });

        for (let i = 0; i < items.length - 1; i++) {
          timeline.to(items[i], {
            scale: 0.9,
            borderRadius: '10px',
          });
          if (direction === 'horizontal') {
            timeline.to(items[i + 1], { xPercent: 0 }, '<');
          } else {
            timeline.to(items[i + 1], { yPercent: 0 }, '<');
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="main-wrapper bg-gray-800">
      {/* Vertical Scroll Section */}
      <div className="scroll-section vertical-section overflow-hidden">
        <div className="wrapper h-screen">
          <div
            role="list"
            className="flex justify-start items-center h-full relative p-[0.2rem]"
          >
            {/* Vertical Item 1: Gaming Headphones */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Immersive Audio Experience
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Elevate your game with our top-of-the-line gaming headphones that deliver crystal-clear sound and deep bass.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src={headphones}
                alt="Gaming Headphones"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Vertical Item 2: Gaming Laptop */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-light-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Power-Packed Gaming Laptop
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Experience ultimate performance with our gaming laptops featuring fast processors and advanced graphics.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Gaming Laptop"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Vertical Item 3: Gaming Keyboard */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Precision Gaming Keyboard
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Enjoy responsive keys, customizable RGB lighting, and tactile feedback to gain the competitive edge.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src={keyboard}
                alt="Gaming Keyboard"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Vertical Item 4: Gaming Mouse */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-light-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Ergonomic Gaming Mouse
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Gain ultimate control with our high-DPI, customizable gaming mouse designed for precision.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src={mouse}
                alt="Gaming Mouse"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transition Page Between Scroll Types */}
      <div className="h-100 flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-center px-6">
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          "Gaming Essentials, <span className="text-blue-500">By Gamers, For Gamers.</span>"
        </h2>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="scroll-section horizontal-section overflow-hidden">
        <div className="wrapper h-screen">
          <div
            role="list"
            className="flex justify-start items-center h-full relative p-[0.2rem]"
          >
            {/* Horizontal Item 1: Gaming Monitor */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Ultra HD Gaming Monitor
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Immerse yourself in vivid colors and high refresh rates for a truly dynamic gaming experience.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src={monitor}
                alt="Gaming Monitor"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 2: Gaming Chair */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-light-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Ergonomic Gaming Chair
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Designed for comfort and style, our gaming chairs offer premium support during marathon sessions.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src={chair}
                alt="Gaming Chair"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 3: VR Headset */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Cutting-Edge VR Headset
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Step into a new dimension of gaming with immersive virtual reality technology.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src={vr}
                alt="VR Headset"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 4: Gaming Desk */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-light-card text-white flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="text-5xl font-bold mb-4">
                  Sleek Gaming Desk
                </h2>
                <p
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  Organize your gear and elevate your setup with a modern, spacious gaming desk designed for efficiency.
                </p>
                <button className="mt-4 px-8 py-3 font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                  Shop Now
                </button>
              </div>
              <img
                src={desk}
                alt="Gaming Desk"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="w-full h-[40vh] flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-center px-6">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          "Level Up Your Game!"
        </h1>
      </div>
    </main>
  );
};

export default ScrollAnimationComponent;
