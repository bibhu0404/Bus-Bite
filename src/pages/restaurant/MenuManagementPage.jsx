import React, { useState } from "react";

export default function MenuManagementPage() {
  const [menuItems, setMenuItems] = useState([
    { name: "Paneer Pizza", price: 199 },
    { name: "Burger", price: 99 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", price: "" });

  const handleAdd = () => {
    if (!newItem.name || !newItem.price) return;
    setMenuItems([...menuItems, { ...newItem }]);
    setNewItem({ name: "", price: "" });
  };

  const handleRemove = (index) => {
    const updated = [...menuItems];
    updated.splice(index, 1);
    setMenuItems(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Manage Menu</h1>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Item</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="border p-2 rounded-lg w-full md:w-1/2"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            className="border p-2 rounded-lg w-full md:w-1/4"
            placeholder="Price"
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Current Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border rounded hover:bg-gray-50"
            >
              <span>
                {item.name} - ₹{item.price}
              </span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
