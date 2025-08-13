import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/default/LandingPage';
import DefaultLayout from './pages/default/DefaultLayout';
import ContactUs from './pages/default/ContactUs';
import AboutUs from './pages/default/AboutUs';
import AuthPage from './pages/default/AuthPage';
//Passenger
import PassengerLayout from './pages/passenger/PassengerLayout';
import PassengerDashboard from './pages/passenger/PassengerDashboard';
import OffersPage from './pages/passenger/OffersPage';
import TrackOrdersPage from './pages/passenger/TrackOrdersPage';
import PassengerProfile from './pages/passenger/PassengerProfile';

//Restaurant
import RestaurantLayout from './pages/restaurant/RestaurantLayout';
import RestaurantDashboard from './pages/restaurant/RestaurantDashboard';
import MenuManagementPage from './pages/restaurant/MenuManagementPage';
import AllOrdersPage from './pages/restaurant/AllOrdersPage';
import RestaurantProfile from './pages/restaurant/RestaurantProfile';

function App() {
  const handleAuthSuccess = (role) => {
    console.log(`Auth successful for ${role}. AuthPage will navigate.`);
  };

  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage onAuthSuccess={handleAuthSuccess} />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Route>
      
        <Route path="/passenger" element={<PassengerLayout />}>
          <Route index element={<PassengerDashboard />} />
          <Route path="dashboard" element={<PassengerDashboard />} />
          <Route path="profile" element={<PassengerProfile />} />
          <Route path="track-orders" element={<TrackOrdersPage />} />
          <Route path="offers" element={<OffersPage />} />
        </Route>

        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<RestaurantDashboard />} />
          <Route path="profile" element={<RestaurantProfile />} />
          <Route path="dashboard" element={<RestaurantDashboard />} />
          <Route path="menu-management" element={<MenuManagementPage />} />
          <Route path="orders" element={<AllOrdersPage />} />
        </Route>

        <Route path="*" element={<h1 className="text-center text-red-500 mt-10">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
