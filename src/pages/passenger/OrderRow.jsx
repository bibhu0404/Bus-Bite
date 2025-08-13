import React from "react";

export default function OrderRow({ id, restaurant, date, amount, status }) {
  const statusColor =
    status === "Delivered"
      ? "text-green-600"
      : status === "In Transit"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <tr className="border-b">
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{restaurant}</td>
      <td className="px-4 py-2">{date}</td>
      <td className="px-4 py-2">{amount}</td>
      <td className={`px-4 py-2 font-semibold ${statusColor}`}>{status}</td>
    </tr>
  );
}
