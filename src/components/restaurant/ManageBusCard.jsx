import React from "react";

export default function ManageBusCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Bus Stops</h2>
      <div className="mb-4">
        <p className="text-gray-600">Bus No: <strong>UP32 AB 4012</strong></p>
        <p className="text-sm text-gray-500">Next Stop: Sector 62, ETA: 10 mins</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Bus</button>
        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Edit Details</button>
      </div>
    </div>
  );
}
