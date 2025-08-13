import React from "react";

export default function IncomingOrdersCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Incoming Orders</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded-md shadow-sm">
          <p><strong>Order #1023</strong> | John Doe</p>
          <p>Items: Veg Burger x1, Fries x2</p>
          <p>Status: <span className="text-yellow-600">Pending</span></p>
          <div className="flex gap-2 mt-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Accept</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Reject</button>
          </div>
        </div>
        {/* Add more orders dynamically here */}
      </div>
      <button className="mt-4 w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md">View All Orders</button>
    </div>
  );
}