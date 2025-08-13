import React from "react";

export default function ManageMenuCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Menu</h2>
      <div className="flex items-center gap-4 mb-4">
        <img src="https://via.placeholder.com/80" alt="menu item" className="rounded-lg shadow-sm" />
        <div>
          <p className="font-semibold">Cheese Burger</p>
          <p className="text-sm text-gray-600">₹129</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Item</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Edit Menu</button>
      </div>
    </div>
  );
}
