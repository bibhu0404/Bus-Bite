import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-red-100 py-10 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold  text-emerald-800">About Us</h1>
        <p className="mt-2 text-gray-600">
          Smart Food Stops for Smarter Bus Rides
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6 text-gray-700 leading-relaxed space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Vision</h2>
          <p>
            BusBite aims to revolutionize highway food service by connecting
            passengers, buses, and restaurants through a seamless pre-order
            system. We ensure you enjoy your journey while having your favorite
            meals ready at every stop.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Problem We Solve</h2>
          <ul className="list-disc ml-6">
            <li>Passengers waste time standing in queues at food stops.</li>
            <li>No visibility of food options on upcoming stops.</li>
            <li>Restaurants face unpredictable demand when buses arrive.</li>
            <li>Buses stop randomly causing inefficiency in service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Solution</h2>
          <p>
            We provide a mobile/web platform that maps bus routes with food stops,
            lets passengers pre-order, and offers restaurants a steady flow of
            customers with organized order management.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Features</h2>
          <ul className="list-disc ml-6">
            <li>Interactive Bus Route Maps with Food Stops.</li>
            <li>Live Menus and Pricing for each restaurant.</li>
            <li>In-Transit Ordering for passengers.</li>
            <li>Express Pickup Counters to skip the line.</li>
            <li>Restaurant Dashboard for order management.</li>
            <li>Passenger Reviews and Analytics.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}