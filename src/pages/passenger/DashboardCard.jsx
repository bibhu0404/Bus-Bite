import React from "react";

export default function DashboardCard({ title, description, color, buttonText }) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      btn: "bg-blue-500 hover:bg-blue-600",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      btn: "bg-green-500 hover:bg-green-600",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      btn: "bg-yellow-500 hover:bg-yellow-600",
    },
  };

  const style = colorMap[color];

  return (
    <div className={`${style.bg} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200`}>
      <h2 className={`text-xl font-semibold ${style.text} mb-2`}>{title}</h2>
      <p className="text-gray-700">{description}</p>
      <button className={`mt-4 ${style.btn} text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200`}>
        {buttonText}
      </button>
    </div>
  );
}
