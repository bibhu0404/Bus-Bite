import React, { useState, useEffect, useRef } from "react";

/* =======================
   MAIN EXPORT COMPONENT
======================= */
export default function JourneyInput() {
  return (
    <div className="bg-gray-100">
      <PassengerLocationDetails />
    </div>
  );
}

/* =======================
   MOCK ROUTE DATA
======================= */
const routeData = {
  "lucknow-delhi": [
    { name: "Alambagh Bus Terminal, Lucknow", lat: 26.8185, lng: 80.9056, type: "bus_stop" },
    { name: "Dastarkhwan Restaurant, Lucknow", lat: 26.851, lng: 80.945, type: "restaurant", menu: ["Biryani", "Kebab"], prepTime: 20 },
    { name: "Agra Fort", lat: 27.1795, lng: 78.0211, type: "bus_stop" },
    { name: "Pind Balluchi, Agra", lat: 27.1601, lng: 78.0471, type: "restaurant", menu: ["Thali", "Chole Bhature"], prepTime: 25 },
    { name: "Anand Vihar ISBT, Delhi", lat: 28.651, lng: 77.315, type: "bus_stop" }
  ],

  "delhi-jaipur": [
    { name: "Dhaula Kuan, Delhi", lat: 28.5939, lng: 77.1585, type: "bus_stop" },
    { name: "Old Rao Hotel, NH48", lat: 28.2915, lng: 76.7845, type: "restaurant", menu: ["Paratha", "Tea"], prepTime: 15 },
    { name: "Hotel Highway King, Behror", lat: 27.8851, lng: 76.2852, type: "restaurant", menu: ["Dal Makhani", "Paneer Butter Masala"], prepTime: 30 },
    { name: "Sindhi Camp Bus Stand, Jaipur", lat: 26.9239, lng: 75.7873, type: "bus_stop" }
  ],

  "jaipur-mumbai": [
    { name: "Narayan Singh Circle, Jaipur", lat: 26.9032, lng: 75.8105, type: "bus_stop" },
    { name: "Ajmer Bus Stand", lat: 26.468, lng: 74.639, type: "bus_stop" },
    { name: "Honest Restaurant, Ahmedabad", lat: 23.0225, lng: 72.5714, type: "restaurant", menu: ["Pav Bhaji", "Dosa"], prepTime: 15 },
    { name: "Sankalp Restaurant, Vadodara", lat: 22.3212, lng: 73.1722, type: "restaurant", menu: ["Thali", "Idli Sambhar"], prepTime: 20 },
    { name: "Borivali Station, Mumbai", lat: 19.2288, lng: 72.8571, type: "bus_stop" }
  ]
};

const locations = ["Lucknow", "Delhi", "Jaipur", "Mumbai"];

/* =======================
   UTILITY
======================= */

/* =======================
   PASSENGER COMPONENT
======================= */
function PassengerLocationDetails() {
  const [from, setFrom] = useState("Lucknow");
  const [to, setTo] = useState("Delhi");
  const [route, setRoute] = useState([]);
  const [searched, setSearched] = useState(false);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [busLocation, setBusLocation] = useState(null);
  const [status, setStatus] = useState("Select journey and search.");
  const [statusColor, setStatusColor] = useState("text-gray-600");
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?q=India&z=5&output=embed"
  );

  const intervalRef = useRef(null);

  /* ===== Journey Simulation ===== */
  useEffect(() => {
    if (!journeyStarted || route.length < 2) return;

    let index = 0;
    setBusLocation(route[0]);

    intervalRef.current = setInterval(() => {
      index++;
      if (index >= route.length) {
        clearInterval(intervalRef.current);
        setJourneyStarted(false);
        setStatus(`Journey to ${to} completed!`);
        setStatusColor("text-green-600");
        return;
      }
      setBusLocation(route[index]);
      setStatus(`Approaching: ${route[index].name}`);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [journeyStarted, route, to]);

  /* ===== Map Tracking ===== */
  useEffect(() => {
    if (!busLocation) return;
    setMapUrl(
      `https://maps.google.com/maps?q=${busLocation.lat},${busLocation.lng}&z=14&output=embed`
    );
  }, [busLocation]);

  /* ===== Handlers ===== */
  const handleSearch = () => {
    if (from === to) {
      setStatus("From and To cannot be same.");
      setStatusColor("text-red-600");
      setRoute([]);
      setSearched(true);
      return;
    }

    const key = `${from.toLowerCase()}-${to.toLowerCase()}`;
    const revKey = `${to.toLowerCase()}-${from.toLowerCase()}`;

    let found = routeData[key] || routeData[revKey]?.slice().reverse() || [];

    setRoute(found);
    setSearched(true);
    setJourneyStarted(false);

    if (found.length) {
      setStatus(`Route found for ${from} → ${to}`);
      setStatusColor("text-gray-700");
    } else {
      setStatus("No route data available.");
      setStatusColor("text-orange-600");
    }
  };

  const startJourney = () => {
    if (!route.length) return;
    setJourneyStarted(true);
    setStatus(`Journey started from ${from}`);
    setStatusColor("text-blue-600");
  };

  /* =======================
     UI
  ======================= */
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-2">BusBite Journey Planner</h1>
        <p className={`mb-4 font-medium ${statusColor}`}>{status}</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="border p-3 rounded-lg w-full">
            {locations.map((l) => <option key={l}>{l}</option>)}
          </select>

          <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-3 rounded-lg w-full">
            {locations.map((l) => <option key={l}>{l}</option>)}
          </select>

          <button onClick={handleSearch} className="bg-blue-600 text-white px-6 rounded-lg">
            Search
          </button>
        </div>

        {searched && route.length > 0 && !journeyStarted && (
          <button onClick={startJourney} className="bg-green-600 text-white px-6 py-2 rounded-lg mb-4">
            Start Journey
          </button>
        )}

        <iframe
          title="map"
          src={mapUrl}
          width="100%"
          height="450"
          className="rounded-xl border"
          loading="lazy"
        />
      </div>
    </div>
  );
}
