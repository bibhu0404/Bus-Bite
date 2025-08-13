import React from 'react'

const mockOrders = [
  {
    id: '#ORD1021',
    restaurant: "Domino's",
    items: ['Margherita Pizza', 'Choco Lava Cake'],
    date: 'Aug 5, 2025',
    status: 'Out for Delivery',
    amount: 399,
  },
  {
    id: '#ORD1018',
    restaurant: 'KFC',
    items: ['Zinger Burger', 'Pepsi'],
    date: 'Aug 4, 2025',
    status: 'Preparing',
    amount: 299,
  },
  {
    id: '#ORD1014',
    restaurant: "Haldiram's",
    items: ['Paneer Thali'],
    date: 'Aug 2, 2025',
    status: 'Delivered',
    amount: 249,
  },
  {
    id: '#ORD1009',
    restaurant: "Subway",
    items: ['Veggie Delight Sub'],
    date: 'July 30, 2025',
    status: 'Cancelled',
    amount: 199,
  },
];

function getStatusColor(status) {
  switch (status) {
    case 'Preparing':
      return 'text-yellow-600 bg-yellow-100';
    case 'Out for Delivery':
      return 'text-blue-600 bg-blue-100';
    case 'Delivered':
      return 'text-green-600 bg-green-100';
    case 'Cancelled':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

function TrackOrdersPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Track Your Orders</h1>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center transition-all hover:shadow-lg"
          >
            {/* Left: Order Info */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold text-gray-800">{order.restaurant}</h2>
              <p className="text-sm text-gray-500">{order.items.join(', ')}</p>
              <p className="text-sm text-gray-400">{order.date}</p>
              <p className="text-md font-medium text-gray-800 mt-1">Amount: ₹{order.amount}</p>
            </div>

            {/* Right: Status + Track */}
            <div className="flex flex-col md:items-end space-y-2">
              <span
                className={`text-sm px-3 py-1 rounded-full font-semibold ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status}
              </span>
              {order.status === 'Preparing' || order.status === 'Out for Delivery' ? (
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
                  Track Order
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackOrdersPage;
