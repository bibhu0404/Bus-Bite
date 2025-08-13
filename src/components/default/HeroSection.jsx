import React from "react";
export default function HeroSection() {
  return (
    <section className="bg-amber-200 w-full min-h-[100vh] flex items-center justify-center">
      <div className="max-w-5xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
          “Smart Food Stops for Smarter Bus Rides”
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Order food ahead, save time, and make every journey delicious.
        </p>
      </div>
    </section>
  );
}