import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Home, Utensils, ClipboardList, LogOut } from 'lucide-react'; // Icons
import { FaUserCircle } from 'react-icons/fa';

export default function RestaurantHeader() {
  const navigate = useNavigate();
    const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Clear current user from localStorage
    navigate('/auth'); // Redirect to the authentication page
  };

  return (
    <header className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/restaurant/dashboard" className="text-2xl font-bold font-inter tracking-wide">
          Restaurant Mode
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/restaurant/dashboard" className="hover:text-gray-800 flex items-center space-x-2 transition duration-200">
                <Home size={20} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/restaurant/menu-management" className="hover:text-gray-800 flex items-center space-x-2 transition duration-200">
                <Utensils size={20} />
                <span className="hidden sm:inline">Menu</span>
              </Link>
            </li>
            <li>
              <Link to="/restaurant/orders" className="hover:text-gray-800 flex items-center space-x-2 transition duration-200">
                <ClipboardList size={20} />
                <span className="hidden sm:inline">Orders</span>
              </Link>
            </li>
            <div className="ml-auto md:ml-0 relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="hover:cursor-pointer text-3xl text-white hover:text-gray-800"
              >
                <FaUserCircle />
              </button>
    
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-500 border rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => { navigate("/restaurant/profile"); }}
                    className="hover:cursor-pointer rounded-lg block w-full text-left px-4 py-2 hover:bg-gray-900"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => { handleLogout(); }}
                    className="hover:cursor-pointer rounded-lg block w-full text-left px-4 py-2 hover:bg-gray-900"
                  >
                    LogOut
                  </button>
                </div>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
