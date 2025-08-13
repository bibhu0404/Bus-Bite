import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import StatCard from "./StatCard";
import DashboardCard from "./DashboardCard";
import OrderRow from "./OrderRow";

export default function PassengerDashboard() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user && user.role === "passenger") {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">BusBite</h2>
        <nav className="space-y-4">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            🍔 <span>Order Now</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
            🚚 <span>Track Orders</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600">
            🎁 <span>Offers</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, {currentUser?.fullName || currentUser?.email || "Passenger"}!
            </h1>
            <p className="text-gray-500 mt-1">Here’s your food world at a glance.</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-4xl text-blue-500" />
            <span className="text-gray-700 font-semibold">
              {currentUser?.email || "guest@example.com"}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Orders" count={12} color="blue" />
          <StatCard title="Ongoing Orders" count={3} color="green" />
          <StatCard title="Saved Restaurants" count={5} color="yellow" />
          <StatCard title="Coupons" count={4} color="purple" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <DashboardCard
            title="Order Now"
            description="Browse restaurants and place your next delicious order."
            color="blue"
            buttonText="Find Food"
          />
          <DashboardCard
            title="Track Your Orders"
            description="See the real-time status of your current deliveries."
            color="green"
            buttonText="Track Orders"
          />
          <DashboardCard
            title="Exclusive Offers"
            description="Don't miss out on amazing discounts and promotions!"
            color="yellow"
            buttonText="View Offers"
          />
        </div>

        {/* Orders Table */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-gray-600">
              <thead>
                <tr className="bg-gray-100 text-sm">
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Restaurant</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <OrderRow id="#12345" restaurant="Domino's" date="Aug 5" amount="₹349" status="Delivered" />
                <OrderRow id="#12346" restaurant="KFC" date="Aug 3" amount="₹499" status="In Transit" />
                <OrderRow id="#12347" restaurant="Haldiram's" date="Aug 1" amount="₹279" status="Cancelled" />
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
