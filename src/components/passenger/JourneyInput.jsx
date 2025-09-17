import React, { useState, useEffect, useRef } from 'react';

// Main App component to render our location viewer
export default function JourneyInput() {
  return (
    <div className="bg-gray-100">
      <PassengerLocationDetails />
    </div>
  );
}

// --- Mock Data for Route Search ---
// Added menu items and prep time for each restaurant
const routeData = {
  'lucknow-delhi': [
    { name: "Alambagh Bus Terminal, Lucknow", lat: 26.8185, lng: 80.9056, type: 'bus_stop' },
    { name: "Dastarkhwan Restaurant, Lucknow", lat: 26.8510, lng: 80.9450, type: 'restaurant', menu: ['Biryani', 'Kebab'], prepTime: 20 },
    { name: "Agra Fort", lat: 27.1795, lng: 78.0211, type: 'bus_stop' },
    { name: "Pind Balluchi, Agra", lat: 27.1601, lng: 78.0471, type: 'restaurant', menu: ['Thali', 'Chole Bhature'], prepTime: 25 },
    { name: "Anand Vihar ISBT, Delhi", lat: 28.6510, lng: 77.3150, type: 'bus_stop' },
  ],
  'delhi-jaipur': [
    { name: "Dhaula Kuan, Delhi", lat: 28.5939, lng: 77.1585, type: 'bus_stop' },
    { name: "Old Rao Hotel, NH48", lat: 28.2915, lng: 76.7845, type: 'restaurant', menu: ['Paratha', 'Tea'], prepTime: 15 },
    { name: "Hotel Highway King, Behror", lat: 27.8851, lng: 76.2852, type: 'restaurant', menu: ['Dal Makhani', 'Paneer Butter Masala'], prepTime: 30 },
    { name: "Sindhi Camp Bus Stand, Jaipur", lat: 26.9239, lng: 75.7873, type: 'bus_stop' },
  ],
   'jaipur-mumbai': [
    { name: "Narayan Singh Circle, Jaipur", lat: 26.9032, lng: 75.8105, type: 'bus_stop' },
    { name: "Ajmer Bus Stand", lat: 26.4680, lng: 74.6390, type: 'bus_stop' },
    { name: "Honest Restaurant, Ahmedabad", lat: 23.0225, lng: 72.5714, type: 'restaurant', menu: ['Pav Bhaji', 'Dosa'], prepTime: 15 },
    { name: "Sankalp Restaurant, Vadodara", lat: 22.3212, lng: 73.1722, type: 'restaurant', menu: ['Thali', 'Idli Sambhar'], prepTime: 20 },
    { name: "Borivali Station, Mumbai", lat: 19.2288, lng: 72.8571, type: 'bus_stop' },
  ]
};

const locations = ["Lucknow", "Delhi", "Jaipur", "Mumbai"];

// --- Helper function to calculate distance (simplified for simulation) ---
const calculateDistance = (loc1, loc2) => {
    return Math.sqrt(Math.pow(loc1.lat - loc2.lat, 2) + Math.pow(loc1.lng - loc2.lng, 2));
};

