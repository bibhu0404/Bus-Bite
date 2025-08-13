import React from "react";
import {
  FaMapMarkedAlt,
  FaUtensils,
  FaBusAlt,
  FaClock,
  FaStar,
  FaChartPie,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkedAlt className="text-3xl text-blue-600" />,
    title: "Smart Route Mapping",
    desc: "See upcoming bus stops with live ETA and restaurant options.",
  },
  {
    icon: <FaUtensils className="text-3xl text-green-600" />,
    title: "Live Menus & Pricing",
    desc: "Browse real-time menus with updated prices and preparation times.",
  },
  {
    icon: <FaClock className="text-3xl text-amber-500" />,
    title: "In-Transit Pre-Orders",
    desc: "Order meals while traveling and skip long queues at food stops.",
  },
  {
    icon: <FaBusAlt className="text-3xl text-purple-600" />,
    title: "Bus-Stop Coordination",
    desc: "Partner stops ensure smooth food pickup and incentives for buses.",
  },
  {
    icon: <FaStar className="text-3xl text-yellow-500" />,
    title: "Express Pickup Counters",
    desc: "Dedicated counters provide fast delivery of pre-ordered meals.",
  },
  {
    icon: <FaChartPie className="text-3xl text-red-500" />,
    title: "Customer Insights & Reports",
    desc: "Track your food history with daily, weekly, and monthly order reports & reviews.",
  },
];

export default function Features() {
  return (
    <section className="bg-cyan-400 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose Highway FoodHub?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
