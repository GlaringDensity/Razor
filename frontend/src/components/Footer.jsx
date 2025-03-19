import React from "react";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors">
                2357 Gordon Street, CA
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                + (909) - 478-2742
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                GearnixStore@Vinova.com
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                @VinovaGear
              </li>
            </ul>
          </div>

          {/* Let us help */}
          <div>
            <h3 className="text-xl font-bold mb-6">Let us help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cancel My Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Return My Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Search
                </a>
              </li>
            </ul>
          </div>

          {/* Our policies */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Cancellations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletters</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 rounded-l-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500" style={{ fontFamily: '"Open Sans", sans-serif' }}
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-r-full px-6 py-2 transition-colors duration-300" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Logo and Copyright */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-white mr-2">Razer</span>
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
          </div>
          <p className="text-gray-500 text-sm">
            Copyright © 2024 Vinovathemes. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
