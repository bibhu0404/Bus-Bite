import React from "react";

export default function RevenueAnalyticsCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue & Analytics</h2>
      <p className="text-gray-600">Total Revenue (This Month):</p>
      <p className="text-3xl font-bold text-green-600 mb-4">₹25,420</p>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <p>Orders:</p>
        <p className="text-right">125</p>
        <p>Avg. Order Value:</p>
        <p className="text-right">₹203.36</p>
        <p>Most Ordered Item:</p>
        <p className="text-right">Paneer Wrap</p>
      </div>
    </div>
  );
}
