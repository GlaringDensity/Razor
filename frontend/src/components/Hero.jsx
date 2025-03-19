import React, { useState, useEffect } from "react";
import {
    MousePointer2,
    ShoppingCart,
    Heart,
    Menu,
    ChevronRight,
    Truck,
    RotateCcw,
    Coins,
    HeadphonesIcon,
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const video1 = "https://res.cloudinary.com/dkpgnq7ym/video/upload/v1741877726/8128222-uhd_3840_2160_25fps_vzaw14.mp4";
const video2 = "https://res.cloudinary.com/dkpgnq7ym/video/upload/v1741877724/13057075_3840_2160_24fps_aroa0d.mp4";

function Hero() {
    const videos = [video1, video2];
    const [currentVideo, setCurrentVideo] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const headingText = "Elevate Your Gaming Experience";
    const words = headingText.split(" ");

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate hero heading letters
        gsap.fromTo(
            ".hero-heading .letter",
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".hero-heading",
                    start: "top 80%",
                    toggleActions: "restart reverse restart reverse",
                },
            }
        );

        // Animate feature cards when scrolling down to the .features-section
        gsap.fromTo(
            ".feature-card",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".features-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    const handleVideoEnded = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    return (
        <div className="relative min-h-screen bg-card text-white overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    key={currentVideo}
                    src={videos[currentVideo]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnded}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                ></video>
            </div>

            {/* Radial Gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2)_1px,transparent_1px)] bg-[length:30px_30px]" />

            {/* Navigation */}
            <nav className="relative z-50 px-6 py-4 flex items-center justify-between bg-card backdrop-blur-md">
                <div className="flex items-center space-x-8">
                    <div className="flex items-center gap-3">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-purple-500"
                        >
                            <path
                                d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                                fill="currentColor"
                            />
                        </svg>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Razer
                        </h1>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="#" className="hover:text-purple-500 transition-colors">
                            Products
                        </a>
                        <a href="#" className="hover:text-purple-500 transition-colors">
                            Collections
                        </a>
                        <a href="#" className="hover:text-purple-500 transition-colors">
                            About
                        </a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative min-h-[80vh] flex items-center">
                <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="hero-heading text-5xl lg:text-7xl font-bold leading-tight relative z-10">
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block word">
                                    {word.split("").map((letter, letterIndex) => (
                                        <span
                                            key={letterIndex}
                                            className={`inline-block letter ${wordIndex < 2
                                                    ? "text-white"
                                                    : "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                                                }`}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                    &nbsp;
                                </span>
                            ))}
                        </h2>
                        <p className="text-gray-400 text-xl max-w-xl" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                            Discover precision-engineered gaming gear that pushes the
                            boundaries of performance and style. Welcome to the future of
                            gaming.
                        </p>
                        <div className="flex items-center space-x-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center space-x-2 hover:opacity-90 transition-opacity">
                                <span>Shop Collection</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Grid */}
            <section className="features-section relative z-10 bg-card backdrop-blur-md py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Truck className="w-8 h-8 text-purple-500" />}
                            title="Free Shipping"
                            description="Free shipping on all orders over &#8377;100"
                        />
                        <FeatureCard
                            icon={<RotateCcw className="w-8 h-8 text-purple-500" />}
                            title="Easy Returns"
                            description="30-day hassle-free return policy"
                        />
                        <FeatureCard
                            icon={<Coins className="w-8 h-8 text-purple-500" />}
                            title="Best Prices"
                            description="Price match guarantee on all products"
                        />
                        <FeatureCard
                            icon={<HeadphonesIcon className="w-8 h-8 text-purple-500" />}
                            title="24/7 Support"
                            description="Expert support available around the clock"
                        />
                    </div>
                </div>
            </section>

            {/* Custom Cursor */}
            <div
                className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: mousePosition.x - 16,
                    top: mousePosition.y - 16,
                }}
            >
                <MousePointer2 className="w-full h-full text-white animate-pulse" />
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="feature-card p-6 border border-white/10 rounded-lg hover:border-purple-500/50 transition-colors">
            <div className="flex items-center space-x-4">
                {icon}
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-gray-400" style={{ fontFamily: '"Open Sans", sans-serif' }}>{description}</p>
        </div>
    );
}

export default Hero;
