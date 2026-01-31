import React, { useState, useEffect } from 'react';
import StatBox from './StatBox';            // ✅ FIXED CASE
import DashboardCard from './DashboardCard';
import { useNavigate } from 'react-router-dom';
import {
  FaClipboardList,
  FaMoneyBillWave,
  FaUtensils,
  FaStar
} from 'react-icons/fa';

export default function RestaurantDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user?.role === 'restaurant') {
      setCurrentUser(user);
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  if (!currentUser) return null;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatBox icon={<FaClipboardList />} title="Total Orders" value="120" color="orange" />
        <StatBox icon={<FaMoneyBillWave />} title="Earnings (This Month)" value="₹56,300" color="green" />
        <StatBox icon={<FaUtensils />} title="Menu Items" value="35" color="blue" />
        <StatBox icon={<FaStar />} title="Avg. Rating" value="4.6 ★" color="purple" />
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Manage Menu"
          desc="Add, edit, or remove items from your restaurant's menu."
          color="red"
          btn="Edit Menu"
          onClick={() => navigate('/restaurant/menu-management')}
        />
        <DashboardCard
          title="View All Orders"
          desc="Keep track of new, pending, and completed orders."
          color="orange"
          btn="Orders List"
          onClick={() => navigate('/restaurant/orders')}
        />
        <DashboardCard
          title="Restaurant Analytics"
          desc="Gain insights into your sales, popular dishes, and customer feedback."
          color="purple"
          btn="View Analytics"
          onClick={() => navigate('/restaurant/analytics')}
        />
      </div>
    </div>
  );
}
