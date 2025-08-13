import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const links = [
    { name: 'Home', onClick: () => navigate("/") },
    { name: 'About Us', onClick: () => navigate("/aboutUs") },
    { name: 'Contact Us', onClick: () => navigate("/contactUs") }
  ];

  return (
    <header className='border border-black rounded-2xl bg-amber-100 px-4 py-2 shadow-lg m-2'>
      <div className='max-w-full mx-auto flex items-center'>
        <div className='flex items-center cursor-pointer' onClick={() => navigate("/")}> 
          <img src='/Logo BusBite.png' alt='BusBite Logo' className='w-[70px]' />
          <div className='ml-2'>
            <h1 className='text-3xl font-bold text-[#222222]'>BusBite</h1>
            <p className='text-xs font-semibold text-[#D25D5D]'>!! Order Food On Your Way !!</p>
          </div>
        </div>

        <nav className='hidden md:flex gap-6 ml-auto font-semibold'>
          {links.map((link, index) => (
            <button
              key={index}
              onClick={link.onClick}
              className="text-xl text-gray-500 hover:text-gray-900 duration-300 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="ml-auto md:ml-5 relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="cursor-pointer text-4xl text-gray-600 hover:text-gray-900"
          >
            <FaUserCircle />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
              <div className="p-3 border-b font-semibold">Welcome, Guest</div>
              <button
                onClick={() => { setProfileOpen(false); navigate("/auth"); }}
                className="font-serif cursor-pointer block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Login / Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}