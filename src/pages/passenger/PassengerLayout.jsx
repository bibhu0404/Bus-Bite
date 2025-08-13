import React, { useEffect } from 'react';
import PassengerHeader from '../../components/passenger/PassengerHeader';
import Footer from '../../components/default/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PassengerLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // If no user or if the user is not a passenger, redirect to auth page
    if (!currentUser || currentUser.role !== 'passenger') {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <>
      <PassengerHeader />
      <Outlet />
      <Footer />
    </>
  );
}
