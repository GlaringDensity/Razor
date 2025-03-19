import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowRightIcon } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import Spline from '@splinetool/react-spline';

const WeeklyDeals = () => {
    const [days, setDays] = useState(8);
    const [hours, setHours] = useState(16);
    const [minutes, setMinutes] = useState(34);
    const [seconds, setSeconds] = useState(52);

    // Use GSAP hook to animate the headphone image on scroll
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            ".weeklyDealsHeadphone",
            { opacity: 0, rotate: -360 },
            {
                opacity: 1,
                rotate: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: ".weeklyDealsHeadphone", // Trigger based on the headphone element
                    start: "top 80%",                 // When the top of the element hits 80% down the viewport
                    end: "bottom 20%",                // Optional: defines when the element leaves the viewport
                    toggleActions: "play reverse play reverse" // Reverse the animation when scrolling back
                }
            }
        );
    });

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                setSeconds(59);
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                } else {
                    setMinutes(59);
                    if (hours > 0) {
                        setHours(hours - 1);
                    } else {
                        setHours(23);
                        if (days > 0) {
                            setDays(days - 1);
                        } else {
                            clearInterval(timer);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [days, hours, minutes, seconds]);

    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    return (
        <div className="relative w-full h-screen bg-card overflow-hidden">
            {/* Navigation dots and arrows */}
            <div className="absolute top-20 left-0 right-0 flex justify-center items-center gap-2 z-10">
                <button className="text-white/70 hover:text-white">
                    <ArrowLeft size={24} />
                </button>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
                <button className="text-white/70 hover:text-white">
                    <ArrowRight size={24} />
                </button>
            </div>

            {/* Colorful gradient strip */}
            <div className="absolute top-1/2 left-0 w-full h-24 bg-gradient-to-r from-yellow-600/40 via-fuchsia-600/40 to-blue-600/40 transform -translate-y-1/2 blur-md"></div>

            {/* Content container */}
            <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
                {/* Left side - Text and countdown */}
                <div className="w-1/2 pt-16">
                    <h2 className="text-white text-5xl font-bold tracking-wider">
                        Weekly Deals
                    </h2>
                    <p className="text-white/80 mt-3 text-lg max-w-md" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                        Don't Miss Out - Gear Up for Victory with This Week's Unmissable Deals!
                    </p>

                    {/* Countdown timer */}
                    <div className="flex gap-4 mt-8">
                        <div className="bg-white rounded-lg w-20 h-20 flex flex-col items-center justify-center">
                            <div className="text-pink-500 text-2xl font-bold">{formatNumber(days)}</div>
                            <div className="text-pink-500 text-xs font-medium">DAYS</div>
                        </div>
                        <div className="bg-white rounded-lg w-20 h-20 flex flex-col items-center justify-center">
                            <div className="text-pink-500 text-2xl font-bold">{formatNumber(hours)}</div>
                            <div className="text-pink-500 text-xs font-medium">HOURS</div>
                        </div>
                        <div className="bg-white rounded-lg w-20 h-20 flex flex-col items-center justify-center">
                            <div className="text-pink-500 text-2xl font-bold">{formatNumber(minutes)}</div>
                            <div className="text-pink-500 text-xs font-medium">MINUTES</div>
                        </div>
                        <div className="bg-white rounded-lg w-20 h-20 flex flex-col items-center justify-center">
                            <div className="text-pink-500 text-2xl font-bold">{formatNumber(seconds)}</div>
                            <div className="text-pink-500 text-xs font-medium">SECONDS</div>
                        </div>
                    </div>

                    {/* Shop now button */}
                    <button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                        Shop Now
                        <ArrowRightIcon size={16} />
                    </button>
                </div>

                {/* Right side - Headphones image */}
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741878351/headphones-isolated-transparent-background-headphone-day-technology-day_1121752-51822-removebg-preview_l5os9e.png?height=500&width=500"
                        alt="Gaming Headphones"
                        className="w-[550px] h-auto object-contain transform translate-y-4 image-drop-shadow weeklyDealsHeadphone"
                    />
                </div>
            </div>
        </div>
    );
};

export default WeeklyDeals;