function PassengerLocationDetails() {
  const [from, setFrom] = useState(locations[0]);
  const [to, setTo] = useState(locations[1]);
  const [route, setRoute] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);
  const [busLocation, setBusLocation] = useState(null);
  const [status, setStatus] = useState('Select your journey details and click search.');
  const [mapUrl, setMapUrl] = useState("https://maps.google.com/maps?q=India&hl=en&z=5&output=embed");
  const [statusColor, setStatusColor] = useState('text-gray-600');
  const intervalRef = useRef(null);

  // --- Journey Simulation Logic ---
  useEffect(() => {
    if (!isJourneyStarted || route.length < 2) return;

    let currentIndex = 0;
    setBusLocation(route[0]); // Start at the first point

    intervalRef.current = setInterval(() => {
      currentIndex++;
      if (currentIndex >= route.length) {
        clearInterval(intervalRef.current);
        setIsJourneyStarted(false);
        setStatus(`Journey to ${to} finished!`);
        setStatusColor('text-green-600');
        return;
      }
      setBusLocation(route[currentIndex]);
      setStatus(`Bus is approaching: ${route[currentIndex].name}`);
    }, 5000); // Move to the next stop every 5 seconds

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [isJourneyStarted, route, to]);
  
  // Update map to follow the bus
  useEffect(() => {
    if (busLocation) {
        const busMarkerUrl = `&markers=color:blue%7Clabel:B%7C${busLocation.lat},${busLocation.lng}`;
        setMapUrl(`https://maps.google.com/maps?q=${busLocation.lat},${busLocation.lng}&hl=en&z=14&output=embed` + busMarkerUrl);
    }
  }, [busLocation]);


  const handleSearch = () => {
    if (from === to) {
      setStatus('"From" and "To" locations cannot be the same.');
      setStatusColor('text-red-500');
      setRoute([]);
      setIsSearched(true);
      return;
    }
    const fromQuery = from.toLowerCase();
    const toQuery = to.toLowerCase();
    const routeKey = `${fromQuery}-${toQuery}`;
    const reverseRouteKey = `${toQuery}-${fromQuery}`;
    let foundRoute = [];

    if (routeData[routeKey]) foundRoute = routeData[routeKey];
    else if (routeData[reverseRouteKey]) foundRoute = routeData[reverseRouteKey].slice().reverse();
    
    setRoute(foundRoute);
    setIsSearched(true);
    setIsJourneyStarted(false); // Reset journey on new search

    if (foundRoute.length > 0) {
        setStatus(`Route found for ${from} to ${to}. Ready to start journey.`);
        setStatusColor('text-gray-700');
    } else {
        setStatus(`No direct route data found for ${from} to ${to}.`);
        setStatusColor('text-orange-500');
    }
  };

  const updateMap = (lat, lng, name) => {
    setStatus(`Showing location for: ${name}`);
    setMapUrl(`https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=14&output=embed`);
  };

  const handleStartJourney = () => {
      if (route.length > 0) {
        setIsJourneyStarted(true);
        setStatus(`Journey from ${from} to ${to} has started.`);
        setStatusColor('text-blue-600');
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10 font-sans">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center w-full max-w-4xl mx-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">BusBite Journey Planner</h1>
        <p className={`h-6 mb-4 transition-colors duration-300 font-medium ${statusColor}`}>{status}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg">
            {locations.map(loc => <option key={`from-${loc}`} value={loc}>{loc}</option>)}
          </select>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg">
            {locations.map(loc => <option key={`to-${loc}`} value={loc}>{loc}</option>)}
          </select>
          <button onClick={handleSearch} className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {isSearched && !isJourneyStarted && route.length > 0 && (
            <button onClick={handleStartJourney} className="w-full sm:w-auto bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 mb-6">
                Start Journey
            </button>
        )}

        {isSearched && (
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Bus Stops</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {route.filter(item => item.type === 'bus_stop').map(stop => (
                  <div key={stop.name} onClick={() => updateMap(stop.lat, stop.lng, stop.name)} className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-blue-100">
                    {stop.name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Order Food</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {route.filter(item => item.type === 'restaurant').map(resto => {
                  const distance = busLocation ? calculateDistance(busLocation, resto) : Infinity;
                  const isUpcoming = busLocation ? (route.findIndex(p => p.name === busLocation.name) < route.findIndex(p => p.name === resto.name)) : true;
                  const canOrder = isJourneyStarted && isUpcoming && distance < 0.5; // Order when bus is "close"
                  
                  return (
                    <div key={resto.name} className={`p-3 rounded-lg transition-all ${canOrder ? 'bg-green-100' : 'bg-gray-100 opacity-60'}`}>
                      <p className="font-semibold">{resto.name}</p>
                      <p className="text-sm text-gray-600">Menu: {resto.menu.join(', ')}</p>
                      <p className="text-sm text-gray-500">Prep time: {resto.prepTime} mins</p>
                      {isJourneyStarted && isUpcoming && <p className="text-sm font-bold text-blue-700">ETA: {Math.round(distance * 10)} mins</p>}
                      <button disabled={!canOrder} className="mt-2 w-full text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 bg-green-500 hover:bg-green-600">
                        {canOrder ? 'Order Now' : (isJourneyStarted && !isUpcoming ? 'Passed' : 'Order Soon')}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="w-full aspect-w-16 aspect-h-9 mt-8">
          <iframe
            id="map-frame"
            title="Location Map"
            width="100%"
            height="450"
            style={{ border: '1px solid #ccc', borderRadius: '0.75rem' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}
