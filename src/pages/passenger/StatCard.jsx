import React from "react";

export default function StatCard({ title, count, color }) {
  const colorMap = {
    blue: "text-blue-500 bg-blue-50",
    green: "text-green-500 bg-green-50",
    yellow: "text-yellow-500 bg-yellow-50",
    purple: "text-purple-500 bg-purple-50",
  };

  return (
    <div className={`p-4 rounded-xl shadow-sm ${colorMap[color]} border`}>
      <p className="text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{count}</h3>
    </div>
  );
}
