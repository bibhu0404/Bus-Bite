import React from 'react';

export default function StatBox({ icon, title, value, color }) {
  const colorMap = {
    orange: 'text-orange-600 bg-orange-100',
    green: 'text-green-600 bg-green-100',
    blue: 'text-blue-600 bg-blue-100',
    purple: 'text-purple-600 bg-purple-100',
  };

  return (
    <div className={`p-4 rounded-xl shadow-md border ${colorMap[color]} flex items-center gap-4`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
