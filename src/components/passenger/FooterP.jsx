import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FooterP() {
  const navigate = useNavigate();
  return (
    <footer className="bg-amber-200 text-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold mb-2">Highway FoodHub</h2>
            <p className="text-sm">
              Smart Food Stops for Smarter Bus Rides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-pink-600" onClick={() => navigate("/auth")}>Login/Register</a></li>
              <li><a href="#" className="hover:text-pink-600" onClick={() => navigate("/aboutUs")}>About Us</a></li>
              <li><a href="#" className="hover:text-blue-600" onClick={() => navigate("/contactUs")}>Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" className="p-2 bg-white rounded-full hover:bg-pink-100 transition">
                <FaFacebookF className="text-pink-600 text-xl" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-100 transition">
                <FaTwitter className="text-blue-600 text-xl" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:bg-pink-100 transition">
                <FaInstagram className="text-pink-600 text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Highway FoodHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
