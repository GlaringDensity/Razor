import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import blog1 from "../assets/blog1.jpg"; // Updated to relative path
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

const BlogSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // Reset refs on each render
  useEffect(() => {
    cardsRef.current = [];
  }, []);

  // Function to add refs safely
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        titleRef.current.style.opacity = "1"; // Ensure visibility after animation
      },
    }).from(
      cardsRef.current,
      {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseEnter = (card) => {
    gsap.to(card, {
      y: -10,
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(142, 0, 190, 0.3)",
      duration: 0.3,
    });

    const cardTitle = card.querySelector(".card-title");
    const cardButton = card.querySelector(".card-button");

    if (cardTitle) gsap.to(cardTitle, { color: "#d946ef", duration: 0.3 });
    if (cardButton) gsap.to(cardButton, { color: "#d946ef", duration: 0.3 });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
    });

    const cardTitle = card.querySelector(".card-title");
    const cardButton = card.querySelector(".card-button");

    if (cardTitle) gsap.to(cardTitle, { color: "white", duration: 0.3 });
    if (cardButton) gsap.to(cardButton, { color: "white", duration: 0.3 });
  };

  const blogPosts = [
    {
      date: "27 May 2024",
      author: "Martinez",
      title: "How Pro-Grade Gaming Gear Can Elevate Your Gameplay",
      description:
        "Discover the performance advantages of high-end gaming controllers, mice, and peripherals for competitive play.",
      src: blog1,
    },
    {
      date: "16 Jan 2024",
      author: "Musser",
      title: "The Future of Haptic Feedback in Gaming Controllers",
      description:
        "Exploring next-generation tactile feedback systems coming to premium gaming controllers in 2025.",
      src: blog2,
    },
    {
      date: "08 Apr 2024",
      author: "Marilyn",
      title: "Minimalist Design Trends in Gaming Hardware",
      description:
        "How sleek, two-tone aesthetics are defining the new generation of gaming peripherals and equipment.",
      src: blog3,
    },
    {
      date: "17 Jun 2024",
      author: "Kristina",
      title: "Essential Gear for Competitive Esports Players",
      description:
        "Professional recommendations for controllers, headsets and gear that can give you the competitive edge.",
      src: blog4,
    },
  ];

  return (
    <div ref={sectionRef} className="bg-card text-white min-h-screen py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1
          ref={titleRef}
          className="section-title text-5xl md:text-6xl font-bold mb-16 text-center tracking-wide opacity-100"
        >
          Our Blog
        </h1>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="rounded-lg overflow-hidden bg-gray-800 shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              {/* Card Image */}
              <div className="h-48 relative overflow-hidden">
                <img src={post.src} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  {post.date}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: '"Open Sans", sans-serif' }}>By {post.author}</p>
                <h3 className="card-title text-xl font-bold mb-3 text-white">{post.title}</h3>
                <p className="card-desc text-gray-400 text-sm mb-4" style={{ fontFamily: '"Open Sans", sans-serif' }}>{post.description}</p>
                <div className="mt-auto">
                  <button className="card-button text-sm font-medium flex items-center text-white hover:text-fuchsia-500 transition-colors">
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
