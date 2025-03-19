import { Link } from "react-router-dom";
import { ArrowRight, Search, ShoppingBag, Grid } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Categories() {
    const categories = [
        {
            title: "Keyboards",
            img: "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741877688/keyboard-with-gold-bars-white-background-3d-illustration_hhqhom.jpg?height=200&width=300",
            link: "#",
        },
        {
            title: "Gaming Mouse",
            img: "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741879073/De1009086www.tiktarh.com__tne9uf.jpg?height=200&width=300",
            link: "#",
        },
        {
            title: "Headphones",
            img: "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741879127/beautiful-gaming-headphone-isolated-transparent-background_84443-1553-removebg-preview_aezxnh.png?height=200&width=300",
            link: "#",
        },
        {
            title: "Gaming Controllers",
            img: "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741879164/28788924_03june22_game_controller_icon_05-01-removebg-preview_a0uhow.png?height=200&width=300",
            link: "#",
        },
    ];

    const featuredProducts = [
        {
            title: "Vortex Reaper",
            description: "Unparalleled Precision and Control for the Ultimate Gaming Edge",
            img: "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741879221/generation-white-game-controller-isolated-black-background-with-colored-lights-illuminating-it-close-up-selective-focus_442713-2620_ewizqw.jpg?height=600&width=600",
            link: "#",
        },
        {
            title: "Quantum Pro",
            description: "The Quantum Pro Redefines Immersive Gaming Audio",
            img: "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1741879220/modern-high-quality-wireless-ear-headphones-neon-trendy-style_97245-1659_wcc6v6.jpg?height=400&width=600",
            link: "#",
        },
    ];

    return (
        <div className="min-h-screen bg-card text-white p-8">
            <h1 className="text-center text-4xl font-bold mb-12 font-['Orbitron']">EXPLORE MORE</h1>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl overflow-hidden bg-[#1a1a1a] hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-shadow duration-300"
                    >
                        <div className="aspect-[4/3] relative overflow-hidden gsapImg">
                            <img
                                src={category.img || "/placeholder.svg"}
                                alt={category.title}
                                className="object-cover transform group-hover:scale-105 transition-transform duration-300 w-full h-full"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 w-full p-4">
                            <h3 className="text-xl font-semibold mb-2 font-['Orbitron']">{category.title}</h3>
                            <Link
                                to={category.link}
                                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm group"
                            >
                                Shop Now
                                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProducts.map((product, index) => (
                    <div key={index} className="group relative rounded-2xl overflow-hidden">
                        {/* Background with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="aspect-[16/9] relative">
                            <img
                                src={product.img || "/placeholder.svg"}
                                alt={product.title}
                                className={`object-cover ${product.title === "Vortex Reaper"
                                    ? "absolute inset-0"
                                    : "w-full h-full"}`}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 w-full p-6">
                                <h2 className="text-3xl font-bold mb-2 font-['Orbitron']">{product.title}</h2>
                                <p className="text-gray-300 mb-4 max-w-md">{product.description}</p>
                                <Link
                                    to={product.link}
                                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors group"
                                >
                                    Buy Now
                                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
