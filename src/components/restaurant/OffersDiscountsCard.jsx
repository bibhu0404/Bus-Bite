import React from "react";

export default function OffersDiscountsCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Offers & Discounts</h2>
      <div className="mb-4 border rounded-md p-4 shadow-sm">
        <p className="text-lg font-semibold text-purple-700">Combo Offer:</p>
        <p className="text-sm text-gray-600">Burger + Fries + Coke for ₹199</p>
        <p className="text-sm text-gray-500">Valid till: 31 Aug</p>
      </div>
      <div className="mb-4 border rounded-md p-4 shadow-sm">
        <p className="text-lg font-semibold text-green-700">Coupon Code: <code>WELCOME50</code></p>
        <p className="text-sm text-gray-600">Get 50% off on first order</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Offer</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Create Coupon</button>
      </div>
    </div>
  );
}
