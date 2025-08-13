import React from "react";

export default function AllOrdersPage() {
  const dummyOrders = [
    {
      id: "ORD12345",
      customerName: "Bibhanshu",
      items: ["Paneer Pizza", "Coke"],
      total: "₹320",
      status: "Delivered",
    },
    {
      id: "ORD12346",
      customerName: "Ayushi",
      items: ["Burger", "Fries"],
      total: "₹220",
      status: "Preparing",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">All Orders</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Items</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Total</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customerName}</td>
                <td className="px-6 py-4">{order.items.join(", ")}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "Preparing"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
