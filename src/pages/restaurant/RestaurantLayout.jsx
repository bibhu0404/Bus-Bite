import React from 'react';
import RestaurantHeader from '../../components/restaurant/RestaurantHeader';
import Footer from '../../components/default/Footer';
import { Outlet } from 'react-router-dom';

export default function RestaurantLayout() {
  return (
    <>
      <RestaurantHeader />
      <Outlet />
      <Footer />
    </>
  );
}
