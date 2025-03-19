import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomerReviews = () => {
  const reviewsRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  // Reset cardsRef on mount to avoid stale references
  useEffect(() => {
    cardsRef.current = [];
  }, []);

  // Add card elements to refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Animation setup with GSAP
  useEffect(() => {
    if (!reviewsRef.current || cardsRef.current.length === 0) return;

    const titleElement = reviewsRef.current.querySelector(".section-title");
    if (!titleElement) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleElement, {
      y: -30,
      opacity: 0,
      duration: 0.8,
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

  // Hover animation for card (onMouseEnter)
  const handleMouseEnter = (card, gradient) => {
    gsap.killTweensOf(card);

    gsap.to(card, {
      y: -20,
      scale: 1.1,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
      duration: 0.3,
    });

    gsap.to(card.querySelector(".card-overlay"), {
      opacity: 0.95,
      duration: 0.3,
    });

    const reviewerName = card.querySelector(".reviewer-name");
    const reviewerLocation = card.querySelector(".reviewer-location");
    const reviewBox = card.querySelector(".review-box");
    const reviewButton = card.querySelector(".review-button");

    if (reviewerName) {
      gsap.to(reviewerName, {
        opacity: 1,
        x: 0,
        color: "#d946ef",
        duration: 0.3,
      });
    }

    if (reviewerLocation) {
      gsap.to(reviewerLocation, {
        opacity: 1,
        x: 0,
        duration: 0.3,
      });
    }

    if (reviewBox) {
      gsap.to(reviewBox, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });
    }

    if (reviewButton) {
      gsap.to(reviewButton, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });
    }
  };

  // Reset animation on mouse leave
  const handleMouseLeave = (card) => {
    gsap.killTweensOf(card);

    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
    });

    gsap.to(card.querySelector(".card-overlay"), {
      opacity: 0,
      duration: 0.3,
    });

    const reviewerName = card.querySelector(".reviewer-name");
    const reviewerLocation = card.querySelector(".reviewer-location");
    const reviewBox = card.querySelector(".review-box");
    const reviewButton = card.querySelector(".review-button");

    if (reviewerName) {
      gsap.to(reviewerName, {
        opacity: 0,
        x: -10,
        color: "white",
        duration: 0.2,
      });
    }

    if (reviewerLocation) {
      gsap.to(reviewerLocation, {
        opacity: 0,
        x: -10,
        duration: 0.2,
      });
    }

    if (reviewBox) {
      gsap.to(reviewBox, {
        opacity: 0,
        y: 20,
        duration: 0.2,
      });
    }

    if (reviewButton) {
      gsap.to(reviewButton, {
        opacity: 0,
        y: 20,
        duration: 0.2,
      });
    }
  };

  // Sample review data with imported image
  const reviewsData = [
    {
      name: "John Smith",
      location: "From New York",
      text: "Incredible gaming experience!",
      imageUrl: 'https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741878473/cust1_awshfd.jpg',
      gradient: "linear-gradient(to right, #9333ea, #d946ef)",
    },
    {
      name: "Mark Wilson",
      location: "From London",
      text: "Amazing build quality!",
      imageUrl: 'https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741878472/cust3_suufn1.jpg',
      gradient: "linear-gradient(to right, #2563eb, #38bdf8)",
    },
    {
      name: "Sally H. McDuffie",
      location: "From California",
      text: "Transformed my gaming!",
      imageUrl: 'https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741878471/f9cbd9b4329d8a4d3d88243d59f828ce_wsd9cd.jpg',
      isMain: true,
      gradient: "linear-gradient(to right, #db2777, #f472b6)",
    },
    {
      name: "Emily Chen",
      location: "From Toronto",
      text: "Super comfortable!",
      imageUrl: 'https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741878473/cust4_yw2j8h.jpg',
      gradient: "linear-gradient(to right, #16a34a, #4ade80)",
    },
    {
      name: "Carlos Rodriguez",
      location: "From Madrid",
      text: "Perfect for gaming!",
      imageUrl: 'https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741878473/cust5_bwo0qf.jpg',
      gradient: "linear-gradient(to right, #4f46e5, #818cf8)",
    },
  ];

  return (
    <div className="bg-card text-white py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1
          ref={titleRef}
          className="section-title text-5xl md:text-6xl font-bold mb-16 text-center tracking-wide"
        >
          Customer Reviews
        </h1>
        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`review-card relative rounded-lg overflow-hidden h-96 transition-all duration-300 cursor-pointer shadow-lg ${review.isMain ? "md:col-span-1" : ""
                }`}
              style={{
                background: `url(${review.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "transparent", // Prevents any fallback color from hiding the image
              }}
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget, review.gradient)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div
                className="card-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0"
                style={{ zIndex: 1 }} // Ensure overlay doesn’t block image initially
              ></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  Verified Purchase
                </div>
                <h3 className="reviewer-name text-xl font-bold text-white opacity-0 transform translate-x-[-10px] mb-1">
                  {review.name}
                </h3>
                <p className="reviewer-location text-sm text-gray-400 opacity-0 transform translate-x-[-10px] mb-3">
                  {review.location}
                </p>
                <div
                  className="review-box mt-2 opacity-0 transform translate-y-[20px]"
                  style={{
                    background: review.gradient,
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <p className="text-lg font-medium text-white">"{review.text}"</p>
                </div>
                <div className="review-button mt-4 opacity-0 transform translate-y-[20px]">
                  <button className="text-sm font-medium flex items-center text-white hover:text-fuchsia-500 transition-colors">
                    Read Full Review
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

export default CustomerReviews;
