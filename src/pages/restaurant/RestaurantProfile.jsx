import React, { useState, useRef } from "react";
import { FaStar, FaEdit, FaTrash, FaCamera } from "react-icons/fa";

export default function RestaurantProfile() {
  const [restaurantName, setRestaurantName] = useState("Spice Villa");
  const [editingName, setEditingName] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef();

  const stats = {
    totalOrders: 210,
    menuItems: 25,
    avgRating: 4.4,
    totalRevenue: "₹1,40,500",
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const removePhoto = () => {
    setProfilePic(null);
    fileInputRef.current.value = null;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={i} className="text-yellow-400" />);
    if (halfStar) stars.push(<FaStar key="half" className="text-yellow-400 opacity-50" />);
    while (stars.length < 5) stars.push(<FaStar key={stars.length + "empty"} className="text-gray-300" />);
    return stars;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Restaurant Profile</h1>

      {/* Profile section */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="relative">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full object-cover border" />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full text-gray-600">
              No Image
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handlePhotoChange}
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            <FaCamera />
          </button>
          {profilePic && (
            <button
              onClick={removePhoto}
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              title="Remove Photo"
            >
              <FaTrash />
            </button>
          )}
        </div>

        <div className="text-center md:text-left">
          {editingName ? (
            <div className="flex items-center gap-2">
              <input
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className="border p-2 rounded-lg"
              />
              <button
                onClick={() => setEditingName(false)}
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{restaurantName}</h2>
              <button
                onClick={() => setEditingName(true)}
                className="text-gray-500 hover:text-blue-600"
                title="Edit Name"
              >
                <FaEdit />
              </button>
            </div>
          )}
          <div className="mt-2 flex items-center gap-1">
            {renderStars(stats.avgRating)}
            <span className="text-gray-600 ml-2 text-sm">({stats.avgRating.toFixed(1)})</span>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Menu Items</h3>
          <p className="text-2xl font-bold text-gray-900">{stats.menuItems}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold text-green-600">{stats.totalRevenue}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Average Rating</h3>
          <div className="flex items-center gap-1">
            {renderStars(stats.avgRating)}
            <span className="ml-2 text-gray-600 text-sm">({stats.avgRating.toFixed(1)})</span>
          </div>
        </div>
      </div>

      {/* Useful links */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h3>
        <ul className="list-disc pl-5 text-blue-600 space-y-2">
          <li>
            <a href="/restaurant/revenue" className="hover:underline">Revenue & Analytics</a>
          </li>
          <li>
            <a href="/restaurant/orders" className="hover:underline">View All Orders</a>
          </li>
          <li>
            <a href="/restaurant/menu-management" className="hover:underline">Manage Menu</a>
          </li>
          <li>
            <a href="/restaurant/offers" className="hover:underline">Offers & Coupons</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
