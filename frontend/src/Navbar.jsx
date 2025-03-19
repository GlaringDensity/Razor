import React, { useState } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {

    useGSAP(() => {
        gsap.from(".brand,a", {
            y: -70,
            duration: 0.9,
            delay: 0.2,
            stagger: 0.4
        })
    }, []);

    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-18">

                    <div className="flex-shrink-0 flex items-center brand">
                        <Laptop className="h-8 w-8 text-blue-900" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Brand</span>
                    </div>


                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex space-x-8 desktopAnchor">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-gray-600 hover:text-indigo-600 px-3 py-2 text-md font-medium transition-colors duration-200 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="/login"
                            className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Login
                        </a>
                        <a
                            href="/signup"
                            className="bg-neutral-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-900 transition-colors duration-200"
                        >
                            Sign up
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white mobileNavigation">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="border-t border-gray-200 pt-4 flex flex-col space-y-2 px-3">
                        <a
                            href="/login"
                            className="text-gray-600 hover:text-indigo-600 block py-2 text-base font-medium transition-colors duration-200"
                        >
                            Login
                        </a>
                        <a
                            href="/signup"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition-colors duration-200 text-center"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}