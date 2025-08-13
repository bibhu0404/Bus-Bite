import React from 'react';

export default function DashboardCard({ title, desc, color, btn, onClick }) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-${color}-500`}>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{desc}</p>
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-${color}-500 text-white rounded hover:bg-${color}-600`}
      >
        {btn}
      </button>
    </div>
  );
}
