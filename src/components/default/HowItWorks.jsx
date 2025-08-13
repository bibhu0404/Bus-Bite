import React, { useState } from "react";

export default function Workings() {
  const [mode, setMode] = useState("Passenger");

  const passengerSteps = [
    "Enter Journey & Location",
    "Browse Menu & Order",
    "Enjoy Meal & Rate Restaurant",
  ];

  const restaurantSteps = [
    "Register Outlet",
    "Accept & Manage Orders",
    "Add / Edit Menu & Bus Details",
  ];

  const steps = mode === "Passenger" ? passengerSteps : restaurantSteps;

  return (
    <section className="w-full py-12 bg-red-200">
      <h2 className="text-center text-4xl md:text-6xl font-bold text-gray-800 mb-8">
        How It Works?
      </h2>

      {/* Mode Switch */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setMode("Passenger")}
          className={`hover:cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all ${
            mode === "Passenger"
              ? "bg-pink-300 text-pink-800 shadow-lg"
              : "bg-pink-100 text-pink-600 hover:bg-pink-200"
          }`}
        >
          Passenger
        </button>
        <button
          onClick={() => setMode("Restaurant")}
          className={`hover:cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all ${
            mode === "Restaurant"
              ? "bg-blue-300 text-blue-800 shadow-lg"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
        >
          Restaurant
        </button>
      </div>

      <div className="text-center text-2xl font-semibold mb-8">
        3-Step Process for <span className="text-amber-600">{mode}</span>:
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 min-h-[180px] rounded-2xl shadow-xl flex items-center justify-center text-center p-6 text-xl font-semibold transition-all
              ${mode === "Passenger" ? "bg-pink-100 text-pink-800" : "bg-blue-100 text-blue-800"}
            `}
          >
            {index + 1}. {step}
          </div>
        ))}
      </div>
    </section>
  );
}
