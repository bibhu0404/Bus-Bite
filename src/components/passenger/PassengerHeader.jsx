import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Percent, LogOut } from 'lucide-react'; // Icons

export default function PassengerHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/auth');
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/passenger/dashboard" className="text-2xl font-bold font-inter tracking-wide">
          FoodiePass
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/passenger/dashboard" className="flex items-center space-x-2 hover:text-pink-100 transition duration-200">
                <Home size={20} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/passenger/track-orders" className="flex items-center space-x-2 hover:text-pink-100 transition duration-200">
                <ShoppingBag size={20} />
                <span className="hidden sm:inline">My Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/passenger/offers" className="flex items-center space-x-2 hover:text-pink-100 transition duration-200">
                <Percent size={20} />
                <span className="hidden sm:inline">Offers</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 hover:text-pink-100 transition duration-200 focus:outline-none"
              >
                <LogOut size={20} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
